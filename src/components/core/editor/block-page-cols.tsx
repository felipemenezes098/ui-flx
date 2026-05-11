'use client'

import { motion } from 'motion/react'

import {
  BlockLiveBreadcrumb,
  useBlockLivePageNavOptional,
} from './block-live-breadcrumb'
import { useBlockLiveEditorOptional } from './block-live-editor'
import { cn } from '@/lib/utils'

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
  const { expanded } = useBlockLiveEditorOptional() ?? { expanded: false }
  return (
    <div
      className={cn(
        'flex flex-col-reverse gap-8 lg:flex-row lg:gap-10',
        expanded && 'lg:gap-0',
      )}
    >
      {children}
    </div>
  )
}

function BlockPageColsLeft({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const ctx = useBlockLiveEditorOptional()
  const nav = useBlockLivePageNavOptional()
  const expanded = ctx?.expanded ?? false

  const breadcrumb = nav ? (
    <BlockLiveBreadcrumb
      category={nav.category}
      slug={nav.slug}
      blockTitle={nav.blockTitle}
    />
  ) : null

  return (
    <>
      <motion.div
        className="relative hidden w-full shrink-0 lg:block lg:w-[380px]"
        style={{
          pointerEvents: expanded ? 'none' : undefined,
        }}
        variants={leftPanel}
        initial={false}
        animate={expanded ? 'collapsed' : 'open'}
      >
        <div className="sticky top-10 z-10 h-0">
          <div className="from-background via-background pointer-events-none absolute inset-x-0 top-0 h-30 bg-linear-to-b to-transparent" />
        </div>
        {breadcrumb}
        {children}
        <div className="sticky bottom-0 z-10 h-0">
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t to-transparent p-10" />
        </div>
      </motion.div>
      <div className="block lg:hidden">
        {breadcrumb}
        {children}
      </div>
    </>
  )
}

function BlockPageColsRight({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-w-0 flex-1">
      <div className="mt-3 lg:sticky lg:top-16 lg:mt-0">{children}</div>
    </div>
  )
}

export { BlockPageColsRoot, BlockPageColsLeft, BlockPageColsRight }
