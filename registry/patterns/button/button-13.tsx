'use client'

import { useState } from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button13() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText('npm install shadcn')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Button variant="outline" onClick={handleCopy}>
      {copied ? (
        <CheckIcon data-icon="inline-start" className="text-emerald-500" />
      ) : (
        <CopyIcon data-icon="inline-start" />
      )}
      {copied ? 'Copied' : 'Copy'}
    </Button>
  )
}
