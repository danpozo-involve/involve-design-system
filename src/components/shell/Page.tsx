import { cn } from '@/lib/cn'
import { Container, type ContainerProps } from './Container'

export interface PageProps {
  /** Typically a <TopBar>. Rendered outside the width container, sticky-friendly. */
  header?: React.ReactNode
  children: React.ReactNode
  /** Max content width. */
  width?: ContainerProps['size']
  /** Vertical padding around the content. */
  padded?: boolean
  className?: string
  contentClassName?: string
}

/**
 * Standard screen scaffold: optional sticky header + a width-constrained,
 * scrollable content column. Bottom padding clears the mobile tab bar.
 */
export function Page({
  header,
  children,
  width = 'md',
  padded = true,
  className,
  contentClassName,
}: PageProps) {
  return (
    <div className={cn('flex min-h-full flex-col', className)}>
      {header}
      <Container
        size={width}
        className={cn(
          'flex-1',
          padded && 'py-5 sm:py-6',
          'pb-[calc(4rem_+_env(safe-area-inset-bottom))] lg:pb-8',
          contentClassName,
        )}
      >
        {children}
      </Container>
    </div>
  )
}
