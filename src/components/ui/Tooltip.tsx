import * as RTooltip from '@radix-ui/react-tooltip'

import { cn } from '@/lib/cn'

export const TooltipProvider = RTooltip.Provider

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: RTooltip.TooltipContentProps['side']
  className?: string
}

export function Tooltip({ content, children, side = 'top', className }: TooltipProps) {
  return (
    <RTooltip.Root>
      <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
      <RTooltip.Portal>
        <RTooltip.Content
          side={side}
          sideOffset={6}
          className={cn(
            't-caption bg-surface-inverse text-ink-inverse z-50 max-w-56 rounded-md px-2.5 py-1.5 shadow-lg',
            className,
          )}
        >
          {content}
          <RTooltip.Arrow className="fill-surface-inverse" />
        </RTooltip.Content>
      </RTooltip.Portal>
    </RTooltip.Root>
  )
}
