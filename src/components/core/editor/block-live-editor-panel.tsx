'use client'

import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { BlockLiveEditorFields } from './block-live-editor'
import { Separator } from '@/components/ui/separator'

export function BlockLiveEditorPanel({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      className={cn('relative overflow-hidden rounded-lg border', className)}
    >
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 350 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(!isOpen && 'overflow-hidden')}
      >
        <div className="flex flex-col gap-4 p-5 pb-16">
          <BlockLiveEditorFields />
        </div>
      </motion.div>

      <div className="from-background via-background/70 pointer-events-none absolute inset-x-0 bottom-0 flex h-30 items-end justify-center bg-gradient-to-t to-transparent pb-4">
        <motion.button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="bg-card text-muted-foreground pointer-events-auto flex items-center gap-2 rounded-full border border-black/10 px-2 py-1.5 text-sm font-medium dark:border-white/10"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'collapse' : 'show'}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="min-w-[4.5rem] text-center"
            >
              {isOpen ? 'Collapse' : 'Expand'}
            </motion.span>
          </AnimatePresence>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ChevronDown className="size-3.5 shrink-0" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  )
}
