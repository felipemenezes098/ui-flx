'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { LayoutGridIcon } from 'lucide-react'

import { BlockPreviewGrid } from './block-preview-grid'
import { BlocksNavigation } from './blocks-navigation'
import {
  isAllCategories,
  parseCategoryFilter,
} from '../lib/blocks-category'
import {
  filterBlocksByTheme,
  getValidThemeSlug,
} from '../lib/blocks-theme'
import { blocks } from '@/lib/blocks/block-catalog'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function Blocks() {
  const searchParams = useSearchParams()

  const activeCategories = parseCategoryFilter(searchParams.get('category'))
  const activeTheme = getValidThemeSlug(searchParams.get('theme'))

  const items = useMemo(() => {
    const byTheme = filterBlocksByTheme(blocks, activeTheme)
    const categories = isAllCategories(activeCategories)
      ? byTheme
      : byTheme.filter((cat) => activeCategories.includes(cat.slug))

    return categories.flatMap((category) =>
      category.blocks.map((subBlock) => ({
        key: `${category.slug}-${subBlock.slug}`,
        categorySlug: category.slug,
        subBlock,
      })),
    )
  }, [activeTheme, activeCategories])

  return (
    <div className="space-y-4">
      <div className="bg-background sticky top-14 z-30 w-full lg:hidden">
        <BlocksNavigation />
      </div>

      {items.length === 0 ? (
        <Empty className="border-border min-h-64 border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <LayoutGridIcon />
            </EmptyMedia>
            <EmptyTitle>No blocks found</EmptyTitle>
            <EmptyDescription>
              No blocks match this filter combination. Try another theme or
              category.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <BlockPreviewGrid withScrollAnchor items={items} />
      )}
    </div>
  )
}
