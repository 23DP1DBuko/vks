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

export interface Stat {
  value: number
  suffix: string
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
}

export interface Coach {
  id: string
  name: string
  dan: number
  description: Localized
  specialty?: Localized
  certificate?: { category: string; number: string; validUntil: string }
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

export interface Plan {
  id: string
  name: Localized
  /** null = «цена по телефону» (не фиксируем суммы на сайте) */
  price: number | null
  sessions: Localized
  features: Localized[]
  highlighted: boolean
}

export interface FaqItem {
  id: string
  question: Localized
  answer: Localized
  category: FaqCategory
}

export interface Social {
  name: 'facebook' | 'instagram' | 'tiktok'
  url: string
}

export interface HallAddress {
  label: Localized
  address: string
}
