'use client'

import type { ComponentType } from 'react'
import Link from 'next/link'

import {
  CategoryPreviewCard,
  CategoryPreviewCardBadge,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardSublabel,
  CategoryPreviewCardTitle,
} from '@/components/core/category-preview-card'
import { blockCategories } from '@/lib/blocks/block-catalog'
import { cn } from '@/lib/utils'

function CategoryCard({
  name,
  href,
  concept: Concept,
  hasNew,
  className,
  sublabel,
}: Readonly<{
  name: string
  href: string
  concept: ComponentType
  hasNew?: boolean
  className: string
  sublabel?: string
}>) {
  return (
    <Link href={href} className="group">
      <CategoryPreviewCard>
        <CategoryPreviewCardPreview className={cn('min-h-45', className)}>
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

export function BlocksPreview() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
      {blockCategories.map((cat) => (
        <CategoryCard
          key={cat.slug}
          name={cat.category}
          href={`/blocks?category=${cat.slug}`}
          concept={cat.concept}
          hasNew={cat.hasNew}
          className="aspect-video"
          sublabel={`${cat.blocks.length} ${cat.blocks.length === 1 ? 'block' : 'blocks'}`}
        />
      ))}
    </div>
  )
}
