import type { Icon } from '@phosphor-icons/react'

import { cn } from '@/lib/cn'

export interface EmptyStateProps {
  icon?: Icon
  title: string
  description?: string
  action?: React.ReactNode
  /** `sm` for narrow panels and sidebars; `md` (default) for full-page empty states. */
  size?: 'sm' | 'md'
  className?: string
}

export function EmptyState({
  icon: IconCmp,
  title,
  description,
  action,
  size = 'md',
  className,
}: EmptyStateProps) {
  const sm = size === 'sm'
  return (
    <div
      className={cn(
        'border-border flex flex-col items-center justify-center rounded-lg border border-dashed text-center',
        sm ? 'gap-2 px-4 py-8' : 'gap-3 px-6 py-12',
        className,
      )}
    >
      {IconCmp && (
        <span
          className={cn(
            'bg-surface-sunken text-ink-subtle flex items-center justify-center rounded-full',
            sm ? 'size-10' : 'size-12',
          )}
        >
          <IconCmp size={sm ? 20 : 24} />
        </span>
      )}
      <div className="flex flex-col gap-1">
        <p className={cn('text-ink', sm ? 't-label' : 't-h6')}>{title}</p>
        {description && (
          <p
            className={cn(
              'text-ink-muted mx-auto max-w-xs',
              sm ? 't-caption' : 't-paragraph-sm',
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}
