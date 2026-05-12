'use client'

import * as React from 'react'

import { PresetScope } from '@/components/core/preset/preset-scope'
import type { PresetId } from 'registry/presets/presets-config'
import { FALLBACK_PRESET, readPresetFromStorage } from '@/lib/preset-storage'

export function PreviewPresetShell({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [preset, setPreset] = React.useState<PresetId>(FALLBACK_PRESET)

  React.useLayoutEffect(() => {
    const stored = readPresetFromStorage()
    if (stored) setPreset(stored)
  }, [])

  return (
    <PresetScope
      preset={preset}
      className="flex min-h-screen w-full items-center justify-center"
    >
      {children}
    </PresetScope>
  )
}
