import { AlertCircle, Check } from 'lucide-react'
import type { ComponentType } from 'react'

interface Alternative {
  slug: string
  name: string
  best: string
  caveat: string
  demo: ComponentType
}

export function DecisionAlternatives({
  alternatives,
}: Readonly<{ alternatives: Alternative[] }>) {
  if (alternatives.length === 0) return null

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">Other ways</h2>
        <p className="text-muted-foreground text-sm">
          Reach for these when the context shifts.
        </p>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
        {alternatives.map(({ slug, name, best, caveat, demo: Demo }) => (
          <div
            key={slug}
            className="border-border bg-card/50 flex h-full flex-col gap-3 rounded-xl border p-2"
          >
            <div className="border-border bg-card dark:bg-background flex min-h-44 flex-1 items-center justify-center overflow-hidden rounded-lg border p-6">
              <div className="scale-90">
                <Demo />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-1.5 pb-1.5">
              <span className="text-sm font-medium">{name}</span>
              <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1.5">
                <Check
                  className="mt-0.5 size-3 shrink-0 text-emerald-600/70 dark:text-emerald-400/70"
                  aria-hidden
                />
                <p className="text-muted-foreground text-xs leading-snug">
                  {best}
                </p>
                <AlertCircle
                  className="mt-0.5 size-3 shrink-0 text-amber-600/60 dark:text-amber-400/60"
                  aria-hidden
                />
                <p className="text-muted-foreground/75 text-xs leading-snug">
                  {caveat}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
