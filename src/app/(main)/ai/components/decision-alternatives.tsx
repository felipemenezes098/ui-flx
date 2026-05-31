import { AlertCircle, Check } from 'lucide-react'
import type { ComponentType } from 'react'

import type { DecisionView } from '@/lib/intent-manifest-types'

import { DecisionActions } from './decision-actions'

export interface AlternativeItem {
  view: DecisionView
  Demo: ComponentType
}

export function DecisionAlternatives({
  items,
}: Readonly<{ items: AlternativeItem[] }>) {
  if (items.length === 0) return null

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">Other ways</h2>
        <p className="text-muted-foreground text-sm">
          Reach for these when the context shifts. Each is copyable too.
        </p>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map(({ view, Demo }) => (
          <div
            key={view.slug}
            className="border-border bg-card/50 flex h-full flex-col gap-3 rounded-xl border p-2"
          >
            <div className="border-border bg-card dark:bg-background flex min-h-44 flex-1 items-center justify-center overflow-hidden rounded-lg border p-6">
              <div className="scale-90">
                <Demo />
              </div>
            </div>
            <div className="flex flex-col gap-3 px-1.5 pb-1.5">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">{view.name}</span>
                <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1.5">
                  <Check
                    className="mt-0.5 size-3 shrink-0 text-emerald-600/70 dark:text-emerald-400/70"
                    aria-hidden
                  />
                  <p className="text-muted-foreground text-xs leading-snug">
                    {view.best}
                  </p>
                  <AlertCircle
                    className="mt-0.5 size-3 shrink-0 text-amber-600/60 dark:text-amber-400/60"
                    aria-hidden
                  />
                  <p className="text-muted-foreground/75 text-xs leading-snug">
                    {view.caveat}
                  </p>
                </div>
              </div>
              <DecisionActions view={view} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
