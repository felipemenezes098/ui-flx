import { AlertCircle, Check } from 'lucide-react'
import type { ComponentType } from 'react'

import type { IntentCodeFile } from '@/lib/intent-exports'

import { DecisionActions } from './decision-actions'

interface AlternativeItem {
  slug: string
  name: string
  best: string
  caveat: string
  demo: ComponentType
  prompt: string
  registryName: string
  codeFiles: IntentCodeFile[]
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
        {items.map((item) => (
          <div
            key={item.slug}
            className="border-border bg-card/50 flex h-full flex-col gap-3 rounded-xl border p-2"
          >
            <div className="border-border bg-card dark:bg-background flex min-h-44 flex-1 items-center justify-center overflow-hidden rounded-lg border p-6">
              <div className="scale-90">
                <item.demo />
              </div>
            </div>
            <div className="flex flex-col gap-3 px-1.5 pb-1.5">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">{item.name}</span>
                <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1.5">
                  <Check
                    className="mt-0.5 size-3 shrink-0 text-emerald-600/70 dark:text-emerald-400/70"
                    aria-hidden
                  />
                  <p className="text-muted-foreground text-xs leading-snug">
                    {item.best}
                  </p>
                  <AlertCircle
                    className="mt-0.5 size-3 shrink-0 text-amber-600/60 dark:text-amber-400/60"
                    aria-hidden
                  />
                  <p className="text-muted-foreground/75 text-xs leading-snug">
                    {item.caveat}
                  </p>
                </div>
              </div>
              <DecisionActions
                name={item.name}
                prompt={item.prompt}
                registryName={item.registryName}
                codeFiles={item.codeFiles}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
