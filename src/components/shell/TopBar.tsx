import { ArrowLeftIcon } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import { cn } from '@/lib/cn'
import { IconButton } from '@/components/ui'

export interface TopBarProps {
  title?: string
  /** Show a back chevron that calls history.back (or `onBack`). */
  back?: boolean
  onBack?: () => void
  /** Left slot — overrides the back button when provided. */
  leading?: React.ReactNode
  /** Right slot — actions. */
  trailing?: React.ReactNode
  /** Removes the bottom hairline (e.g. when the page scrolls under it). */
  bare?: boolean
  className?: string
}

/** Sticky page header. Pair with <Page>. */
export function TopBar({
  title,
  back,
  onBack,
  leading,
  trailing,
  bare,
  className,
}: TopBarProps) {
  const navigate = useNavigate()

  return (
    <header
      className={cn(
        'bg-page/85 sticky top-0 z-20 flex h-14 items-center gap-2 px-3 backdrop-blur-md',
        !bare && 'border-border-subtle border-b',
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        {leading ??
          (back && (
            <IconButton
              label="Back"
              size="sm"
              onClick={() => (onBack ? onBack() : navigate(-1))}
            >
              <ArrowLeftIcon size={18} />
            </IconButton>
          ))}
        {title && (
          <h1 className="t-paragraph-lg text-ink truncate font-semibold">{title}</h1>
        )}
      </div>
      {trailing && <div className="flex items-center gap-1">{trailing}</div>}
    </header>
  )
}
