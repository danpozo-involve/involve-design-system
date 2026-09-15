import * as RTabs from '@radix-ui/react-tabs'

import { cn } from '@/lib/cn'

export const Tabs = RTabs.Root

export function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RTabs.List>) {
  return (
    <RTabs.List
      className={cn(
        'bg-surface-sunken inline-flex items-center gap-1 rounded-lg p-1',
        className,
      )}
      {...props}
    />
  )
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RTabs.Trigger>) {
  return (
    <RTabs.Trigger
      className={cn(
        't-label text-ink-muted rounded-md px-3 py-1.5 transition-colors',
        'hover:text-ink focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
        'data-[state=active]:bg-surface data-[state=active]:text-ink data-[state=active]:shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

export function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RTabs.Content>) {
  return (
    <RTabs.Content
      className={cn(
        'focus-visible:outline-primary mt-4 focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
      {...props}
    />
  )
}
