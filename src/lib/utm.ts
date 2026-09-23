/**
 * UTM-метки и рекламные идентификаторы (gclid/fbclid).
 * Сохраняем при первом заходе в sessionStorage, чтобы передать источник
 * в заявку даже если форма отправлена позже, уже без параметров в URL.
 */
const STORAGE_KEY = 'vks-utm'

const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
] as const

export type UtmParams = Partial<Record<(typeof TRACKED_PARAMS)[number], string>>

/** Вызывать один раз при старте приложения (main.tsx). */
export function captureUtm(): void {
  if (typeof window === 'undefined') return
  try {
    const params = new URL(window.location.href).searchParams
    const found: Record<string, string> = {}
    for (const key of TRACKED_PARAMS) {
      const value = params.get(key)
      if (value) found[key] = value
    }
    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found))
    }
  } catch {
    /* приватный режим или некорректные параметры - молча пропускаем */
  }
}

export function getUtm(): UtmParams {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as UtmParams) : {}
  } catch {
    return {}
  }
}

/** Строка вида 'utm_source=facebook & utm_campaign=trial' - для заявок и писем. */
export function utmSummary(): string {
  return Object.entries(getUtm())
    .map(([key, value]) => `${key}=${value}`)
    .join(' & ')
}
