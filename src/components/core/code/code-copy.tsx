'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

type CodeBlockCopyProps = {
  fileContent: string
  className?: string
}

export function CodeBlockCopy({ fileContent, className }: CodeBlockCopyProps) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopy() {
    if (!fileContent) return

    copyToClipboard(fileContent)

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className={cn(
        'bg-card text-muted-foreground hover:bg-muted/80 h-7 w-fit gap-1 px-2',
        className,
      )}
    >
      {isCopied ? (
        <CheckIcon className="size-3.5 text-green-500" />
      ) : (
        <CopyIcon className="size-3.5" />
      )}
    </Button>
  )
}
