import * as RAvatar from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/cn'

const avatarVariants = cva(
  'relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-primary-subtle',
  {
    variants: {
      size: {
        xs: 'size-6 text-[0.625rem]',
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-12 text-base',
        xl: 'size-16 text-lg',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string
  /** Full name — used for the alt text and initials fallback. */
  name: string
  className?: string
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase()
}

export function Avatar({ src, name, size, className }: AvatarProps) {
  return (
    <RAvatar.Root className={cn(avatarVariants({ size }), className)}>
      {src && <RAvatar.Image src={src} alt={name} className="size-full object-cover" />}
      <RAvatar.Fallback
        delayMs={src ? 300 : 0}
        className="text-on-primary-subtle font-medium"
      >
        {initials(name)}
      </RAvatar.Fallback>
    </RAvatar.Root>
  )
}

export interface AvatarGroupProps {
  children: React.ReactNode
  /** Count shown in the trailing "+N" chip. */
  overflow?: number
  className?: string
}

export function AvatarGroup({ children, overflow, className }: AvatarGroupProps) {
  return (
    <div className={cn('flex items-center -space-x-2', className)}>
      <div className="[&_.rounded-full]:ring-surface flex items-center -space-x-2 [&_.rounded-full]:ring-2">
        {children}
      </div>
      {overflow && overflow > 0 && (
        <span className="bg-surface-sunken text-ink-muted ring-surface flex size-10 items-center justify-center rounded-full text-xs font-medium ring-2">
          +{overflow}
        </span>
      )}
    </div>
  )
}
