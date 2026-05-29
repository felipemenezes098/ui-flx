'use client'

import type { ComponentType } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import {
  CategoryPreviewCard,
  CategoryPreviewCardBadge,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardSublabel,
  CategoryPreviewCardTitle,
} from '@/components/core/category-preview-card'
import { blockCategories } from '@/lib/catalog'
import { patternCategories } from '@/lib/patterns-catalog'

function SectionHeader({
  label,
  count,
  countLabel,
  href,
  showViewAll = true,
}: Readonly<{
  label: string
  count: number
  countLabel: string
  href: string
  showViewAll?: boolean
}>) {
  return (
    <div className="flex items-baseline justify-between border-b pb-4">
      <div className="flex items-baseline gap-3">
        <h2 className="text-foreground text-lg font-semibold tracking-tight">
          {label}
        </h2>
        <span className="text-muted-foreground text-sm">
          {count} {countLabel}
        </span>
      </div>
      {showViewAll && (
        <Link
          href={href}
          className="text-muted-foreground hover:text-foreground group flex items-center gap-1 text-sm transition-colors"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  )
}

function CategoryCard({
  name,
  href,
  concept: Concept,
  hasNew,
  aspectClass,
  sublabel,
}: Readonly<{
  name: string
  href: string
  concept: ComponentType
  hasNew?: boolean
  aspectClass: string
  sublabel?: string
}>) {
  return (
    <Link href={href} className="group">
      <CategoryPreviewCard>
        <CategoryPreviewCardPreview className={aspectClass}>
          {hasNew && <CategoryPreviewCardBadge />}
          <Concept />
        </CategoryPreviewCardPreview>
        <CategoryPreviewCardFooter>
          <CategoryPreviewCardTitle>{name}</CategoryPreviewCardTitle>
          {sublabel && (
            <CategoryPreviewCardSublabel>
              {sublabel}
            </CategoryPreviewCardSublabel>
          )}
        </CategoryPreviewCardFooter>
      </CategoryPreviewCard>
    </Link>
  )
}

export function Preview() {
  const sortedPatternCategories = [...patternCategories].sort((a, b) =>
    a.name.localeCompare(b.name),
  )

  const totalPatterns = patternCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  )
  const totalBlocks = blockCategories.reduce(
    (acc, cat) => acc + cat.blocks.length,
    0,
  )

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <SectionHeader
          label="Patterns"
          count={totalPatterns}
          countLabel="components"
          href="/patterns"
          showViewAll={false}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
          {sortedPatternCategories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              name={cat.name}
              href={`/patterns/${cat.slug}`}
              concept={cat.preview}
              aspectClass="aspect-square"
              hasNew={cat.hasNew}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <SectionHeader
          label="Blocks"
          count={totalBlocks}
          countLabel="blocks"
          href="/blocks"
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {blockCategories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              name={cat.category}
              href={`/blocks?category=${cat.slug}`}
              concept={cat.concept}
              hasNew={cat.hasNew}
              aspectClass="aspect-video"
              sublabel={`${cat.blocks.length} ${cat.blocks.length === 1 ? 'block' : 'blocks'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
