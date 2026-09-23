import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LANGS, NAV, content } from '../content'
import { useLang } from '../i18n'
import type { Lang } from '../types'
import { ClubLogo } from './ClubLogo'

export function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6">
        <a href="#hero" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={close}>
          <ClubLogo className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-[13px] font-semibold tracking-[0.14em] uppercase sm:text-sm">
              Vasilyev
            </span>
            {/* Полный бренд-блок показываем с планшета - на телефоне экономит место в шапке. */}
            <span className="hidden text-[11px] tracking-[0.28em] text-white/60 uppercase sm:block">
              Karate · Anno 1984
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            className="flex items-center gap-0.5 rounded-full border border-white/15 p-0.5 sm:gap-1 sm:p-1"
            role="group"
            aria-label="Язык"
          >
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l as Lang)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase transition-colors sm:px-2.5 sm:text-xs ${
                  lang === l ? 'bg-brand text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contacts"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            {t(content.hero.ctaShort)}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white sm:h-10 sm:w-10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden"
          aria-label="Мобильная навигация"
        >
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="block py-1 text-base font-medium text-white/85" onClick={close}>
                  {t(item.label)}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacts"
                className="inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
                onClick={close}
              >
                {t(content.hero.cta1)}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
