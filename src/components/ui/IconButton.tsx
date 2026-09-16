import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/cn'

const iconButtonVariants = cva(
  // Matches Button's "Playful/Tactile" direction (2026-09-16) -- full radius
  // (a circle, since this is always square) and the same press/hover scale,
  // for one consistent tactile feel across the whole button family.
  'inline-flex items-center justify-center rounded-full transition-[background-color,color,box-shadow,transform] duration-150 hover:scale-[1.05] active:scale-[0.92] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary shadow-md hover:bg-primary-hover hover:shadow-lg',
        secondary:
          'border border-border bg-surface text-ink shadow-md hover:bg-surface-hover hover:shadow-lg',
        ghost: 'bg-transparent text-ink-muted hover:bg-surface-hover hover:text-ink',
        danger:
          'bg-transparent text-ink-muted hover:bg-danger-subtle hover:text-danger-text',
      },
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
      },
    },
    defaultVariants: { variant: 'ghost', size: 'md' },
  },
)

export interface IconButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /** Accessible name — required since the button has no text. */
  label: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ className, variant, size, label, children, ...props }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        title={label}
        className={cn(iconButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    )
  },
)
