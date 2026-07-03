'use client'

import { Check, CopyIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { useCopy } from '@/hooks/use-copy'
import { cn } from '@/lib/utils'

interface CopyButtonProps extends ComponentProps<typeof Button> {
  text: string
  label?: string
  icon?: ReactNode
  iconClassName?: string
}

const copyTransition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
} as const

export function CopyButton({
  text,
  label,
  icon,
  iconClassName = 'size-3.5',
  variant = 'outline',
  size = 'sm',
  onClick,
  ...props
}: Readonly<CopyButtonProps>) {
  const { copied, copy } = useCopy()

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      aria-label={label || (copied ? 'Copied' : 'Copy')}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        copy(text)
      }}
    >
      <span
        className={cn(
          'relative grid shrink-0 place-items-center',
          iconClassName,
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={copied ? 'check' : 'idle'}
            initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            transition={copyTransition}
            className="flex items-center justify-center"
          >
            {copied ? (
              <Check className={iconClassName} aria-hidden />
            ) : (
              (icon ?? <CopyIcon className={iconClassName} aria-hidden />)
            )}
          </motion.div>
        </AnimatePresence>
      </span>
      {label || null}
    </Button>
  )
}
