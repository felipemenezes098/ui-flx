'use client'

import Link from 'next/link'
import type { ComponentType } from 'react'
import { useState } from 'react'

import {
  CategoryPreviewCard,
  CategoryPreviewCardBadge,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardTitle,
} from '@/components/core/category-preview-card'
import { Button } from '@/components/ui/button'
import { FormsConcept } from '@/lib/patterns/pattern-concepts'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

type TeaserItem = {
  slug: string
  name: string
  href: string
  preview: ComponentType
  hasNew?: boolean
}

const formsTeaserItem: TeaserItem = {
  slug: 'forms',
  name: 'Forms',
  href: '/forms/react-hook-form',
  preview: FormsConcept,
  hasNew: true,
}

export function PatternTeaser() {
  const [isShown, setIsShown] = useState(false)
  const sorted: TeaserItem[] = [
    ...patternCategories.map((cat) => ({
      slug: cat.slug,
      name: cat.name,
      href: `/patterns/${cat.slug}`,
      preview: cat.preview,
      hasNew: cat.hasNew,
    })),
    formsTeaserItem,
  ].sort((a, b) => a.name.localeCompare(b.name))
  const visibleItems = isShown ? sorted : sorted.slice(0, 8)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <h2 className="text-foreground text-lg font-semibold tracking-tight">
            Patterns
          </h2>
          <span className="text-muted-foreground text-sm">
            {sorted.length} components
          </span>
        </div>
        <Button asChild variant="link" size="sm" className="bg-background">
          <Link href="/patterns">View all</Link>
        </Button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
          {visibleItems.map((item) => {
            const Concept = item.preview
            return (
              <Link key={item.slug} href={item.href} className="group">
                <CategoryPreviewCard>
                  <CategoryPreviewCardPreview className="aspect-square">
                    {item.hasNew && <CategoryPreviewCardBadge />}
                    <Concept />
                  </CategoryPreviewCardPreview>
                  <CategoryPreviewCardFooter>
                    <CategoryPreviewCardTitle>
                      {item.name}
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
