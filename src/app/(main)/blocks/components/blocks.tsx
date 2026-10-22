'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { LayoutGridIcon } from 'lucide-react'

import { BlockPreviewGrid } from './block-preview-grid'
import { BlocksNavigation } from './blocks-navigation'
import {
  isAllCategories,
  isNewBlocksFilter,
  parseCategoryFilter,
} from '../lib/blocks-category'
import { filterBlocksByPreset, getValidPresetSlug } from '../lib/blocks-preset'
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
  const activePreset = getValidPresetSlug(searchParams.get('preset'))

  const items = useMemo(() => {
    const byPreset = filterBlocksByPreset(blocks, activePreset)

    if (isNewBlocksFilter(activeCategories)) {
      return byPreset.flatMap((category) =>
        category.blocks
          .filter((subBlock) => subBlock.hasNew)
          .map((subBlock) => ({
            key: `${category.slug}-${subBlock.slug}`,
            categorySlug: category.slug,
            subBlock,
          })),
      )
    }

    const categories = byPreset.filter(
      (cat) =>
        isAllCategories(activeCategories) ||
        activeCategories.includes(cat.slug),
    )

    return categories.flatMap((category) =>
      category.blocks.map((subBlock) => ({
        key: `${category.slug}-${subBlock.slug}`,
        categorySlug: category.slug,
        subBlock,
      })),
    )
  }, [activePreset, activeCategories])

  return (
    <div className="space-y-4">
      <div className="bg-background sticky top-14 z-30 w-full md:hidden">
        <BlocksNavigation />
      </div>

      {items.length === 0 && (
        <Empty className="border-border min-h-64 border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <LayoutGridIcon />
            </EmptyMedia>
            <EmptyTitle>No blocks found</EmptyTitle>
            <EmptyDescription>
              No blocks match this filter combination. Try another preset or
              category.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}

      {items.length > 0 && <BlockPreviewGrid withScrollAnchor items={items} />}
    </div>
  )
}
