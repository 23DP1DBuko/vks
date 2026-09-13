import { Award } from 'lucide-react'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function Coaches() {
  const { t } = useLang()
  const section = content.sections.coaches

  return (
    <Section id="coaches" className="bg-ink-2">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        <div className="grid gap-6 md:grid-cols-3">
          {content.coaches.map((coach) => (
            <article
              key={coach.id}
              data-reveal
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-ink p-8 text-center transition-all hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="relative mb-5">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand/60 bg-ink-3 font-display text-3xl font-bold text-white">
                  {initials(coach.name)}
                </div>
                <span className="absolute -right-2 -bottom-1 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {coach.dan} DAN
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{coach.name}</h3>

              {coach.certificate ? (
                <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
                  <Award size={12} />
                  {t({
                    ru: `Сертифицированный тренер · кат. ${coach.certificate.category} · № ${coach.certificate.number}`,
                    en: `Certified coach · cat. ${coach.certificate.category} · No. ${coach.certificate.number}`,
                    lv: `Sertificēta trenere · kat. ${coach.certificate.category} · Nr. ${coach.certificate.number}`,
                  })}
                </p>
              ) : (
                <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/50">
                  <Award size={12} />
                  {t({ ru: 'Тренер клуба', en: 'Club coach', lv: 'Kluba treneris' })}
                </p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-white/70">{t(coach.description)}</p>
              {coach.specialty ? (
                <p className="mt-4 border-t border-white/10 pt-4 text-xs font-semibold tracking-wide text-white/50 uppercase">
                  {t(coach.specialty)}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
