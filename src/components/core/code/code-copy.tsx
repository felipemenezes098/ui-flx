'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

type CodeBlockCopyProps = {
  fileContent: string
  className?: string
}

const copyTransition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
} as const

export function CodeBlockCopy({ fileContent, className }: CodeBlockCopyProps) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopy() {
    if (!fileContent) return

    copyToClipboard(fileContent)

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={isCopied ? 'Copied' : 'Copy code'}
      className={cn(
        'bg-card text-muted-foreground hover:bg-muted/80 focus-visible:ring-ring/50 inline-flex h-7 shrink-0 items-center justify-center rounded-md px-2 transition-colors outline-none focus-visible:ring-3',
        className,
      )}
    >
      <span className="relative grid size-3.5 place-items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={isCopied ? 'check' : 'copy'}
            initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            transition={copyTransition}
            className="flex items-center justify-center"
          >
            {isCopied ? (
              <CheckIcon className="size-3.5" />
            ) : (
              <CopyIcon className="size-3.5" />
            )}
          </motion.div>
        </AnimatePresence>
      </span>
    </button>
  )
}
