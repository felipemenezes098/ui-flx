'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const ease = [0.22, 0.61, 0.36, 1] as const

const blurUp = {
  initial: { opacity: 0, filter: 'blur(12px)', y: 6 },
  animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
  exit: { opacity: 0, filter: 'blur(8px)', y: -4 },
}

const tokens = [
  { label: 'radius', value: 'inherited' },
  { label: 'shadow', value: 'scoped' },
  { label: 'palette', value: 'tokens' },
]

export function PresetStage({ className }: Readonly<{ className?: string }>) {
  return (
    <motion.div
      {...blurUp}
      transition={{ duration: 0.5, ease }}
      className={cn(
        'grid gap-8 p-6 sm:p-10 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-12',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.05 }}
        className="flex flex-col gap-5"
      >
        <Badge
          variant="secondary"
          className="w-fit rounded-full px-3 py-1 text-[10px] font-medium tracking-wide uppercase"
        >
          Atmosphere
        </Badge>
        <h3 className="text-foreground text-2xl leading-[1.15] font-medium tracking-tight text-balance md:text-[1.8rem]">
          A room for every block.
        </h3>
        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
          Radius, shadow and rhythm resolve from the scope around them. Nothing
          forks. Nothing duplicates.
        </p>

        <div className="border-border/60 mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border">
          {tokens.map((t) => (
            <div
              key={t.label}
              className="bg-card flex flex-col gap-0.5 px-3 py-2.5"
            >
              <span className="text-muted-foreground font-mono text-[9px] tracking-wider uppercase">
                {t.label}
              </span>
              <span className="text-foreground font-mono text-[11px]">
                {t.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(14px)', scale: 1.02 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        className="relative aspect-6/5 w-full overflow-hidden rounded-2xl border shadow-lg"
      >
        <Image
          src="https://images.unsplash.com/photo-1750449316808-31a9a800a84b?q=80&w=1600&auto=format&fit=crop"
          alt="Atmosphere"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
        <div className="from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="bg-background/80 text-foreground rounded-full px-2.5 py-1 font-mono text-[10px] backdrop-blur-md">
            scope · inherited
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
