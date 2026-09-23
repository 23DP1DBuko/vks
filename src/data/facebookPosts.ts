import type { SocialPost } from '../types'

/**
 * Посты клуба из Facebook для секции «Жизнь клуба».
 *
 * Файл генерируется синхронизацией: `npm run sync:fb` (см. scripts/sync-facebook.mjs).
 * Руками не редактируется - правки затрутся при следующей синхронизации.
 * Пустой массив означает, что синхронизация ещё не настроена: тогда на сайте
 * показываются демо-карточки из content.social.posts.
 */
export const FACEBOOK_POSTS: SocialPost[] = []
