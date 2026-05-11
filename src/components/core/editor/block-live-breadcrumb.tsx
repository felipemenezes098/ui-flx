'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { categories } from '@/lib/catalog'
import { cn } from '@/lib/utils'

export type BlockLivePageNavValue = {
  category: string
  slug: string
  blockTitle?: string
}

const BlockLivePageNavContext =
  React.createContext<BlockLivePageNavValue | null>(null)

export function BlockLivePageNavProvider({
  value,
  children,
}: Readonly<{
  value: BlockLivePageNavValue
  children: React.ReactNode
}>) {
  return (
    <BlockLivePageNavContext.Provider value={value}>
      {children}
    </BlockLivePageNavContext.Provider>
  )
}

export function useBlockLivePageNavOptional(): BlockLivePageNavValue | null {
  return React.useContext(BlockLivePageNavContext)
}

type BreadcrumbProps = {
  category: string
  slug: string
  blockTitle?: string
  className?: string
}

function categoryLabelFromSlug(slug: string) {
  return categories.find((c) => c.slug === slug)?.category ?? slug
}

function titleCaseFromSlug(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/** Breadcrumb for live block MDX pages; intended only inside `BlockPageColsLeft`. */
export function BlockLiveBreadcrumb({
  category,
  slug,
  blockTitle,
  className,
}: Readonly<BreadcrumbProps>) {
  const current = blockTitle ?? titleCaseFromSlug(slug)

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'text-muted-foreground bg-background sticky top-14 z-20 mb-3 flex flex-wrap items-center gap-1 py-2 text-sm lg:top-16 lg:bg-transparent',
        className,
      )}
    >
      <Link href="/blocks" className="hover:text-foreground transition-colors">
        Blocks
      </Link>
      <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
      <Link
        href={`/blocks?category=${encodeURIComponent(category)}`}
        className="hover:text-foreground transition-colors"
      >
        {categoryLabelFromSlug(category)}
      </Link>
      <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
      <span className="text-foreground font-medium" aria-current="page">
        {current}
      </span>
    </nav>
  )
}
