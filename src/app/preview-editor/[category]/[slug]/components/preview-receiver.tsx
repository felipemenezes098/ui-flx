'use client'

import * as React from 'react'

import { getBlockComponent } from '@/lib/blocks-source'
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
  const BlockComponent = getBlockComponent(slug)
  const [props, setProps] = React.useState(initialProps)

  React.useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return
      if (event.data?.type !== 'EDITOR_PROPS_UPDATE') return
      setProps(event.data.props as Record<string, unknown>)
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  if (!BlockComponent) return null

  return (
    <div
      className={cn('mx-auto h-full w-full max-w-6xl p-10', containerClassName)}
    >
      <BlockComponent
        {...props}
        className={componentClassName}
        imageProps={{ unoptimized: true }}
      />
    </div>
  )
}
