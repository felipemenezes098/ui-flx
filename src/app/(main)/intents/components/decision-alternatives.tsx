import type { ComponentType } from 'react'

import type {
  DecisionView,
  IntentGridColumns,
} from '@/lib/intents/intent-manifest-types'
import { cn } from '@/lib/utils'

import { intentGridItemVariants, IntentGrid } from './intent-grid'
import { DecisionActions } from './decision-actions'
import { DecisionPreview } from './decision-preview'

export interface AlternativeItem {
  view: DecisionView
  Demo: ComponentType
}

export function DecisionAlternatives({
  items,
  columns = 2,
}: Readonly<{ items: AlternativeItem[]; columns?: IntentGridColumns }>) {
  if (items.length === 0) return null

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">Other ways</h2>
        <p className="text-muted-foreground text-sm">
          Reach for these when the context shifts. Each is copyable too.
        </p>
      </div>

      <IntentGrid columns={columns} className="auto-rows-fr gap-4">
        {items.map(({ view, Demo }) => (
          <div
            key={view.slug}
            className={cn(
              'border-border bg-card/50 flex h-full min-w-0 flex-col gap-3 rounded-xl border p-2',
              intentGridItemVariants({
                span: view.styles?.span ?? 'default',
                columns,
              }),
            )}
          >
            <div className="border-border bg-card dark:bg-background flex min-h-44 min-w-0 flex-1 items-center justify-center overflow-hidden rounded-lg border p-6">
              <DecisionPreview size={view.styles?.previewSize ?? 'md'}>
                <Demo />
              </DecisionPreview>
            </div>
            <div className="flex items-center justify-between gap-3 px-1.5">
              <span className="min-w-0 truncate text-sm font-medium">
                {view.name}
              </span>
              <DecisionActions view={view} layout="inline" />
            </div>
          </div>
        ))}
      </IntentGrid>
    </section>
  )
}
