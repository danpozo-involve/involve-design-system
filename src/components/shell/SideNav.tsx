import { NavLink } from 'react-router-dom'

import { Logo } from '@/components/brand/Logo'
import { cn } from '@/lib/cn'
import type { Icon } from '@phosphor-icons/react'
import type { NavGroup } from './nav'

export interface SideNavProps {
  /** Nav items in groups; a divider is drawn between groups. */
  groups: NavGroup[]
  /** Called when a `panel` item is clicked. */
  onOpenPanel?: (panel: string) => void
  className?: string
}

const rowBase =
  'flex h-10 w-full items-center gap-2 rounded-lg px-3 text-left transition-colors'

function RowInner({
  icon: IconCmp,
  label,
  badge,
  active,
}: {
  icon: Icon
  label: string
  badge?: number
  active: boolean
}) {
  return (
    <>
      <IconCmp size={24} weight={active ? 'fill' : 'regular'} />
      <span className="t-paragraph-md flex-1 font-semibold">{label}</span>
      {badge ? (
        <span className="bg-primary text-on-primary rounded-full px-1.5 text-xs font-semibold">
          {badge > 99 ? '99+' : badge}
        </span>
      ) : null}
    </>
  )
}

/**
 * Desktop left rail (hidden below `lg`). 248px wide, brand lockup, grouped
 * nav with a hairline between groups, 40px rows.
 */
export function SideNav({ groups, onOpenPanel, className }: SideNavProps) {
  return (
    <aside
      className={cn(
        'bg-page hidden w-[248px] shrink-0 flex-col px-3 py-6 lg:flex',
        'lg:sticky lg:top-0 lg:h-dvh lg:self-start lg:overflow-y-auto',
        className,
      )}
    >
      <div className="flex items-center pt-2 pb-6 pl-3">
        <Logo size={28} />
      </div>

      {groups.map((items, groupIndex) => (
        <div
          key={groupIndex}
          className={cn(
            'flex flex-col py-3',
            groupIndex === 0 ? 'border-border-subtle gap-4 border-b' : 'gap-3 pt-6',
          )}
        >
          {items.map((item) =>
            item.panel ? (
              <button
                key={item.to}
                type="button"
                onClick={() => onOpenPanel?.(item.panel!)}
                className={cn(
                  rowBase,
                  'text-ink-subtle hover:bg-surface-hover hover:text-ink',
                )}
              >
                <RowInner
                  icon={item.icon}
                  label={item.label}
                  badge={item.badge}
                  active={false}
                />
              </button>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    rowBase,
                    isActive
                      ? 'bg-surface-sunken text-primary'
                      : 'text-ink-subtle hover:bg-surface-hover hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <RowInner
                    icon={item.icon}
                    label={item.label}
                    badge={item.badge}
                    active={isActive}
                  />
                )}
              </NavLink>
            ),
          )}
        </div>
      ))}
    </aside>
  )
}
