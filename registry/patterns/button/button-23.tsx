'use client'

import { useState } from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'

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
        {copied ? <CheckIcon className="text-emerald-500" /> : <CopyIcon />}
      </Button>
    </ButtonGroup>
  )
}
