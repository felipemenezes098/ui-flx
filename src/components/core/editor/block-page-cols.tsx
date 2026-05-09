'use client'

import { motion } from 'motion/react'

import { useBlockLiveEditorOptional } from './block-live-editor'

const LEFT_WIDTH = 340
const GAP = 40

const leftPanel = {
  open: {
    x: 0,
    opacity: 1,
    marginLeft: 0,
    transition: {
      marginLeft: { duration: 0.26, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.16, ease: [0.4, 0, 0.2, 1] },
      x: { duration: 0.12 },
    },
  },
  collapsed: {
    x: 0,
    opacity: 0,
    marginLeft: -(LEFT_WIDTH + GAP),
    transition: {
      marginLeft: { duration: 0.26, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.12, ease: [0.4, 0, 1, 1] },
      x: { duration: 0.12 },
    },
  },
} as const

function BlockPageColsRoot({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex gap-10">{children}</div>
}

function BlockPageColsLeft({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const ctx = useBlockLiveEditorOptional()
  const expanded = ctx?.expanded ?? false

  return (
    <motion.div
      className="relative shrink-0"
      style={{
        width: LEFT_WIDTH,
        pointerEvents: expanded ? 'none' : undefined,
      }}
      variants={leftPanel}
      initial={false}
      animate={expanded ? 'collapsed' : 'open'}
    >
      <div className="sticky top-10 z-10 h-0">
        <div className="from-background via-background/70 pointer-events-none absolute inset-x-0 top-0 h-30 bg-gradient-to-b to-transparent" />
      </div>
      {children}
      <div className="sticky bottom-0 z-10 h-0">
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t to-transparent" />
      </div>
    </motion.div>
  )
}

function BlockPageColsRight({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-w-0 flex-1">
      <div className="sticky top-14">{children}</div>
    </div>
  )
}

export { BlockPageColsRoot, BlockPageColsLeft, BlockPageColsRight }
