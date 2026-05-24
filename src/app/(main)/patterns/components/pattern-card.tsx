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
}: Readonly<PatternCardProps>) {
  return (
    <div
      className={cn(
        'border-border bg-card/50 flex flex-col gap-3 rounded-xl border p-2',
        className,
      )}
    >
      <div className="border-border bg-card flex min-h-64 flex-1 flex-col items-center justify-center overflow-hidden rounded-lg border p-8">
        {children}
      </div>
      <div className="flex items-center justify-between pr-0.5 pl-1.5">
        <span className="line-clamp-1 truncate text-sm font-medium">
          {item.title}
        </span>
        {actions}
      </div>
    </div>
  )
}
