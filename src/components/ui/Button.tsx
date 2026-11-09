import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/cn'
import { Spinner } from './Spinner'

export const buttonVariants = cva(
  // "Calm" direction (2026-11-09), replacing "Playful/Tactile": 8px corners, medium weight, no
  // shadows, and no hover motion. Hover only changes the colour (Material 3's state layers); a
  // press shrinks it 2% so it still answers the click (Emil Kowalski's 0.97-0.98 press). Primary
  // is filled, secondary has a faint fill and a visible border (a clear signifier, per NN/g's flat-UI research),
  // ghost is text. pointer-events-none on disabled already suppresses hover/active.
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium select-none transition-[background-color,border-color,color,transform] duration-100 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active',
        secondary:
          'border border-border-strong bg-secondary text-on-secondary hover:bg-secondary-hover active:bg-secondary-hover',
        subtle:
          'bg-primary-subtle text-on-primary-subtle hover:bg-primary-subtle-hover active:bg-primary-subtle-hover',
        ghost: 'bg-transparent text-ink-muted hover:bg-surface-hover hover:text-ink',
        danger: 'bg-danger text-on-danger hover:brightness-95 active:brightness-90',
      },
      size: {
        xs: 'h-7 rounded-md px-2.5 text-xs',
        sm: 'h-9 px-3.5 text-sm',
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
