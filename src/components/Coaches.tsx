import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'
import { SmartImage } from './SmartImage'

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
                <SmartImage
                  src={coach.photo}
                  alt={t({
                    ru: `Тренер ${coach.name}, ${coach.dan} дан`,
                    en: `Coach ${coach.name}, ${coach.dan} dan`,
                    lv: `Treneris ${coach.name}, ${coach.dan}. dans`,
                  })}
                  aspect="aspect-square"
                  className="h-28 w-28 rounded-full border-2 border-brand/60"
                  fallback={
                    <span className="font-display text-3xl font-bold text-white">
                      {initials(coach.name)}
                    </span>
                  }
                />
                <span className="absolute -right-2 -bottom-1 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {coach.dan} {t({ ru: 'ДАН', en: 'DAN', lv: 'DANS' })}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{coach.name}</h3>

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
