import { forwardRef, useId } from 'react'

import { cn } from '@/lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  /** Leading adornment — typically a Phosphor icon. */
  leading?: React.ReactNode
  /** Trailing adornment. */
  trailing?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, hint, error, leading, trailing, id, disabled, ...props },
  ref,
) {
  const autoId = useId()
  const inputId = id ?? autoId
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="t-label text-ink">
          {label}
        </label>
      )}
      <div
        className={cn(
          'bg-surface flex items-center gap-2 rounded-md border px-3 shadow-xs transition-colors',
          'border-border focus-within:border-primary focus-within:ring-ring focus-within:ring-4',
          error &&
            'border-danger focus-within:border-danger focus-within:ring-danger/20',
          disabled && 'bg-surface-sunken cursor-not-allowed opacity-60',
        )}
      >
        {leading && <span className="text-ink-subtle shrink-0">{leading}</span>}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'text-ink placeholder:text-ink-disabled h-10 w-full bg-transparent text-sm outline-none',
            className,
          )}
          {...props}
        />
        {trailing && <span className="text-ink-subtle shrink-0">{trailing}</span>}
      </div>
      {error ? (
        <p id={`${inputId}-error`} className="t-caption text-danger-text">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="t-caption text-ink-subtle">
          {hint}
        </p>
      ) : null}
    </div>
  )
})
