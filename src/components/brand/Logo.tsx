import { cn } from '@/lib/cn'

export interface LogoProps {
  /** `lockup` = mark + wordmark, `mark` = glyph only. */
  variant?: 'lockup' | 'mark'
  /** Height in px of the mark. Wordmark scales with it. */
  size?: number
  className?: string
}

/**
 * Involve mark — two interlocking orbits. Source of truth is the Figma asset
 * (src/assets/involve-mark.svg); this is the same path inlined so it can pick
 * up `currentColor` (brand indigo via the wrapper's `text-primary`).
 */
export function Logo({ variant = 'lockup', size = 28, className }: LogoProps) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      role="img"
      aria-label="Involve"
      className="text-primary"
    >
      <path
        d="M21.8372 8.51072C20.3765 7.84258 18.7348 7.46626 16.9997 7.46626C10.9247 7.46713 6.0004 12.064 6.0004 17.7331C6.0004 18.3325 6.0592 18.9178 6.16373 19.4884C2.51347 17.8176 0 14.3166 0 10.266C0 4.59596 4.9252 0 11.0003 0C16.4341 0 20.944 3.67694 21.8372 8.51072ZM28 17.7331C28 23.4032 23.0748 28 16.9997 28C11.5659 27.9991 7.05693 24.3222 6.16373 19.4884C7.62347 20.1565 9.2652 20.5329 11.0003 20.5329C17.0753 20.5329 21.9996 15.936 21.9996 10.266C21.9996 9.66755 21.9417 9.08129 21.8372 8.51072C25.4865 10.1806 28 13.6834 28 17.7331Z"
        fill="currentColor"
      />
    </svg>
  )

  if (variant === 'mark') return <span className={className}>{mark}</span>

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      {mark}
      <span
        className="text-ink-strong font-semibold tracking-[-0.01em]"
        style={{ fontSize: size * 0.85, lineHeight: 1 }}
      >
        Involve
      </span>
    </span>
  )
}
