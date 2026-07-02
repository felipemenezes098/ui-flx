'use client'

import * as React from 'react'

import { getBlockBySlug } from '@/lib/blocks/block-catalog'
import { cn } from '@/lib/utils'

interface PreviewEditorFrameProps {
  slug: string
}

export function PreviewEditorFrame({ slug }: Readonly<PreviewEditorFrameProps>) {
  const manifest = getBlockBySlug(slug)
  const [props, setProps] = React.useState<Record<string, unknown>>(
    () => (manifest?.defaults as Record<string, unknown>) ?? {},
  )

  React.useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.data?.type === 'preview-editor:props') {
        setProps(event.data.props)
      }
    }
    window.addEventListener('message', onMessage)
    window.parent?.postMessage({ type: 'preview-editor:ready' }, '*')
    return () => window.removeEventListener('message', onMessage)
  }, [])

  if (!manifest) return null
  const Comp = manifest.component

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div
        data-block-preview
        className={cn(
          'mx-auto h-full w-full max-w-7xl p-5',
          manifest.meta?.containerClassName,
        )}
      >
        <Comp
          {...props}
          className={manifest.meta?.componentClassName}
          imageProps={{ unoptimized: true }}
        />
      </div>
    </div>
  )
}
