'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

import { PresetScope } from '@/components/core/preset/preset-scope'
import type { PresetId } from 'registry/presets/presets-config'
import { cn } from '@/lib/utils'

import { presets } from 'registry/presets/presets-config'

import { PresetStage } from './preset-stage'

const ease = [0.22, 0.61, 0.36, 1] as const

function PresetSwitcher({
  active,
  onChange,
}: Readonly<{
  active: PresetId
  onChange: (id: PresetId) => void
}>) {
  return (
    <div
      role="tablist"
      aria-label="Choose preset"
      className="border-border/70 bg-card/40 inline-flex items-center gap-1 rounded-full border p-1 backdrop-blur-sm"
    >
      {presets.map((p) => {
        const on = active === p.id
        return (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(p.id)}
            className={cn(
              'rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200',
              on
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {p.name}
          </button>
        )
      })}
    </div>
  )
}

export function PresetsShowroom() {
  const [active, setActive] = useState<PresetId>('loom')

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease }}
      className="flex flex-col gap-6"
    >
      <div className="flex justify-center">
        <PresetSwitcher active={active} onChange={setActive} />
      </div>

      <PresetScope
        preset={active}
        className="bg-background relative overflow-hidden rounded-2xl border transition-[border-radius,box-shadow,background-color] duration-500"
      >
        <PresetStage />
      </PresetScope>
    </motion.section>
  )
}
