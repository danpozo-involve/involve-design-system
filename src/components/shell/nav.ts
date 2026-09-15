import type { Icon } from '@phosphor-icons/react'

export interface NavItem {
  to: string
  label: string
  icon: Icon
  /** Optional count shown as a pill. */
  badge?: number
  /** Match the route exactly (default true for "/"). */
  end?: boolean
  /** When set, the item opens an overlay panel instead of navigating. */
  panel?: string
}

/** Nav items are supplied in groups; the sidebar draws a divider between them. */
export type NavGroup = NavItem[]
