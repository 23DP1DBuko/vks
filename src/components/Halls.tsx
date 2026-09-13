import { ExternalLink, MapPin } from 'lucide-react'
import { DAY_NAMES, content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

export function Halls() {
  const { t } = useLang()
  const section = content.sections.halls

  return (
    <Section id="halls">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        <div className="grid gap-6 md:grid-cols-2">
          {content.halls.map((hall) => (
            <article
              key={hall.id}
              data-reveal
              className="flex flex-col rounded-2xl border border-white/10 bg-ink-2 p-6 md:p-8"
            >
              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{t(hall.name)}</h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                {hall.address}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{t(hall.description)}</p>

              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <tbody>
                    {hall.schedule.map((entry) => (
                      <tr key={entry.day} className="border-b border-white/5 last:border-0">
                        <td className="px-4 py-2.5 text-white/75">{t(DAY_NAMES[entry.day])}</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-white">{entry.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <a
                href={hall.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
              >
                <ExternalLink size={15} />
                {t({ ru: 'Построить маршрут', en: 'Get directions', lv: 'Iegūt norādes' })}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/45">
          {t({
            ru: 'Расписание уточняется - заполним реальные дни и время.',
            en: 'Schedule is being confirmed - real days and times will be added.',
            lv: 'Grafiks tiek precizēts - pievienosim reālās dienas un laikus.',
          })}
        </p>
      </Container>
    </Section>
  )
}
