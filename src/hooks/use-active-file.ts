'use client'

import { useState } from 'react'

import type { IntentCodeFile } from '@/lib/intent-manifest-types'

/** Track which code file is selected, defaulting to the first. */
export function useActiveFile(files: IntentCodeFile[]) {
  const [activeName, setActiveName] = useState(files[0]?.name ?? null)
  const activeFile =
    files.find((file) => file.name === activeName) ?? files[0] ?? null

  return { activeFile, activeName, setActiveName }
}
