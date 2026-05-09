'use client'

import * as React from 'react'

import { getBlockBySlug } from '@/lib/catalog'
import { cn } from '@/lib/utils'

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

  React.useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== globalThis.location.origin) return
      if (event.data?.type !== 'EDITOR_PROPS_UPDATE') return
      setProps(event.data.props as Record<string, unknown>)
    }
    globalThis.addEventListener('message', handleMessage)
    return () => globalThis.removeEventListener('message', handleMessage)
  }, [])

  if (!BlockComponent) return null

  return (
    <div
      className={cn(
        'mx-auto h-full w-full p-10',
        containerClassName,
      )}
    >
      <BlockComponent
        {...props}
        className={componentClassName}
        imageProps={{ unoptimized: true }}
      />
    </div>
  )
}
