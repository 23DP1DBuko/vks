import { Award, Baby, History, MapPin, Target, Trophy } from 'lucide-react'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

const ICONS = { award: Award, history: History, baby: Baby, pin: MapPin, trophy: Trophy, target: Target }

export function Advantages() {
  const { t } = useLang()
  const section = content.sections.why

  return (
    <Section id="why">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.advantages.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <article
                key={item.id}
                data-reveal
                className="group rounded-2xl border border-white/10 bg-ink-2 p-6 transition-all hover:-translate-y-1 hover:border-brand/50"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{t(item.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{t(item.text)}</p>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
