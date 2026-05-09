'use client'

import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { BlockLiveEditorFields } from './block-live-editor'

export function BlockLiveEditorFieldsPanel({
  className,
}: {
  className?: string
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      className={cn(
        'bg-card relative overflow-hidden rounded-lg border',
        className,
      )}
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

      <div className="from-background via-background/70 pointer-events-none absolute inset-x-0 bottom-0 flex h-20 items-end justify-center bg-gradient-to-t to-transparent pb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen((v) => !v)}
          className="text-muted-foreground pointer-events-auto bg-card hover:bg-muted"
        >
          {isOpen ? 'Collapse' : 'Expand'}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ChevronDown className="size-3.5 shrink-0" />
          </motion.div>
        </Button>
      </div>
    </div>
  )
}
