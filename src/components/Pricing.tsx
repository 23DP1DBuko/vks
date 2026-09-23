import { Check, Gift, Phone, Send } from 'lucide-react'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

/**
 * «Группы для детей и взрослых».
 * Карточки собраны по возрасту и аудитории (а не по числу занятий в неделю):
 * новичку и родителю нужно понять, в какую группу идти, а не сравнить тарифы.
 * Суммы на сайте не фиксируем - цена уточняется по телефону.
 */
export function Pricing() {
  const { t } = useLang()
  const section = content.sections.pricing
  const pricing = content.pricing
  const firstPhone = content.contacts.phones[0].replace(/\s/g, '')

  return (
    <Section id="pricing" className="bg-ink-2">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        {/* Бесплатная первая тренировка - главная точка входа для новых посетителей. */}
        <div data-reveal className="mb-10 flex flex-col items-start gap-4 rounded-2xl border border-brand/40 bg-brand/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
              <Gift size={22} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{t(pricing.trial.title)}</h3>
              <p className="mt-1 text-sm text-white/75">{t(pricing.trial.text)}</p>
            </div>
          </div>
          <a
            href="#contacts"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {t(content.hero.cta1)}
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.groups.map((group) => (
            <article
              key={group.id}
              data-reveal
              className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                group.highlighted
                  ? 'border-brand bg-brand/10 shadow-xl shadow-brand/10'
                  : 'border-white/10 bg-ink hover:border-white/25'
              }`}
            >
              {group.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold tracking-wider text-white uppercase">
                  {t(pricing.beginnerLabel)}
                </span>
              )}

              <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{t(group.name)}</h3>
              <p className="mt-1 text-sm text-white/55">{t(group.schedule)}</p>

              <p className="mt-4 text-sm leading-relaxed text-white/75">{t(group.audience)}</p>

              {group.price != null ? (
                <p className="mt-5 font-display text-5xl font-bold">
                  €{group.price}
                </p>
              ) : (
                <p className="mt-5 flex items-center gap-2 font-display text-2xl font-semibold text-brand">
                  <Phone size={22} />
                  {t(pricing.priceOnRequest)}
                </p>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {group.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check size={17} className="mt-0.5 shrink-0 text-brand" />
                    {t(feature)}
                  </li>
                ))}
              </ul>

              {/* В выделенной группе ведём в форму заявки, в остальных - предлагаем сразу позвонить. */}
              {group.highlighted ? (
                <a
                  href="#contacts"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  <Send size={16} />
                  {t(pricing.requestLabel)}
                </a>
              ) : (
                <a
                  href={`tel:${firstPhone}`}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
                >
                  <Phone size={16} />
                  {t(pricing.callLabel)}
                </a>
              )}
            </article>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/55">
          {pricing.terms.map((term, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check size={15} className="text-brand" />
              {t(term)}
            </li>
          ))}
        </ul>

        <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/60">
          <Phone size={15} className="text-brand" />
          {t(pricing.priceNote)}{' '}
          <a
            href={`tel:${firstPhone}`}
            className="font-semibold text-white underline decoration-brand/60 underline-offset-4 transition-colors hover:text-brand"
          >
            {content.contacts.phones[0]}
          </a>
        </p>
      </Container>
    </Section>
  )
}
