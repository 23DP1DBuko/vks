import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Lang } from '../types'

gsap.registerPlugin(ScrollTrigger)

/**
 * Настраивает скролл-анимации:
 * - элементы с атрибутом data-reveal плавно появляются при входе в вьюпорт;
 * - элементы с атрибутом data-count анимируют число (счётчики в Hero).
 * Перезапускается при смене языка (контент перерисовывается).
 */
export function useReveal(lang: Lang) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduced) {
        // При reduced-motion сразу показываем всё и выставляем финальные числа.
        gsap.set('[data-reveal]', { clearProps: 'all' })
        gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
          el.textContent = `${el.dataset.count ?? '0'}${el.dataset.suffix ?? ''}`
        })
        return
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count ?? 0)
        const suffix = el.dataset.suffix ?? ''
        const state = { v: 0 }
        gsap.to(state, {
          v: target,
          duration: 1.6,
          ease: 'power1.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(state.v)}${suffix}`
          },
        })
      })
    })

    return () => ctx.revert()
  }, [lang])
}
