import { cn } from '@/lib/cn'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape preset. */
  shape?: 'line' | 'block' | 'circle'
}

/** Loading placeholder. Set width/height via className. */
export function Skeleton({ className, shape = 'line', ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'bg-surface-sunken animate-pulse',
        shape === 'line' && 'h-4 w-full rounded-sm',
        shape === 'block' && 'h-24 w-full rounded-md',
        shape === 'circle' && 'size-10 rounded-full',
        className,
      )}
      {...props}
    />
  )
}
