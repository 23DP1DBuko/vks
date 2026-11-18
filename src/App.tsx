import { useEffect } from 'react'
import { content } from './content'
import { LanguageProvider, useLang } from './i18n'
import { useReveal } from './hooks/useReveal'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Advantages } from './components/Advantages'
import { Programs } from './components/Programs'
import { Halls } from './components/Halls'
import { Coaches } from './components/Coaches'
import { Achievements } from './components/Achievements'
import { Reviews } from './components/Reviews'
import { ClubLife } from './components/ClubLife'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { SeoBlock } from './components/SeoBlock'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import type { Lang } from './types'

/** og:locale для каждого языка сайта. */
const OG_LOCALES: Record<Lang, string> = { ru: 'ru_LV', en: 'en_LV', lv: 'lv_LV' }

function setMeta(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute('content', value)
}

function Site() {
  const { lang } = useLang()

  useReveal(lang)

  useEffect(() => {
    const title = content.site.meta.title[lang]
    const description = content.site.meta.description[lang]

    document.title = title
    setMeta('meta[name="description"]', description)
    // OG/Twitter держим синхронно с языком; краулер по умолчанию видит RU-версию из index.html.
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:locale"]', OG_LOCALES[lang])
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Programs />
        <Halls />
        <Coaches />
        {content.social.enabled && <ClubLife />}
        <Pricing />
        <Faq />
        <SeoBlock />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
