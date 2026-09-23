export type Lang = 'ru' | 'en' | 'lv'

export type Localized = Record<Lang, string>

export type DayKey =
  | 'mon'
  | 'tue'
  | 'wed'
  | 'thu'
  | 'fri'
  | 'sat'
  | 'sun'

export type ProgramTag = 'kids-4-6' | 'kids-7-12' | 'teens' | 'adults' | 'competition'

export type AchievementType = 'anniversary' | 'tournament' | 'camp' | 'exam'

export type FaqCategory = 'safety' | 'gear' | 'payment' | 'other'

/** Источник социального поста (карточки «Жизнь клуба»). */
export type SocialSource = 'facebook' | 'instagram' | 'tiktok'

export interface Stat {
  value: number
  /** Локализованный суффикс числа: « дан» / «th dan» / «. dans». */
  suffix?: Localized
  label: Localized
}

export interface Advantage {
  id: string
  icon: 'award' | 'history' | 'baby' | 'pin' | 'trophy' | 'target'
  title: Localized
  text: Localized
}

export interface Program {
  id: string
  ageGroup: string
  title: Localized
  description: Localized
  sessions: Localized
  duration?: Localized
  tag: ProgramTag
}

export interface ScheduleEntry {
  day: DayKey
  time: string
}

export interface Hall {
  id: string
  name: Localized
  address: string
  description: Localized
  schedule: ScheduleEntry[]
  mapUrl: string
  /** Фото зала, напр. '/images/halls/ikskiles.jpg'. Файла нет - компонент покажет фолбэк. */
  photo?: string
  /** Короткий текст «почему удобно добираться» (Кенгарагс, транспорт, парковка). */
  convenience?: Localized
}

export interface Coach {
  id: string
  name: string
  dan: number
  description: Localized
  specialty?: Localized
  certificate?: { category: string; number: string; validUntil: string }
  /** Фото тренера, напр. '/leonid.jpg'. Файла нет - карточка покажет инициалы. */
  photo?: string
}

export interface Achievement {
  id: string
  year: Localized
  title: Localized
  result: Localized
  type: AchievementType
}

export interface Review {
  id: string
  author: string
  role: Localized
  text: Localized
  rating: number
}

/**
 * Группа тренировок для секции «Группы для детей и взрослых».
 * Набор идёт по возрасту и аудитории, а не по числу занятий в неделю:
 * родителю проще узнать свою группу, чем сравнивать тарифы.
 * 1:1 ложится на будущую CMS-коллекцию TrainingGroup.
 */
export interface TrainingGroup {
  id: string
  /** Кого берём: «Дети 4-6 лет», «Подростки и взрослые». */
  name: Localized
  /** Одна фраза - для кого эта группа. */
  audience: Localized
  /** Ориентировочный ритм занятий: справочная строка, не тариф. */
  schedule: Localized
  /** 2-3 короткие выгоды группы. */
  features: Localized[]
  /** null = «цена по телефону» (не фиксируем суммы на сайте) */
  price: number | null
  highlighted: boolean
}

export interface FaqItem {
  id: string
  question: Localized
  answer: Localized
  category: FaqCategory
}

export interface Social {
  name: SocialSource
  url: string
}

export interface HallAddress {
  label: Localized
  address: string
}

/**
 * Пост клуба для секции «Жизнь клуба».
 * Поля совпадают с ответом Facebook Graph API, поэтому синхронизация
 * (`npm run sync:fb`) кладёт сюда реальные посты без ручных правок:
 *   id -> post id, date -> created_time, text -> message,
 *   image -> скачанная копия full_picture, url -> permalink_url.
 * Текст не переводится: публикуем так, как клуб написал в Facebook.
 */
export interface SocialPost {
  id: string
  /** ISO-дата публикации поста. */
  date: string
  /** Описание поста - текст из Facebook. */
  text: string
  /** Локальная копия фото, напр. '/images/posts/123_456.jpg'. */
  image?: string
  /** Alt-текст фото: генерируется из текста поста при синхронизации. */
  imageAlt?: string
  /** Прямая ссылка на пост в Facebook. */
  url: string
}

/** Пункт блока доверия «Почему родители выбирают нас». */
export interface TrustItem {
  id: string
  text: Localized
}

/** SEO-текстовый блок перед контактами: 2-4 естественных абзаца. */
export interface SeoBlockContent {
  title: Localized
  paragraphs: Localized[]
}

/** Инфо-блок рядом с формой: для кого пробная, скорость ответа, что взять. */
export interface TrialInfo {
  title: Localized
  forWhom: Localized
  replyTime: Localized
  whatToBringTitle: Localized
  whatToBring: Localized[]
}

/*
 * ЗАРЕЗЕРВИРОВАНО - НЕ В MVP. Архитектура под будущие фичи (см. README, раздел «Будущие идеи»).
 *
 * // Клубный мерч: каталог Product + заявки MerchOrder.
 * export interface Product {
 *   id: string
 *   slug: string
 *   name: Localized
 *   description: Localized
 *   images: string[]
 *   price: number
 *   sizes?: string[]
 *   active: boolean
 *   order: number
 * }
 * export interface MerchOrder {
 *   name: string
 *   phone: string
 *   email?: string
 *   productId: string
 *   size?: string
 *   qty: number
 *   delivery: 'pickup-cash' | 'shipping' | 'payment-link'
 *   address?: string
 *   comment?: string
 *   createdAt: string
 *   status: 'new' | 'confirmed' | 'done'
 * }
 *
 * // Баннеры: обычные (в слотах страницы) и попап (показывается после задержки, один активный).
 * export interface Banner {
 *   id: string
 *   placement: 'after-hero' | 'before-pricing' | 'in-halls' | 'in-contacts'
 *   image: string
 *   imageAlt: Localized
 *   title?: Localized
 *   ctaLabel?: Localized
 *   ctaLink?: string
 *   activeFrom?: string
 *   activeTo?: string
 *   isActive: boolean
 *   priority: number
 * }
 * export interface PopupBanner extends Omit<Banner, 'placement'> {
 *   description?: Localized
 *   displayDelay: number
 * }
 */
