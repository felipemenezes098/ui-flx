'use client'

import { Check, CopyIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { useCopy } from '@/hooks/use-copy'

interface CopyButtonProps extends ComponentProps<typeof Button> {
  text: string
  label?: string
  copiedLabel?: string
}

export function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied',
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
      onClick={() => copy(text)}
      {...props}
    >
      {copied ? (
        <Check className="size-3.5 text-emerald-500" aria-hidden />
      ) : (
        <CopyIcon className="size-3.5" aria-hidden />
      )}
      {copied ? copiedLabel : label}
    </Button>
  )
}
