'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import type { PresetCssMap } from '@/app/(main)/presets/lib/load-preset-css'
import { PresetScope } from '@/components/core/preset/preset-scope'
import { Button } from '@/components/ui/button'

import { presets } from 'registry/presets/presets-config'

import { PresetGetDialog } from './preset-get-dialog'

const ease = [0.22, 0.61, 0.36, 1] as const

function MiniSurface() {
  return (
    <div className="bg-card text-card-foreground space-y-3 rounded-xl border p-4 shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-foreground text-xs font-semibold tracking-tight">
          Surface
        </span>
        <span className="bg-primary size-2 rounded-full" />
      </div>
      <p className="text-muted-foreground text-[11px] leading-relaxed">
        Radius, shadow and palette resolve from the scope around them.
      </p>
      <div className="flex items-center gap-1.5">
        <Button size="sm" className="h-6 px-2 text-[11px]">
          Action
        </Button>
        <Button size="sm" variant="outline" className="h-6 px-2 text-[11px]">
          Ghost
        </Button>
      </div>
    </div>
  )
}

export function PresetsComparison({
  cssByPreset,
}: Readonly<{ cssByPreset: PresetCssMap }>) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-foreground max-w-md text-xl font-medium tracking-tight text-balance sm:text-2xl">
          Four atmospheres, side by side.
        </h2>
        <p className="text-muted-foreground text-xs">
          Only the atmosphere changes.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {presets.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.4, ease }}
          >
            <PresetScope
              preset={p.id}
              className="bg-background flex h-full flex-col gap-4 rounded-2xl border p-5"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-foreground text-sm font-semibold tracking-tight">
                  {p.name}
                </span>
                <span className="text-muted-foreground font-mono text-[10px]">
                  {p.id}
                </span>
              </div>

              <MiniSurface />

              <p className="text-muted-foreground text-[11px] leading-relaxed">
                {p.tagline}
              </p>

              <PresetGetDialog
                preset={p}
                css={cssByPreset[p.id]}
                trigger={
                  <button
                    type="button"
                    className="group/cta border-border/70 text-foreground hover:bg-muted/60 mt-auto inline-flex items-center justify-between rounded-lg border px-3 py-2 text-[11px] font-medium transition-colors"
                  >
                    Get preset
                    <ArrowUpRight className="size-3 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </button>
                }
              />
            </PresetScope>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
