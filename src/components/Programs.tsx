import { useState } from 'react'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { PROGRAM_TAGS, content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'
import type { ProgramTag } from '../types'

export function Programs() {
  const { t } = useLang()
  const section = content.sections.programs
  const [active, setActive] = useState<ProgramTag | 'all'>('all')

  const visible = content.programs.filter((p) => active === 'all' || p.tag === active)

  return (
    <Section id="programs" className="bg-ink-2">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Фильтр групп">
          {PROGRAM_TAGS.map((tag) => (
            <button
              key={tag.id}
              type="button"
              role="tab"
              aria-selected={active === tag.id}
              onClick={() => setActive(tag.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === tag.id
                  ? 'bg-brand text-white'
                  : 'border border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {t(tag.label)}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((program) => (
            <article
              key={program.id}
              data-reveal
              className="flex flex-col rounded-2xl border border-white/10 bg-ink p-6 transition-all hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
                  {program.ageGroup}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/55">
                  <CalendarDays size={14} />
                  {t(program.sessions)}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{t(program.title)}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{t(program.description)}</p>
              {program.duration ? (
                <p className="mt-3 text-xs text-white/50">{t(program.duration)}</p>
              ) : null}
              <a
                href="#contacts"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-white"
              >
                {t(content.pricing.cta)} <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
