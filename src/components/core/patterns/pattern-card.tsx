import type { ReactNode } from 'react'
import type { RegistryItem } from 'shadcn/schema'

import { cn } from '@/lib/utils'

interface PatternCardProps {
  item: RegistryItem
  children: ReactNode
  actions?: ReactNode
  className?: string
  previewClassName?: string
}

export function PatternCard({
  item,
  children,
  actions,
  className,
  previewClassName = 'p-8',
}: Readonly<PatternCardProps>) {
  return (
    <div
      id={item.name}
      className={cn('flex scroll-mt-24 flex-col gap-2', className)}
    >
      <div
        className={cn(
          'border-border/50 flex min-h-56 flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border',
          previewClassName,
        )}
      >
        {children}
      </div>
      <div className="flex items-center justify-between gap-2 pl-1">
        <span className="line-clamp-1 flex-1 truncate text-sm">
          {item.title}
        </span>
        {actions}
      </div>
    </div>
  )
}
