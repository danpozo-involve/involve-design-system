import { cn } from '@/lib/cn'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  /** Optional centered label (horizontal only). */
  label?: string
  className?: string
}

export function Divider({
  orientation = 'horizontal',
  label,
  className,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={cn('bg-border-subtle inline-block w-px self-stretch', className)}
      />
    )
  }

  if (label) {
    return (
      <div className={cn('flex items-center gap-3', className)} role="separator">
        <span className="bg-border-subtle h-px flex-1" />
        <span className="t-caption text-ink-subtle">{label}</span>
        <span className="bg-border-subtle h-px flex-1" />
      </div>
    )
  }

  return (
    <hr className={cn('bg-border-subtle h-px border-0', className)} role="separator" />
  )
}
