import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/cn'
import { IconButton } from '@/components/ui'

export interface ScrollSectionProps {
  title: string
  /** Already-sized `shrink-0` items (cards). */
  children: React.ReactNode
  className?: string
}

/**
 * A titled section whose body is a horizontally-scrolling row, with
 * prev / next controls at the top right (desktop only — mobile swipes).
 */
export function ScrollSection({ title, children, className }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = () => {
    const el = ref.current
    if (!el) return
    setAtStart(el.scrollLeft <= 8)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  const nudge = (dir: -1 | 1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className={className}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-ink-strong text-xl font-semibold">{title}</h2>
        <div className="hidden shrink-0 items-center gap-1 sm:flex">
          <IconButton
            label="Scroll left"
            size="sm"
            onClick={() => nudge(-1)}
            disabled={atStart}
          >
            <CaretLeftIcon size={16} weight="bold" />
          </IconButton>
          <IconButton
            label="Scroll right"
            size="sm"
            onClick={() => nudge(1)}
            disabled={atEnd}
          >
            <CaretRightIcon size={16} weight="bold" />
          </IconButton>
        </div>
      </div>

      <div
        ref={ref}
        onScroll={sync}
        className={cn(
          '-mx-4 flex [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden',
        )}
      >
        {children}
      </div>
    </section>
  )
}
