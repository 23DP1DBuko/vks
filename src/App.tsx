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
import { SocialFeed } from './components/SocialFeed'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'

function Site() {
  const { lang } = useLang()

  useReveal(lang)

  useEffect(() => {
    document.title = content.site.meta.title[lang]
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.site.meta.description[lang])
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
        <Achievements />
        <Reviews />
        {content.social.enabled && <SocialFeed />}
        <Pricing />
        <Faq />
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
