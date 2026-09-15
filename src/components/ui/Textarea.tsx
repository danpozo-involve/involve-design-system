import { forwardRef, useId } from 'react'

import { cn } from '@/lib/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, label, hint, error, id, ...props }, ref) {
    const autoId = useId()
    const fieldId = id ?? autoId

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label htmlFor={fieldId} className="t-label text-ink">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          className={cn(
            'bg-surface text-ink min-h-24 w-full rounded-md border px-3 py-2 text-sm shadow-xs transition-colors outline-none',
            'border-border placeholder:text-ink-disabled focus:border-primary focus:ring-ring focus:ring-4',
            error && 'border-danger focus:border-danger focus:ring-danger/20',
            className,
          )}
          {...props}
        />
        {error ? (
          <p className="t-caption text-danger-text">{error}</p>
        ) : hint ? (
          <p className="t-caption text-ink-subtle">{hint}</p>
        ) : null}
      </div>
    )
  },
)
