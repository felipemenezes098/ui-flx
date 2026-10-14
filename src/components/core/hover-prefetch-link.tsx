'use client'

import Link from 'next/link'
import * as React from 'react'

export function HoverPrefetchLink({
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...props
}: Omit<React.ComponentProps<typeof Link>, 'prefetch'>) {
  const [prefetch, setPrefetch] = React.useState<null | false>(false)

  return (
    <Link
      {...props}
      prefetch={prefetch}
      onMouseEnter={(event) => {
        setPrefetch(null)
        onMouseEnter?.(event)
      }}
      onFocus={(event) => {
        setPrefetch(null)
        onFocus?.(event)
      }}
      onTouchStart={(event) => {
        setPrefetch(null)
        onTouchStart?.(event)
      }}
    />
  )
}
