interface IconProps {
  size?: number
  className?: string
}

export function FacebookIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21.5v-7.2h2.4l.36-2.8h-2.76V9.7c0-.81.22-1.36 1.38-1.36h1.47V5.8c-.25-.03-1.12-.11-2.14-.11-2.12 0-3.57 1.29-3.57 3.67v2.04H8.3v2.8h2.34v7.3h2.86z" />
    </svg>
  )
}

export function TikTokIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 3c.4 2.1 1.8 3.5 3.9 3.7v2.7c-1.4 0-2.7-.4-3.9-1.2v5.8c0 4-2.9 6.5-6.3 6.5A6.2 6.2 0 0 1 4 14.3c0-3.6 2.9-6.1 6.7-6.1.3 0 .7 0 1 .1v2.8c-.3-.1-.7-.2-1-.2-2 0-3.6 1.5-3.6 3.4 0 1.9 1.6 3.4 3.6 3.4 2 0 3.4-1.4 3.4-3.6V3h1.5z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}
