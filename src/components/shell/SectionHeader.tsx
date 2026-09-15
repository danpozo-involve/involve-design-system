import { cn } from '@/lib/cn'

export interface SectionHeaderProps {
  title: string
  description?: string
  /** Right-aligned actions (buttons, links). */
  action?: React.ReactNode
  /** `sm` for in-page sections, `md` for page-level headers. */
  size?: 'sm' | 'md'
  className?: string
}

export function SectionHeader({
  title,
  description,
  action,
  size = 'sm',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4', className)}>
      <div className="flex flex-col gap-1">
        <h2 className={cn(size === 'md' ? 't-h5' : 't-h6', 'text-ink-strong')}>
          {title}
        </h2>
        {description && <p className="t-paragraph-sm text-ink-muted">{description}</p>}
      </div>
      {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
    </div>
  )
}
