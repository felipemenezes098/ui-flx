import type { ReactNode } from 'react'
import type { RegistryItem } from 'shadcn/schema'

import { cn } from '@/lib/utils'

interface PatternCardProps {
  item: RegistryItem
  children: ReactNode
  actions?: ReactNode
  className?: string
}

export function PatternCard({
  item,
  children,
  actions,
  className,
}: PatternCardProps) {
  return (
    <div
      className={cn(
        'group border-border bg-card relative overflow-hidden rounded-xl border',
        className,
      )}
    >
      <div className="flex min-h-48 items-center justify-center p-8">
        {children}
      </div>
      <div className="border-border flex items-center justify-between border-t px-4 py-2.5">
        <span className="text-sm font-medium">{item.title}</span>
        {actions}
      </div>
    </div>
  )
}
