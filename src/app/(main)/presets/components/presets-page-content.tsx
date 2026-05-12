'use client'

import { motion } from 'motion/react'

import type { PresetCssMap } from '@/app/(main)/presets/lib/load-preset-css'

import { PresetsComparison } from './presets-comparison'
import { PresetsHero } from './presets-hero'
import { PresetsPhilosophy } from './presets-philosophy'
import { PresetsShowroom } from './presets-showroom'

export function PresetsPageContent({
  cssByPreset,
}: Readonly<{ cssByPreset: PresetCssMap }>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex w-full flex-col gap-16 md:gap-24"
    >
      <PresetsHero />
      <PresetsShowroom />
      <PresetsComparison cssByPreset={cssByPreset} />
      <PresetsPhilosophy />
    </motion.div>
  )
}
