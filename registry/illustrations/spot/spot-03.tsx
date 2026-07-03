'use client'

import { motion, useReducedMotion } from 'motion/react'

export function Spot03() {
  const reduce = useReducedMotion()

  return (
    <div className="relative h-40 w-52 overflow-hidden rounded-2xl border shadow-sm">
      <motion.img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=520&q=80"
        alt=""
        className="h-full w-full object-cover outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
        style={{ willChange: 'transform, opacity' }}
        initial={reduce ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-3">
        <p className="text-sm font-semibold text-white">Mountain escape</p>
        <p className="text-xs text-white/70">12 photos · 3 days ago</p>
      </div>
    </div>
  )
}
