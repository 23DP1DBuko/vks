import { useState, type ReactNode } from 'react'

interface SmartImageProps {
  /** Путь к файлу в public/, напр. '/leonid.jpg'. Пусто - сразу показываем фолбэк. */
  src?: string
  alt: string
  /** Классы контейнера: размеры, скругления. */
  className?: string
  /** Tailwind-класс соотношения сторон, напр. 'aspect-[16/10]'. */
  aspect?: string
  /** Фото первого экрана: eager-загрузка и высокий приоритет. */
  eager?: boolean
  /** Что показать, если файла нет или он не загрузился (инициалы, иконка, знак). */
  fallback: ReactNode
}

/**
 * Картинка с аккуратным фолбэком: если файл ещё не загружен владельцем,
 * вместо «битой» иконки показываем стилизованную заглушку, а не пустоту.
 */
export function SmartImage({
  src,
  alt,
  className = '',
  aspect = 'aspect-[16/10]',
  eager = false,
  fallback,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)
  const showFallback = !src || failed

  return (
    <div className={`relative overflow-hidden bg-ink-3 ${aspect} ${className}`}>
      {showFallback ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-3 via-ink-2 to-ink">
          {fallback}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}
