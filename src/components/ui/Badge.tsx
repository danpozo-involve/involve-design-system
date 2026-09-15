import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap',
  {
    variants: {
      tone: {
        neutral: 'bg-surface-sunken text-ink-muted',
        brand: 'bg-primary-subtle text-on-primary-subtle',
        success: 'bg-success-subtle text-success-text',
        warning: 'bg-warning-subtle text-warning-text',
        danger: 'bg-danger-subtle text-danger-text',
        info: 'bg-info-subtle text-info-text',
      },
      size: {
        sm: 'px-2 py-0.5 text-[0.6875rem] leading-4',
        md: 'px-2.5 py-1 text-xs leading-4',
      },
      outline: {
        true: 'bg-transparent ring-1 ring-inset ring-current/30',
        false: '',
      },
    },
    defaultVariants: { tone: 'neutral', size: 'md', outline: false },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  /** Small leading dot in the current text color. */
  dot?: boolean
}

export function Badge({
  className,
  tone,
  size,
  outline,
  dot,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone, size, outline }), className)} {...props}>
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  )
}
