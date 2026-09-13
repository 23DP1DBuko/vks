import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

export function Faq() {
  const { t } = useLang()
  const section = content.sections.faq
  const [open, setOpen] = useState<string | null>('age')

  return (
    <Section id="faq">
      <Container className="max-w-3xl">
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        <div className="space-y-3">
          {content.faq.map((item) => {
            const isOpen = open === item.id
            return (
              <div
                key={item.id}
                data-reveal
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? 'border-brand/50 bg-ink-2' : 'border-white/10 bg-ink-2/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white">{t(item.question)}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">{t(item.answer)}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
