'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function EditorLayoutRoot({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">{children}</div>
}

function Editor({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:col-span-2">
      <div className="space-y-4 rounded-lg border p-4">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">Props Editor</h3>
          <p className="text-muted-foreground text-xs">
            Edit the props and see the result in real time
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}

function Preview({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="sticky top-19 self-start lg:col-span-4">
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto rounded-lg border">
        <div className={cn('flex min-h-110 items-center p-5', className)}>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  )
}

export const EditorLayout = Object.assign(EditorLayoutRoot, { Editor, Preview })
