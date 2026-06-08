'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const copyTransition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
} as const

export function Button13() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText('npm install shadcn')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Button variant="outline" onClick={handleCopy}>
      <span
        data-icon="inline-start"
        className="relative grid size-3.5 shrink-0 place-items-center"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={copied ? 'check' : 'copy'}
            initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            transition={copyTransition}
            className="flex items-center justify-center"
          >
            {copied ? (
              <CheckIcon className="size-3.5" aria-hidden />
            ) : (
              <CopyIcon className="size-3.5" aria-hidden />
            )}
          </motion.div>
        </AnimatePresence>
      </span>
      <span>Copy</span>
    </Button>
  )
}
