'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function EditorLayoutRoot({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-6">{children}</div>
}

function Sidebar({
  children,
  open,
}: {
  children: React.ReactNode
  open: boolean
}) {
  if (!open) return null
  return (
    <aside className="hidden h-[calc(100vh-10rem)] w-72 shrink-0 overflow-y-auto rounded-lg border p-4 md:block 2xl:max-h-200">
      {children}
    </aside>
  )
}

function Preview({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('flex-1', className)}>{children}</div>
}

export const EditorLayout = Object.assign(EditorLayoutRoot, { Sidebar, Preview })
