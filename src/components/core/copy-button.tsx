'use client'

import { Check, CopyIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { useCopy } from '@/hooks/use-copy'

interface CopyButtonProps extends ComponentProps<typeof Button> {
  text: string
  /** Visible label next to the icon. Omit for an icon-only button. */
  label?: string
}

const copyTransition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
} as const

export function CopyButton({
  text,
  label,
  variant = 'outline',
  size = 'sm',
  ...props
}: Readonly<CopyButtonProps>) {
  const { copied, copy } = useCopy()

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      aria-label={label || (copied ? 'Copied' : 'Copy')}
      onClick={() => copy(text)}
      {...props}
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
              <Check className="size-3.5" aria-hidden />
            ) : (
              <CopyIcon className="size-3.5" aria-hidden />
            )}
          </motion.div>
        </AnimatePresence>
      </span>
      {label || null}
    </Button>
  )
}
