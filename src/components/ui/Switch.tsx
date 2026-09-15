import * as RSwitch from '@radix-ui/react-switch'
import { forwardRef, useId } from 'react'

import { cn } from '@/lib/cn'

export interface SwitchProps extends React.ComponentPropsWithoutRef<
  typeof RSwitch.Root
> {
  label?: string
  description?: string
}

export const Switch = forwardRef<React.ElementRef<typeof RSwitch.Root>, SwitchProps>(
  function Switch({ className, label, description, id, ...props }, ref) {
    const autoId = useId()
    const switchId = id ?? autoId

    const control = (
      <RSwitch.Root
        ref={ref}
        id={switchId}
        className={cn(
          'peer bg-border-strong inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
          'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
          'data-[state=checked]:bg-primary disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        <RSwitch.Thumb className="pointer-events-none block size-5 rounded-full bg-white shadow-sm transition-transform data-[state=checked]:translate-x-4" />
      </RSwitch.Root>
    )

    if (!label && !description) return control

    return (
      <div className="flex items-start gap-3">
        {control}
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={switchId} className="t-label text-ink cursor-pointer">
              {label}
            </label>
          )}
          {description && <p className="t-caption text-ink-subtle">{description}</p>}
        </div>
      </div>
    )
  },
)
