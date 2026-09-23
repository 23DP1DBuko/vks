import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons'
import { SmartImage } from './SmartImage'
import { FACEBOOK_POSTS } from '../data/facebookPosts'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'
import type { Lang } from '../types'

const LOCALES: Record<Lang, string> = { ru: 'ru-RU', en: 'en-GB', lv: 'lv-LV' }

/**
 * «Жизнь клуба»: посты Facebook прямо на сайте, без iframe и чужих виджетов.
 * Данные берутся из src/data/facebookPosts.ts - файла, который генерирует
 * синхронизация `npm run sync:fb` (Graph API + локальные копии фото).
 * Пока синхронизация не настроена, показываются демо-карточки из content.social.posts.
 * Текст постов не переводится - публикуем так, как клуб написал в Facebook.
 */
export function ClubLife() {
  const { t, lang } = useLang()
  const section = content.sections.social
  const social = content.social
  const posts = FACEBOOK_POSTS.length > 0 ? FACEBOOK_POSTS : social.posts
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)

  const getStep = () => {
    const card = trackRef.current?.querySelector<HTMLElement>('[data-card]')
    return card ? card.offsetWidth + 20 : 0
  }

  const scrollToIndex = (target: number) => {
    const step = getStep()
    if (!trackRef.current || !step) return
    trackRef.current.scrollTo({ left: target * step, behavior: 'smooth' })
  }

  const move = (direction: 1 | -1) =>
    scrollToIndex(Math.max(0, Math.min(maxIndex, index + direction)))

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const sync = () => {
      const step = getStep()
      if (!step) return
      setIndex(Math.round(track.scrollLeft / step))
      setMaxIndex(Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / step)))
    }
    sync()
    track.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      track.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [lang, posts.length])

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' }).format(
      new Date(iso),
    )

  const followButtons = (
    <div data-reveal className="mt-8 flex flex-wrap gap-3">
      {content.contacts.socials.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
        >
          {item.name === 'facebook' ? (
            <FacebookIcon size={16} />
          ) : item.name === 'instagram' ? (
            <InstagramIcon size={16} />
          ) : (
            <TikTokIcon size={16} />
          )}
          {t(social.followLabels[item.name])}
        </a>
      ))}
    </div>
  )

  return (
    <Section id="social">
      <Container>
        <SectionHeader
          kicker={t(section.kicker)}
          title={t(section.title)}
          subtitle={section.subtitle ? t(section.subtitle) : undefined}
        />
        <p data-reveal className="mb-8 max-w-2xl text-white/70">
          {t(social.text)}
        </p>

        {posts.length > 0 && (
          <div
            ref={trackRef}
            data-reveal
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {posts.map((post) => (
              <article
                key={post.id}
                data-card
                className="flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink sm:w-[48%] lg:w-[32%]"
              >
                <SmartImage
                  src={post.image}
                  alt={post.imageAlt ?? post.text.slice(0, 120)}
                  aspect="aspect-[16/10]"
                  className="border-b border-white/5"
                  fallback={<FacebookIcon size={30} className="text-brand/60" />}
                />
                <div className="flex flex-1 flex-col p-5">
                  <time
                    dateTime={post.date}
                    className="mb-3 text-[11px] font-semibold tracking-wide text-white/50 uppercase"
                  >
                    {formatDate(post.date)}
                  </time>

                  <p className="line-clamp-5 flex-1 text-sm leading-relaxed whitespace-pre-line text-white/75">
                    {post.text}
                  </p>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand transition-colors hover:text-white"
                  >
                    <FacebookIcon size={15} />
                    {t(social.viewPostLabel)}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {posts.length > 1 && (
          <div data-reveal className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={t(social.prevLabel)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`${i + 1} / ${maxIndex + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand' : 'w-2.5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label={t(social.nextLabel)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {followButtons}
      </Container>
    </Section>
  )
}
