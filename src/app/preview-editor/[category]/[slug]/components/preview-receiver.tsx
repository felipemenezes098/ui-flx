'use client'

import * as React from 'react'

import { PresetScope } from '@/components/core/preset/preset-scope'
import type { PresetId } from 'registry/presets/presets-config'
import { getBlockBySlug } from '@/lib/catalog'
import { FALLBACK_PRESET, readPresetFromStorage } from '@/lib/preset-storage'
import { cn } from '@/lib/utils'
import { isPresetId } from 'registry/presets/presets-config'

interface PreviewReceiverProps {
  slug: string
  initialProps: Record<string, unknown>
  componentClassName?: string
  containerClassName?: string
}

export function PreviewReceiver({
  slug,
  initialProps,
  componentClassName,
  containerClassName,
}: Readonly<PreviewReceiverProps>) {
  const BlockComponent = getBlockBySlug(slug)?.component
  const [props, setProps] = React.useState(initialProps)
  const [preset, setPreset] = React.useState<PresetId>(FALLBACK_PRESET)

  React.useLayoutEffect(() => {
    const stored = readPresetFromStorage()
    if (stored) setPreset(stored)
  }, [])

  React.useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== globalThis.location.origin) return
      const { type } = event.data ?? {}
      if (type === 'EDITOR_PROPS_UPDATE') {
        setProps(event.data.props as Record<string, unknown>)
        return
      }
      if (type === 'EDITOR_PRESET_UPDATE') {
        const next = event.data.preset
        if (isPresetId(next)) setPreset(next)
      }
    }
    globalThis.addEventListener('message', handleMessage)
    return () => globalThis.removeEventListener('message', handleMessage)
  }, [])

  if (!BlockComponent) return null

  return (
    <PresetScope
      preset={preset}
      className="bg-background flex min-h-screen w-full items-center justify-center"
    >
      <div
        className={cn(
          'mx-auto h-full w-full max-w-7xl p-5',
          containerClassName,
        )}
      >
        <BlockComponent
          {...props}
          className={componentClassName}
          imageProps={{ unoptimized: true }}
        />
      </div>
    </PresetScope>
  )
}
