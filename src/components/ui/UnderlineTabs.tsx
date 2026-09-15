import { cn } from '@/lib/cn'

export interface UnderlineTabsProps<T extends string> {
  tabs: { value: T; label: string }[]
  value: T
  onValueChange: (value: T) => void
  /** `md` (16px) for content tabs, `sm` (14px) for toolbar tabs. */
  size?: 'sm' | 'md'
  className?: string
}

/** Underline-style tab bar. Used by the feed and the profile toolbar. */
export function UnderlineTabs<T extends string>({
  tabs,
  value,
  onValueChange,
  size = 'md',
  className,
}: UnderlineTabsProps<T>) {
  return (
    <div
      role="tablist"
      className={cn(
        'border-border-subtle flex items-stretch gap-3 border-b px-5',
        className,
      )}
    >
      {tabs.map((tab) => {
        const active = tab.value === value
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
            onClick={() => onValueChange(tab.value)}
            className={cn(
              'relative flex flex-col items-center px-2 pt-3 pb-0 font-semibold transition-colors',
              size === 'sm' ? 'text-sm' : 'text-base',
              'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
              active ? 'text-ink-strong' : 'text-ink-subtle hover:text-ink',
            )}
          >
            <span className="pb-2.5">{tab.label}</span>
            <span
              className={cn(
                'h-[3px] w-full rounded-t-[2px]',
                active ? 'bg-primary' : 'bg-transparent',
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
