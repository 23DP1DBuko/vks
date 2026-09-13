import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

export function Achievements() {
  const { t } = useLang()
  const section = content.sections.achievements

  return (
    <Section id="achievements">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        <ol className="relative ml-3 border-l-2 border-brand/40 pl-8 md:ml-6">
          {content.achievements.map((item) => (
            <li key={item.id} data-reveal className="relative pb-10 last:pb-0">
              <span className="absolute top-1 -left-[41px] h-3.5 w-3.5 rounded-full border-2 border-brand bg-ink" />
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-semibold text-brand">{t(item.year)}</span>
                <span className="rounded-full border border-white/15 px-3 py-0.5 text-[11px] font-semibold tracking-wider text-white/60 uppercase">
                  {t(content.achievementTypes[item.type])}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-wide">{t(item.title)}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/70">{t(item.result)}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
