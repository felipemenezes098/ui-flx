import type { ReactNode } from 'react'

import type { DecisionPreviewSize } from '@/lib/intents/intent-manifest-types'
import { cn } from '@/lib/utils'

const sizeClass: Record<DecisionPreviewSize, string> = {
  none: 'max-w-none',
  sm: 'max-w-sm',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
  full: 'max-w-none',
}

export function DecisionPreview({
  size = 'lg',
  className,
  children,
}: Readonly<{
  size?: DecisionPreviewSize
  className?: string
  children: ReactNode
}>) {
  return (
    <div
      className={cn(
        '@container/decision flex w-full min-w-0 items-center justify-center',
        className,
      )}
    >
      <div
        className={cn(
          'w-full min-w-0 *:mx-auto *:w-full *:max-w-none *:min-w-0',
          sizeClass[size],
        )}
      >
        {children}
      </div>
    </div>
  )
}
