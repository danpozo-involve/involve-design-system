import { cn } from '@/lib/cn'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full'
}

const sizeClass: Record<NonNullable<ContainerProps['size']>, string> = {
  sm: 'max-w-lg',
  md: 'max-w-2xl',
  lg: 'max-w-5xl',
  full: 'max-w-none',
}

/** Horizontal max-width wrapper with responsive gutters. */
export function Container({ className, size = 'md', ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6', sizeClass[size], className)}
      {...props}
    />
  )
}
