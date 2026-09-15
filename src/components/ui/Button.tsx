import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/cn'
import { Spinner } from './Spinner'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none transition-[background-color,border-color,color,box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-on-primary shadow-xs hover:bg-primary-hover active:bg-primary-active',
        secondary:
          'border border-border bg-surface text-ink shadow-xs hover:bg-surface-hover active:bg-surface-sunken',
        subtle:
          'bg-primary-subtle text-on-primary-subtle hover:bg-primary-subtle-hover active:bg-primary-subtle-hover',
        ghost: 'bg-transparent text-ink-muted hover:bg-surface-hover hover:text-ink',
        danger:
          'bg-danger text-on-danger shadow-xs hover:brightness-95 active:brightness-90',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-5 text-base',
      },
      block: { true: 'w-full', false: '' },
    },
    defaultVariants: { variant: 'primary', size: 'md', block: false },
  },
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (e.g. an <a> or <Link>) instead of a <button>. */
  asChild?: boolean
  /** Show a spinner and disable interaction. */
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, block, asChild, loading, disabled, children, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, block }), className)}
      disabled={Comp === 'button' ? disabled || loading : undefined}
      aria-disabled={loading || disabled || undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size={size === 'lg' ? 18 : 16} />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </Comp>
  )
})
