'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { Separator } from '@/components/ui/separator'
import { blockCategories } from '@/lib/blocks/block-catalog'

import {
  NEW_BLOCKS_CATEGORY_SLUG,
  getPathnameCategory,
  isAllCategories,
  newBlocksCount,
  parseCategoryFilter,
} from '../lib/blocks-category'
import { allBlocksHref, categoryFilterHref } from '../lib/blocks-filter-url'
import {
  getAllBlocksCount,
  getCategoryBlockCount,
  getValidPresetSlug,
  isAllPresets,
} from '../lib/blocks-preset'
import { BlocksFilterChip } from './blocks-filter-chip'

const pathname = '/blocks'

export function BlocksNavigation() {
  const searchParams = useSearchParams()
  const pathnameCategory = getPathnameCategory(usePathname())
  const activeCategories =
    (pathnameCategory && [pathnameCategory]) ||
    parseCategoryFilter(searchParams.get('category'))
  const activePreset = getValidPresetSlug(searchParams.get('preset'))
  const presetIsAll = isAllPresets(activePreset)
  const categoryIsAll = isAllCategories(activeCategories)
  const isAllActive = categoryIsAll && presetIsAll

  return (
    <div className="no-scrollbar scroll-fade-x flex min-w-0 overflow-x-auto py-2">
      <div className="inline-flex w-max flex-nowrap items-center gap-1.5">
        <BlocksFilterChip
          href={allBlocksHref(pathname, searchParams)}
          active={isAllActive}
          label="All blocks"
          count={getAllBlocksCount()}
          className="shrink-0"
        />

        {newBlocksCount > 0 && (
          <BlocksFilterChip
            href={categoryFilterHref(
              pathname,
              searchParams,
              NEW_BLOCKS_CATEGORY_SLUG,
            )}
            active={activeCategories.includes(NEW_BLOCKS_CATEGORY_SLUG)}
            label="New"
            count={newBlocksCount}
            className="shrink-0"
          />
        )}

        <div className="flex shrink-0 items-center">
          <Separator orientation="vertical" className="!h-4" />
        </div>

        {blockCategories.map((block) => (
          <BlocksFilterChip
            key={block.slug}
            href={categoryFilterHref(pathname, searchParams, block.slug)}
            active={activeCategories.includes(block.slug)}
            label={block.category}
            count={getCategoryBlockCount(block.slug, activePreset)}
            className="shrink-0"
          />
        ))}
      </div>
    </div>
  )
}
