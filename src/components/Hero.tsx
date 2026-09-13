import { content } from '../content'
import { useLang } from '../i18n'
import { Hero3D } from './Hero3D'
import { HeartPulse, Shield, Timer, Trophy } from 'lucide-react'

const VALUE_ICONS = [HeartPulse, Timer, Shield, Trophy]

export function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <Hero3D />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {t(content.hero.slogan)}
        </p>

        <h1 className="max-w-4xl font-display text-4xl leading-tight font-bold uppercase sm:text-6xl lg:text-7xl">
          {t(content.hero.title)}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{t(content.hero.subtitle)}</p>
        <p className="mt-3 max-w-2xl text-base text-white/60">{t(content.hero.paragraph)}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contacts"
            className="rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            {t(content.hero.cta1)}
          </a>
          <a
            href="#halls"
            className="rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60"
          >
            {t(content.hero.cta2)}
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {content.hero.stats.map((stat) => (
            <div key={stat.label.ru} className="flex flex-col-reverse border-l-2 border-brand/60 pl-4">
              <dt className="text-xs font-medium tracking-wide text-white/55 uppercase">
                {t(stat.label)}
              </dt>
              <dd
                className="font-display text-4xl font-semibold text-white"
                data-count={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {content.hero.values.map((value, i) => {
            const Icon = VALUE_ICONS[i] ?? HeartPulse
            return (
              <li key={i} className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white/75 uppercase">
                <Icon size={18} className="text-brand" />
                {t(value)}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
