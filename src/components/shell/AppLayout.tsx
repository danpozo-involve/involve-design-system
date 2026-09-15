import { useState } from 'react'

import { cn } from '@/lib/cn'
import { BottomNav } from './BottomNav'
import { NotificationsPanel } from './NotificationsPanel'
import { SideNav } from './SideNav'
import type { NavGroup } from './nav'

export interface AppLayoutProps {
  /** Nav items in groups (see SideNav). */
  nav: NavGroup[]
  children: React.ReactNode
  className?: string
}

/**
 * Responsive app frame:
 *  - mobile: full-width content + fixed BottomNav (first 5 items)
 *  - desktop (lg+): persistent SideNav + content
 * Screens render their own <Page>/<TopBar> inside.
 */
export function AppLayout({ nav, children, className }: AppLayoutProps) {
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <div className={cn('bg-page flex min-h-dvh', className)}>
      <SideNav
        groups={nav}
        onOpenPanel={(panel) => panel === 'notifications' && setNotifOpen(true)}
      />
      <main className="relative flex min-w-0 flex-1 flex-col">{children}</main>
      <BottomNav groups={nav} />
      <NotificationsPanel open={notifOpen} onClose={() => setNotifOpen(false)} />
    </div>
  )
}
