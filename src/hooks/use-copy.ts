'use client'

import { useState } from 'react'

import { copyToClipboard } from '@/utils/copy-to-clipboard'

/**
 * Copy text to the clipboard and flip a `copied` flag for `timeout` ms.
 * `copying` is true while an async text is still resolving.
 */
export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false)
  const [copying, setCopying] = useState(false)

  async function copy(text: string | Promise<string>) {
    if (typeof text !== 'string') setCopying(true)
    const { success } = await copyToClipboard(text)
    setCopying(false)
    if (!success) return
    setCopied(true)
    setTimeout(() => setCopied(false), timeout)
  }

  return { copied, copying, copy }
}
