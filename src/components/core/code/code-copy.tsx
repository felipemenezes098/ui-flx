'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { Button } from '@/components/ui/button'
import { useCopy } from '@/hooks/use-copy'
import { cn } from '@/lib/utils'

type CodeBlockCopyProps = {
  fileContent: string
  className?: string
}

const copyTransition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
} as const

export function CodeBlockCopy({
  fileContent,
  className,
}: Readonly<CodeBlockCopyProps>) {
  const { copied, copy } = useCopy()

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={copied ? 'Copied' : 'Copy code'}
      className={cn(
        'bg-card text-muted-foreground hover:bg-muted/80 h-7 shrink-0 px-2 shadow-none',
        className,
      )}
      onClick={() => fileContent && copy(fileContent)}
    >
      <span className="relative grid size-3.5 shrink-0 place-items-center">
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
    </Button>
  )
}
