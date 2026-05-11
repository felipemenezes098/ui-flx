'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import { CodeBlockProvider } from './code-block-context'

export function CodeBlock({
  children,
  className,
  collapsible = false,
  defaultOpen = false,
}: {
  children: React.ReactNode
  className?: string
  collapsible?: boolean
  defaultOpen?: boolean
}) {
  return (
    <CodeBlockProvider collapsible={collapsible} defaultOpen={defaultOpen}>
      <div
        className={cn(
          'bg-card relative w-full overflow-hidden rounded-xl border',
          className,
        )}
      >
        {children}
      </div>
    </CodeBlockProvider>
  )
}
