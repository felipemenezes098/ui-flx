'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function NewsBanner() {
  return (
    <div className="flex justify-center">
      <Link
        href="/blocks/scroll/sticky-scroll-media"
        className="group bg-background relative flex items-center gap-2.5 overflow-hidden rounded-full border px-4 py-1.5 text-sm"
      >
        <motion.div
          className="via-foreground/5 pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeInOut',
          }}
        />

        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>

        <span className="text-foreground font-medium">New blocks</span>
        <span className="text-muted-foreground/50">·</span>
        <span className="text-muted-foreground">Scroll Media</span>

        <ArrowRight className="text-muted-foreground h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  )
}
