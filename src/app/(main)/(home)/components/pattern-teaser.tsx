'use client'

import Link from 'next/link'

import {
  CategoryPreviewCard,
  CategoryPreviewCardBadge,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardTitle,
} from '@/components/core/category-preview-card'
import { Button } from '@/components/ui/button'
import { patternCategories } from '@/lib/patterns/patterns-catalog'
import { useState } from 'react'

export function PatternTeaser() {
  const [isShown, setIsShown] = useState(false)
  const sorted = [...patternCategories].sort((a, b) =>
    a.name.localeCompare(b.name),
  )
  const visibleItems = isShown ? sorted : sorted.slice(0, 8)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <h2 className="text-foreground text-lg font-semibold tracking-tight">
            Patterns
          </h2>
          <span className="text-muted-foreground text-sm">
            {patternCategories.length} components
          </span>
        </div>
        <Button asChild variant="link" size="sm" className="bg-background">
          <Link href="/patterns">View all</Link>
        </Button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4">
          {visibleItems.map((cat) => {
            const Concept = cat.preview
            return (
              <Link
                key={cat.slug}
                href={`/patterns/${cat.slug}`}
                className="group"
              >
                <CategoryPreviewCard>
                  <CategoryPreviewCardPreview className="aspect-square">
                    {cat.hasNew && <CategoryPreviewCardBadge />}
                    <Concept />
                  </CategoryPreviewCardPreview>
                  <CategoryPreviewCardFooter>
                    <CategoryPreviewCardTitle>
                      {cat.name}
                    </CategoryPreviewCardTitle>
                  </CategoryPreviewCardFooter>
                </CategoryPreviewCard>
              </Link>
            )
          })}
        </div>
        {!isShown && (
          <div className="from-background absolute inset-x-0 -bottom-10 flex h-40 items-end justify-center bg-gradient-to-t from-30% to-transparent pb-10">
            <Button
              onClick={() => setIsShown(true)}
              variant="outline"
              size="sm"
              className="bg-background dark:bg-background hover:dark:bg-muted"
            >
              Show all patterns
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
