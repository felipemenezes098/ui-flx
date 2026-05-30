'use client'

import { Check, CopyIcon, TerminalIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

export function DecisionCopyActions({
  prompt,
  install,
}: Readonly<{ prompt: string; install: string }>) {
  const [copied, setCopied] = useState<'prompt' | 'install' | null>(null)

  async function handleCopy(kind: 'prompt' | 'install', text: string) {
    await copyToClipboard(text)
    setCopied(kind)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <ButtonGroup className="w-full">
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={() => handleCopy('prompt', prompt)}
        className="flex-1"
      >
        {copied === 'prompt' ? (
          <Check className="size-3.5 text-emerald-500" aria-hidden />
        ) : (
          <CopyIcon className="size-3.5" aria-hidden />
        )}
        {copied === 'prompt' ? 'Copied' : 'Copy prompt'}
      </Button>
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={() => handleCopy('install', install)}
        title={install}
        className="text-muted-foreground hover:text-foreground"
      >
        {copied === 'install' ? (
          <Check className="size-3.5 text-emerald-500" aria-hidden />
        ) : (
          <TerminalIcon className="size-3.5" aria-hidden />
        )}
        Install
      </Button>
    </ButtonGroup>
  )
}
