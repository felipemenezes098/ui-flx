'use client'

import { useState } from 'react'

import type { RegistryCodeFile } from '@/lib/registry-source'

export function useActiveFile(files: RegistryCodeFile[]) {
  const [activeName, setActiveName] = useState(files[0]?.name ?? null)
  const activeFile =
    files.find((file) => file.name === activeName) ?? files[0] ?? null

  return { activeFile, activeName, setActiveName }
}
