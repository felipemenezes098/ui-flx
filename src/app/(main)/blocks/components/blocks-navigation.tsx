'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { blockCategories, blockPresets } from '@/lib/blocks/block-catalog'

import { isAllCategories, parseCategoryFilter } from '../lib/blocks-category'
import {
  allBlocksHref,
  categoryFilterHref,
  presetFilterHref,
} from '../lib/blocks-filter-url'
import {
  getAllBlocksCount,
  getCategoryBlockCount,
  getPresetBlockCount,
  getValidPresetSlug,
  isAllPresets,
} from '../lib/blocks-preset'
import { BlocksFilterChip } from './blocks-filter-chip'

export function BlocksNavigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeCategories = parseCategoryFilter(searchParams.get('category'))
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

        {blockPresets.map((preset) => (
          <BlocksFilterChip
            key={preset.id}
            href={presetFilterHref(
              pathname,
              searchParams,
              preset.id,
              activePreset,
            )}
            active={activePreset === preset.id}
            label={preset.name}
            count={getPresetBlockCount(preset.id)}
            className="shrink-0"
          />
        ))}

        {blockCategories.map((block) => (
          <BlocksFilterChip
            key={block.slug}
            href={categoryFilterHref(
              pathname,
              searchParams,
              block.slug,
              activeCategories,
            )}
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
