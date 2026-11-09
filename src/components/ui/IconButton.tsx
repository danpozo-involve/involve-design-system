import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/cn'

const iconButtonVariants = cva(
  // Matches Button's "Calm" direction (2026-11-09): rounded square (8px), no shadows, colour-only
  // hover, and the same 2% press, for one consistent feel across the button family.
  'inline-flex cursor-pointer items-center justify-center rounded-lg transition-[background-color,border-color,color,transform] duration-100 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary hover:bg-primary-hover',
        secondary: 'border border-border-strong bg-secondary text-on-secondary hover:bg-secondary-hover',
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
