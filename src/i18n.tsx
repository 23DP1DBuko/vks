import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang, Localized } from './types'

const STORAGE_KEY = 'vks-lang'

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'ru'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'ru' || saved === 'en' || saved === 'lv') return saved
  const nav = (navigator.language || '').toLowerCase()
  if (nav.startsWith('lv')) return 'lv'
  if (nav.startsWith('en')) return 'en'
  return 'ru'
}

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (value: Localized) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* localStorage может быть недоступен — игнорируем */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (value: Localized) => value[lang]

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
