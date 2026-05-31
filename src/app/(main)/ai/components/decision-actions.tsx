'use client'

import { CopyButton } from '@/components/core/code/copy-button'
import type { DecisionView } from '@/lib/intent-manifest-types'
import { cn } from '@/lib/utils'

import { DecisionCodeDialog } from './decision-code-dialog'

export function DecisionActions({
  view,
  className,
}: Readonly<{ view: DecisionView; className?: string }>) {
  const { prompt } = view

  return (
    <div className={cn('grid w-full grid-cols-2 gap-2', className)}>
      <CopyButton
        text={prompt}
        label="Copy prompt"
        size="sm"
        className="w-full text-xs"
      />
      <DecisionCodeDialog view={view} className="w-full" />
    </div>
  )
}
