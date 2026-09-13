import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

export function Reviews() {
  const { t } = useLang()
  const section = content.sections.reviews
  const reviews = content.reviews
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)

  const count = reviews.length
  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(next, 6000)
    return () => window.clearInterval(timer)
  }, [paused, count])

  const review = reviews[index]

  return (
    <Section id="reviews" className="bg-ink-2">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        <div
          data-reveal
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (dx > 40) prev()
            if (dx < -40) next()
            touchX.current = null
          }}
        >
          <div className="rounded-3xl border border-white/10 bg-ink p-8 md:p-12">
            <div className="mb-5 flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-brand text-brand" />
              ))}
            </div>
            <blockquote className="text-lg leading-relaxed text-white/90 md:text-xl">
              «{t(review.text)}»
            </blockquote>
            <footer className="mt-6">
              <p className="font-display text-lg font-semibold uppercase tracking-wide">{review.author}</p>
              <p className="text-sm text-white/55">{t(review.role)}</p>
            </footer>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              aria-label="Предыдущий отзыв"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Отзыв ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand' : 'w-2.5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Следующий отзыв"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
