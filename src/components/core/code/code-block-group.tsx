import * as React from 'react'

import { cn } from '@/lib/utils'

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>

export function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={cn(
        'border-border/50 flex items-center justify-between border-b px-3 py-2',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
