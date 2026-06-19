'use client'

import { CopyButton } from '@/components/core/copy-button'
import type { DecisionView } from '@/lib/intents/intent-manifest-types'
import { cn } from '@/lib/utils'

import { DecisionCodeDialog } from './decision-code-dialog'

export function DecisionActions({
  view,
  className,
  layout = 'grid',
}: Readonly<{
  view: DecisionView
  className?: string
  layout?: 'grid' | 'inline'
}>) {
  const { prompt } = view
  const isInline = layout === 'inline'

  return (
    <div
      className={cn(
        isInline
          ? 'flex shrink-0 items-center gap-2'
          : 'grid w-full grid-cols-2 gap-2',
        className,
      )}
    >
      <DecisionCodeDialog
        view={view}
        className={isInline ? undefined : 'w-full'}
      />
      <CopyButton
        text={prompt}
        label="Prompt"
        size="sm"
        className={cn('text-xs', !isInline && 'w-full')}
      />
    </div>
  )
}
