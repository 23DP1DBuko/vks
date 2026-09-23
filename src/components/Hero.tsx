import { content } from '../content'
import { useLang } from '../i18n'
import { Hero3D } from './Hero3D'
import { HeartPulse, Shield, Timer, Trophy } from 'lucide-react'

const VALUE_ICONS = [HeartPulse, Timer, Shield, Trophy]

export function Hero() {
  const { t } = useLang()
  const image = content.hero.image

  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden pt-14 sm:pt-16">
      {image ? (
        /* Реальное фото клуба с затемнением под текст; без фото - прежняя 3D-сцена. */
        <img
          src={image.src}
          alt={t(image.alt)}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
      ) : (
        <Hero3D />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-16 lg:py-20">
        <p className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand sm:mb-4 sm:px-3.5 sm:py-1.5 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {t(content.hero.slogan)}
        </p>

        {/* На телефоне заголовок и отбивки компактнее, чтобы первый экран целиком попадал в высоту телефона. */}
        <h1 className="max-w-4xl font-display text-[1.6rem] leading-[1.14] font-bold uppercase sm:text-5xl sm:leading-tight lg:text-7xl">
          {t(content.hero.title)}
        </h1>

        {/* На телефоне - короткая версия подзаголовка, с планшета - полная. */}
        <p className="mt-3 max-w-2xl text-[15px] leading-snug text-white/80 sm:hidden">
          {t(content.hero.subtitleMobile)}
        </p>
        <p className="mt-4 hidden max-w-2xl text-base leading-relaxed text-white/80 sm:block sm:mt-6 sm:text-lg md:text-xl">
          {t(content.hero.subtitle)}
        </p>
        <p className="mt-3 hidden max-w-2xl text-base text-white/60 sm:block">
          {t(content.hero.paragraph)}
        </p>

        <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#contacts"
            className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark sm:px-7 sm:py-3.5 sm:text-base"
          >
            {t(content.hero.cta1)}
          </a>
          <a
            href="#halls"
            className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-white/60 sm:px-7 sm:py-3.5 sm:text-base"
          >
            {t(content.hero.cta2)}
          </a>
        </div>

        <dl className="mt-6 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-4 sm:mt-14 sm:gap-6 md:grid-cols-4">
          {content.hero.stats.map((stat) => {
            const suffix = stat.suffix ? t(stat.suffix) : ''
            return (
            <div key={stat.label.ru} className="flex flex-col-reverse border-l-2 border-brand/60 pl-3 sm:pl-4">
              <dt className="text-[10px] font-medium tracking-wide text-white/55 uppercase sm:text-xs">
                {t(stat.label)}
              </dt>
              <dd
                className="font-display text-[1.4rem] leading-none font-semibold text-white sm:text-4xl sm:leading-none"
                data-count={stat.value}
                data-suffix={suffix}
              >
                0{suffix}
              </dd>
            </div>
            )
          })}
        </dl>

        {/* Строка ценностей - с планшета и шире, чтобы не удлинять первый экран на телефоне. */}
        <ul className="mt-10 hidden flex-wrap gap-x-8 gap-y-3 sm:flex lg:mt-12">
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
