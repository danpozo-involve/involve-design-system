import { CaretUpDownIcon } from '@phosphor-icons/react'
import { forwardRef, useId } from 'react'

import { cn } from '@/lib/cn'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  hint?: string
  error?: string
}

/** Native select, styled to match Input. Fine for prototype-scale forms. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, label, hint, error, id, children, ...props },
  ref,
) {
  const autoId = useId()
  const selectId = id ?? autoId

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="t-label text-ink">
          {label}
        </label>
      )}
      <div
        className={cn(
          'border-border bg-surface relative flex items-center rounded-md border shadow-xs transition-colors',
          'focus-within:border-primary focus-within:ring-ring focus-within:ring-4',
          error && 'border-danger',
        )}
      >
        <select
          ref={ref}
          id={selectId}
          aria-invalid={error ? true : undefined}
          className={cn(
            'text-ink h-10 w-full appearance-none bg-transparent pr-9 pl-3 text-sm outline-none',
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <CaretUpDownIcon
          size={16}
          className="text-ink-subtle pointer-events-none absolute right-3"
        />
      </div>
      {error ? (
        <p className="t-caption text-danger-text">{error}</p>
      ) : hint ? (
        <p className="t-caption text-ink-subtle">{hint}</p>
      ) : null}
    </div>
  )
})
