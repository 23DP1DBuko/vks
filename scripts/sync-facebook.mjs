#!/usr/bin/env node
/**
 * Синхронизация постов Facebook -> сайт («Жизнь клуба»).
 *
 * Забирает последние посты страницы клуба через Graph API, скачивает фото
 * локально в public/images/posts (ссылки Facebook CDN со временем протухают)
 * и генерирует src/data/facebookPosts.ts. Токен остаётся только на машине
 * разработчика/в CI - в браузер он не попадает.
 *
 * Настройка (один раз):
 *   1) developers.facebook.com -> My Apps -> Create App (тип Business).
 *   2) Инструменты -> Graph API Explorer: выбрать приложение, затем страницу клуба,
 *      выдать права pages_show_list, pages_read_engagement и скопировать Page Access Token.
 *      (Для долгоживущего токена: обменять на long-lived token в Access Token Debugger.)
 *   3) Создать в корне проекта файл .env.local:
 *        FB_PAGE_ID=1234567890
 *        FB_PAGE_TOKEN=EAAG...
 *   4) npm run sync:fb   (затем npm run build / обычный деплой)
 *
 * Автоматизация: тот же скрипт можно запускать по расписанию в CI
 * (например, GitHub Actions cron) и коммитить обновлённый файл.
 */
import { existsSync } from 'node:fs'
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'

const GRAPH_VERSION = 'v21.0'
const POSTS_LIMIT = 12
const OUTPUT_FILE = 'src/data/facebookPosts.ts'
const IMAGES_DIR = 'public/images/posts'
const IMAGES_URL_PREFIX = '/images/posts'

async function loadEnvLocal() {
  if (!existsSync('.env.local')) return {}
  const raw = await readFile('.env.local', 'utf8')
  const env = {}
  for (const line of raw.split('\n')) {
    const match = /^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line)
    if (match && match[2]) env[match[1]] = match[2].replace(/^["']|["']$/g, '')
  }
  return env
}

function extensionFromUrl(url) {
  const ext = path.extname(url.split('?')[0]).toLowerCase()
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext) ? ext : '.jpg'
}

function altFromMessage(message) {
  return message.replace(/\s+/g, ' ').trim().slice(0, 120)
}

function toTsFile(entries, syncedAt) {
  const items = entries
    .map((post) =>
      [
        '  {',
        `    id: ${JSON.stringify(post.id)},`,
        `    date: ${JSON.stringify(post.date)},`,
        `    text: ${JSON.stringify(post.text)},`,
        post.image ? `    image: ${JSON.stringify(post.image)},` : null,
        post.imageAlt ? `    imageAlt: ${JSON.stringify(post.imageAlt)},` : null,
        `    url: ${JSON.stringify(post.url)},`,
        '  },',
      ]
        .filter(Boolean)
        .join('\n'),
    )
    .join('\n')

  return [
    "import type { SocialPost } from '../types'",
    '',
    '/**',
    ` * Посты клуба из Facebook. Сгенерировано: ${syncedAt} (npm run sync:fb).`,
    ' * Руками не редактировать - правки затрутся при следующей синхронизации.',
    ' */',
    'export const FACEBOOK_POSTS: SocialPost[] = [',
    items,
    ']',
    '',
  ].join('\n')
}

async function main() {
  const envLocal = await loadEnvLocal()
  const pageId = process.env.FB_PAGE_ID ?? envLocal.FB_PAGE_ID
  const token = process.env.FB_PAGE_TOKEN ?? envLocal.FB_PAGE_TOKEN

  if (!pageId || !token) {
    console.error(
      [
        'Не заданы FB_PAGE_ID и/или FB_PAGE_TOKEN.',
        'Добавьте их в .env.local (см. инструкцию в начале scripts/sync-facebook.mjs)',
        'или передайте переменными окружения.',
      ].join('\n'),
    )
    process.exit(1)
  }

  const fields = 'id,message,created_time,permalink_url,full_picture'
  const endpoint =
    `https://graph.facebook.com/${GRAPH_VERSION}/${pageId}/posts` +
    `?fields=${fields}&limit=${POSTS_LIMIT}&access_token=${encodeURIComponent(token)}`

  console.log('Запрашиваю посты у Facebook Graph API...')
  const response = await fetch(endpoint)
  const payload = await response.json()

  if (!response.ok || payload.error) {
    console.error(`Facebook вернул ошибку: ${payload.error?.message ?? response.status}`)
    process.exit(1)
  }

  const posts = (payload.data ?? []).filter(
    (post) => typeof post.message === 'string' && post.message.trim() && post.permalink_url,
  )

  if (posts.length === 0) {
    console.warn('Постов с текстом не найдено - файл не изменён.')
    return
  }

  await mkdir(IMAGES_DIR, { recursive: true })

  const entries = []
  for (const post of posts) {
    let image = null
    if (post.full_picture) {
      const fileName = `${post.id}${extensionFromUrl(post.full_picture)}`
      try {
        const imageResponse = await fetch(post.full_picture)
        if (imageResponse.ok) {
          const buffer = Buffer.from(await imageResponse.arrayBuffer())
          await writeFile(path.join(IMAGES_DIR, fileName), buffer)
          image = `${IMAGES_URL_PREFIX}/${fileName}`
        } else {
          console.warn(`  ! фото не скачалось (${imageResponse.status}) - пост ${post.id}`)
        }
      } catch (error) {
        console.warn(`  ! ошибка загрузки фото - пост ${post.id}: ${error.message}`)
      }
    }

    entries.push({
      id: post.id,
      date: post.created_time,
      text: post.message.trim(),
      image,
      imageAlt: altFromMessage(post.message),
      url: post.permalink_url,
    })
  }

  await writeFile(OUTPUT_FILE, toTsFile(entries, new Date().toISOString().slice(0, 10)))

  // Убираем фото постов, которые больше не актуальны (удалённые/старые публикации).
  const usedFiles = new Set(entries.filter((entry) => entry.image).map((entry) => path.basename(entry.image)))
  const existing = await readdir(IMAGES_DIR).catch(() => [])
  for (const file of existing) {
    if (!usedFiles.has(file) && /\.(jpg|jpeg|png|webp)$/i.test(file)) {
      await unlink(path.join(IMAGES_DIR, file))
    }
  }

  const withPhoto = entries.filter((entry) => entry.image).length
  console.log(`Готово: ${entries.length} постов (с фото: ${withPhoto}) -> ${OUTPUT_FILE}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
