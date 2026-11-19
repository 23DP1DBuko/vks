import { useState } from 'react'
import { publicAsset } from '../lib/assets'

/**
 * Логотип клуба. Берёт файл /logo.png (public/logo.png) - как только
 * владелец положит файл в проект, он автоматически появится в шапке
 * и подвале. Пока файла нет - показываем запасной знак 拳.
 */
export function ClubLogo({ className = 'h-10 w-10' }: { className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={`${className} flex items-center justify-center rounded-full border-2 border-brand font-display text-lg font-bold text-brand`}
      >
        拳
      </span>
    )
  }

  return (
    <img
      src={publicAsset('/logo.png')}
      alt="Vasilyev Karate Club"
      className={`${className} rounded-full bg-white object-contain`}
      onError={() => setFailed(true)}
    />
  )
}
