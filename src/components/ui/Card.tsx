import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/cn'

const cardVariants = cva('rounded-xl bg-surface', {
  variants: {
    elevation: {
      flat: 'border border-border-subtle',
      raised: 'border border-border-subtle shadow-sm',
      floating: 'shadow-lg',
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    },
    interactive: {
      true: 'transition-[box-shadow,border-color,transform] duration-150 hover:border-border hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      false: '',
    },
  },
  defaultVariants: { elevation: 'raised', padding: 'md', interactive: false },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, elevation, padding, interactive, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(cardVariants({ elevation, padding, interactive }), className)}
      {...props}
    />
  )
})

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-3 flex flex-col gap-1', className)} {...props} />
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('t-paragraph-lg text-ink-strong font-semibold', className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('t-paragraph-sm text-ink-muted', className)} {...props} />
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-4 flex items-center gap-2', className)} {...props} />
}
