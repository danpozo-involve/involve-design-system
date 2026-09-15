import { useState } from 'react'

import { cn } from '@/lib/cn'
import { BottomNav } from './BottomNav'
import { SideNav } from './SideNav'
import type { NavGroup } from './nav'

export interface AppLayoutProps {
  /** Nav items in groups (see SideNav). */
  nav: NavGroup[]
  children: React.ReactNode
  className?: string
  /**
   * Renders an overlay panel when a nav item with a `panel` id is clicked
   * (e.g. a notifications tray). Receives the panel id and a close handler.
   * Omit if this app doesn't use panel-style nav items — the prototype's own
   * NotificationsPanel (app-specific, not part of this package) is a
   * `renderPanel={(panel, close) => panel === 'notifications' && <NotificationsPanel open onClose={close} />}`
   * away from working exactly as it did before this package existed.
   */
  renderPanel?: (panel: string, close: () => void) => React.ReactNode
}

/**
 * Responsive app frame:
 *  - mobile: full-width content + fixed BottomNav (first 5 items)
 *  - desktop (lg+): persistent SideNav + content
 * Screens render their own <Page>/<TopBar> inside.
 */
export function AppLayout({ nav, children, className, renderPanel }: AppLayoutProps) {
  const [openPanel, setOpenPanel] = useState<string | null>(null)

  return (
    <div className={cn('bg-page flex min-h-dvh', className)}>
      <SideNav groups={nav} onOpenPanel={(panel) => setOpenPanel(panel)} />
      <main className="relative flex min-w-0 flex-1 flex-col">{children}</main>
      <BottomNav groups={nav} />
      {openPanel && renderPanel?.(openPanel, () => setOpenPanel(null))}
    </div>
  )
}
