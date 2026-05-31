'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'

const copyTransition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
} as const

export function Button23() {
  const [copied, setCopied] = useState(false)
  const value = 'ui.flexnative.com'

  function handleCopy() {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <ButtonGroup>
      <ButtonGroupText className="font-mono">{value}</ButtonGroupText>
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopy}
        aria-label="Copy token"
      >
        <span className="relative grid size-4 shrink-0 place-items-center">
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
                <CheckIcon className="size-4" aria-hidden />
              ) : (
                <CopyIcon className="size-4" aria-hidden />
              )}
            </motion.div>
          </AnimatePresence>
        </span>
      </Button>
    </ButtonGroup>
  )
}
