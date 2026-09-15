import { NavLink } from 'react-router-dom'

import { cn } from '@/lib/cn'
import type { NavGroup } from './nav'

export interface BottomNavProps {
  /** Nav groups; the bar flattens them and shows the first 5 items. */
  groups: NavGroup[]
  className?: string
}

/** Fixed bottom tab bar. Mobile only — hidden at `lg`. */
export function BottomNav({ groups, className }: BottomNavProps) {
  const items = groups.flat().slice(0, 5)

  return (
    <nav
      className={cn(
        'border-border-subtle bg-surface/90 fixed inset-x-0 bottom-0 z-30 flex border-t backdrop-blur-md lg:hidden',
        'pb-[env(safe-area-inset-bottom)]',
        className,
      )}
    >
      {items.map(({ to, label, icon: IconCmp, badge, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className="group text-ink-subtle aria-[current=page]:text-primary relative flex flex-1 flex-col items-center justify-center gap-1 py-2"
        >
          {({ isActive }) => (
            <>
              <span className="relative">
                <IconCmp size={24} weight={isActive ? 'fill' : 'regular'} />
                {badge ? (
                  <span className="bg-danger text-on-danger absolute -top-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[0.625rem] font-semibold">
                    {badge > 99 ? '99+' : badge}
                  </span>
                ) : null}
              </span>
              <span className="t-caption font-medium">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
