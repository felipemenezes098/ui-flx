'use client'

import { motion } from 'motion/react'

import { presets } from '@/lib/presets-config'

const ease = [0.22, 0.61, 0.36, 1] as const

export function PresetsPhilosophy() {
  const presetNames = presets.map((p) => p.name).join(', ')

  const lines = [
    {
      lead: 'A mood, not a market.',
      body: 'Presets steer tone, density, and edge—how the UI feels—not what business you are in.',
    },
    {
      lead: 'Names you won’t outgrow.',
      body: (
        <>
          <span className="italic">{presetNames}</span>
          {' — short handles for atmosphere, not verticals. Not '}
          <span className="italic">finance</span>
          {', not '}
          <span className="italic">dashboard</span>.
        </>
      ),
    },
    {
      lead: 'Same bones. Different air.',
      body: 'Structure and components stay put; radius, shadow, and ink shift inside the scope.',
    },
  ] as const

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-10 py-6 sm:py-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease }}
        className="text-foreground text-2xl leading-[1.2] font-medium tracking-tight text-balance sm:text-3xl"
      >
        Direction is a layer.{' '}
        <span className="text-muted-foreground">Not a fork.</span>
      </motion.h2>

      <ul className="flex flex-col">
        {lines.map((line, i) => (
          <motion.li
            key={line.lead}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.45, ease }}
            className="border-border/60 grid gap-1.5 border-t py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
          >
            <span className="text-foreground text-sm font-medium tracking-tight">
              {line.lead}
            </span>
            <span className="text-muted-foreground text-sm leading-relaxed">
              {line.body}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
