import type { Icon } from '@phosphor-icons/react'

import { cn } from '@/lib/cn'

export interface EmptyStateProps {
  icon?: Icon
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({
  icon: IconCmp,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'border-border flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed px-6 py-12 text-center',
        className,
      )}
    >
      {IconCmp && (
        <span className="bg-surface-sunken text-ink-subtle flex size-12 items-center justify-center rounded-full">
          <IconCmp size={24} />
        </span>
      )}
      <div className="flex flex-col gap-1">
        <p className="t-h6 text-ink">{title}</p>
        {description && (
          <p className="t-paragraph-sm text-ink-muted mx-auto max-w-xs">
            {description}
          </p>
        )}
      </div>
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}
