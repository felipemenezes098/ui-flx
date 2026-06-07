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

export function BlocksPreview() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
  )
}
