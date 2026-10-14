'use client'

import Link from 'next/link'
import * as React from 'react'

const hoverPrefetchDelay = 150

export function HoverPrefetchLink({
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onTouchStart,
  ...props
}: Omit<React.ComponentProps<typeof Link>, 'prefetch'>) {
  const [prefetch, setPrefetch] = React.useState<null | false>(false)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelPendingPrefetch = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  React.useEffect(() => cancelPendingPrefetch, [cancelPendingPrefetch])

  return (
    <Link
      {...props}
      prefetch={prefetch}
      onMouseEnter={(event) => {
        cancelPendingPrefetch()
        timeoutRef.current = setTimeout(() => {
          setPrefetch(null)
          timeoutRef.current = null
        }, hoverPrefetchDelay)
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        cancelPendingPrefetch()
        onMouseLeave?.(event)
      }}
      onFocus={(event) => {
        cancelPendingPrefetch()
        setPrefetch(null)
        onFocus?.(event)
      }}
      onTouchStart={(event) => {
        cancelPendingPrefetch()
        setPrefetch(null)
        onTouchStart?.(event)
      }}
    />
  )
}
