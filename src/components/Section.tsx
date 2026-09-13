import type { ReactNode } from 'react'

export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Section({
  id,
  className = '',
  children,
}: {
  id: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10 md:mb-14" data-reveal>
      <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-brand uppercase">{kicker}</p>
      <h2 className="font-display text-3xl font-semibold uppercase tracking-wide md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">{subtitle}</p> : null}
    </div>
  )
}
