'use client'

import { useState } from 'react'

import { copyToClipboard } from '@/utils/copy-to-clipboard'

/** Copy text to the clipboard and flip a `copied` flag for `timeout` ms. */
export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false)

  async function copy(text: string) {
    await copyToClipboard(text)
    setCopied(true)
    setTimeout(() => setCopied(false), timeout)
  }

  return { copied, copy }
}
