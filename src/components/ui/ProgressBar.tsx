import * as RProgress from '@radix-ui/react-progress'

import { cn } from '@/lib/cn'

export interface ProgressBarProps {
  /** 0–100. Omit for an indeterminate bar. */
  value?: number
  tone?: 'brand' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md'
  className?: string
  label?: string
}

const toneClass: Record<NonNullable<ProgressBarProps['tone']>, string> = {
  brand: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

export function ProgressBar({
  value,
  tone = 'brand',
  size = 'md',
  className,
  label,
}: ProgressBarProps) {
  const clamped = value === undefined ? undefined : Math.max(0, Math.min(100, value))

  return (
    <RProgress.Root
      value={clamped}
      aria-label={label}
      className={cn(
        'bg-surface-sunken relative w-full overflow-hidden rounded-full',
        size === 'sm' ? 'h-1.5' : 'h-2.5',
        className,
      )}
    >
      <RProgress.Indicator
        className={cn(
          'h-full rounded-full transition-[width] duration-500',
          toneClass[tone],
        )}
        style={{ width: clamped === undefined ? '40%' : `${clamped}%` }}
      />
    </RProgress.Root>
  )
}
