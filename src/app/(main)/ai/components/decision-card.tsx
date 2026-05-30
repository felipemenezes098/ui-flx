import { AlertCircle, Check } from 'lucide-react'
import type { ReactNode } from 'react'

import { CategoryPreviewCardBadge } from '@/components/core/category-preview-card'
import { cn } from '@/lib/utils'

interface DecisionCardProps {
  name: string
  best: string
  caveat: string
  recommended?: boolean
  children: ReactNode
  className?: string
}

export function DecisionCard({
  name,
  best,
  caveat,
  recommended,
  children,
  className,
}: Readonly<DecisionCardProps>) {
  return (
    <div
      className={cn(
        'border-border bg-card/50 flex flex-col gap-3 rounded-xl border p-2 shadow-xs',
        recommended && 'border-primary/50',
        className,
      )}
    >
      <div className="border-border bg-card dark:bg-background relative flex min-h-64 flex-1 flex-col items-center justify-center overflow-hidden rounded-lg border p-8">
        {children}
      </div>
      <div className="flex flex-col gap-2 px-0.5 pb-0.5">
        <span className="pr-0.5 pl-1 text-sm font-medium">{name}</span>
        <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 px-1">
          <Check
            className="mt-0.5 size-3 shrink-0 text-emerald-600/70 dark:text-emerald-400/70"
            aria-hidden
          />
          <p
            className="text-muted-foreground line-clamp-1 text-xs leading-snug"
            title={best}
          >
            {best}
          </p>
          <AlertCircle
            className="mt-0.5 size-3 shrink-0 text-amber-600/60 dark:text-amber-400/60"
            aria-hidden
          />
          <p
            className="text-muted-foreground/75 line-clamp-1 text-xs leading-snug"
            title={caveat}
          >
            {caveat}
          </p>
        </div>
      </div>
    </div>
  )
}
