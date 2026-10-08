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

export function WhatsAppIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.23-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.35-.35.52-.53.17-.17.23-.3.35-.5.11-.2.05-.37-.06-.52-.12-.14-.7-1.67-.95-2.27-.25-.6-.5-.52-.7-.53H7.8c-.2 0-.52.08-.8.38-.27.3-1.04 1.01-1.04 2.47s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.23-6.16-3.48-8.4Z" />
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
