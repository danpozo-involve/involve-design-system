import * as RCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon, MinusIcon } from '@phosphor-icons/react'
import { forwardRef, useId } from 'react'

import { cn } from '@/lib/cn'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof RCheckbox.Root
> {
  label?: string
  description?: string
}

export const Checkbox = forwardRef<
  React.ElementRef<typeof RCheckbox.Root>,
  CheckboxProps
>(function Checkbox({ className, label, description, id, ...props }, ref) {
  const autoId = useId()
  const boxId = id ?? autoId

  const control = (
    <RCheckbox.Root
      ref={ref}
      id={boxId}
      className={cn(
        'border-border-strong bg-surface flex size-5 shrink-0 items-center justify-center rounded-sm border transition-colors',
        'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
        'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
        'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RCheckbox.Indicator className="text-on-primary">
        {props.checked === 'indeterminate' ? (
          <MinusIcon size={14} weight="bold" />
        ) : (
          <CheckIcon size={14} weight="bold" />
        )}
      </RCheckbox.Indicator>
    </RCheckbox.Root>
  )

  if (!label && !description) return control

  return (
    <div className="flex items-start gap-2.5">
      {control}
      <div className="flex flex-col gap-0.5">
        {label && (
          <label htmlFor={boxId} className="t-label text-ink cursor-pointer">
            {label}
          </label>
        )}
        {description && <p className="t-caption text-ink-subtle">{description}</p>}
      </div>
    </div>
  )
})
