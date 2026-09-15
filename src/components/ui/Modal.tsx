import * as RDialog from '@radix-ui/react-dialog'
import { XIcon } from '@phosphor-icons/react'

import { cn } from '@/lib/cn'
import { IconButton } from './IconButton'

export const Modal = RDialog.Root
export const ModalTrigger = RDialog.Trigger
export const ModalClose = RDialog.Close

export interface ModalContentProps extends React.ComponentPropsWithoutRef<
  typeof RDialog.Content
> {
  title: string
  description?: string
  /** On mobile, slide up from the bottom as a sheet. */
  sheetOnMobile?: boolean
}

export function ModalContent({
  className,
  title,
  description,
  sheetOnMobile = true,
  children,
  ...props
}: ModalContentProps) {
  return (
    <RDialog.Portal>
      <RDialog.Overlay className="bg-slate-1100/40 fixed inset-0 z-40 backdrop-blur-[2px]" />
      <RDialog.Content
        className={cn(
          'bg-surface fixed z-50 flex flex-col gap-4 shadow-xl focus:outline-none',
          sheetOnMobile
            ? 'inset-x-0 bottom-0 rounded-t-xl p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]'
            : 'top-1/2 left-1/2 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl p-5',
          'sm:inset-x-auto sm:top-1/2 sm:bottom-auto sm:left-1/2 sm:w-[min(32rem,calc(100vw-2rem))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl',
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <RDialog.Title className="t-h6 text-ink">{title}</RDialog.Title>
            {description && (
              <RDialog.Description className="t-paragraph-sm text-ink-muted">
                {description}
              </RDialog.Description>
            )}
          </div>
          <RDialog.Close asChild>
            <IconButton label="Close" size="sm">
              <XIcon size={18} />
            </IconButton>
          </RDialog.Close>
        </div>
        {children}
      </RDialog.Content>
    </RDialog.Portal>
  )
}
