import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section } from './Section'

/**
 * SEO-текстовый блок перед контактами: 2-4 естественных абзаца про карате
 * в Риге и Кенгарагсе для локального поиска. Тексты - в content.seoBlock.
 */
export function SeoBlock() {
  const { t } = useLang()
  const block = content.seoBlock

  return (
    <Section id="about">
      <Container className="max-w-3xl">
        <div data-reveal className="rounded-3xl border border-white/10 bg-ink-2 p-6 md:p-10">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-wide md:text-3xl">
            {t(block.title)}
          </h2>
          <div className="mt-5 space-y-4">
            {block.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70 md:text-base">
                {t(paragraph)}
              </p>
            ))}
          </div>
          <a
            href="#contacts"
            className="mt-6 inline-flex text-sm font-semibold text-brand underline decoration-brand/50 underline-offset-4 transition-colors hover:text-white"
          >
            {t(content.hero.cta1)}
          </a>
        </div>
      </Container>
    </Section>
  )
}
