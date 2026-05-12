'use client'

import { motion } from 'motion/react'

const ease = [0.22, 0.61, 0.36, 1] as const

export function PresetsHero() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
      className="mx-auto flex max-w-2xl flex-col items-center gap-5 pt-6 text-center sm:pt-12"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 8 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease }}
        className="text-foreground text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl md:text-5xl"
      >
        Same blocks.{' '}
        <span className="text-muted-foreground italic">Different rooms.</span>
      </motion.h1>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 8 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease }}
        className="text-muted-foreground max-w-lg text-sm leading-relaxed text-pretty sm:text-[15px]"
      >
        Themes set the palette. Presets sit on top — quietly tuning radius,
        shadow and rhythm of every surface through inherited tokens.
      </motion.p>
    </motion.header>
  )
}
