import { Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons'
import { ClubLogo } from './ClubLogo'
import { content } from '../content'
import { useLang } from '../i18n'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink-3">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <ClubLogo className="h-12 w-12" />
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-widest">
              Vasilyev <span className="text-brand">Karate</span>
            </p>
            <p className="mt-1 text-sm text-white/60">{t(content.site.tagline)}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/70">
          {content.contacts.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone size={15} /> {phone}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {content.contacts.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand hover:text-brand"
            >
              {social.name === 'facebook' ? (
                <FacebookIcon size={18} />
              ) : social.name === 'instagram' ? (
                <InstagramIcon size={18} />
              ) : (
                <TikTokIcon size={18} />
              )}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40">© {year} {t(content.site.clubName)} · Anno 1984</p>
      </div>
    </footer>
  )
}
