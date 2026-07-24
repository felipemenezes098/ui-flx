'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { blockCategories, themes } from '@/lib/blocks/block-catalog'

import { isAllCategories, parseCategoryFilter } from '../lib/blocks-category'
import {
  allBlocksHref,
  categoryFilterHref,
  themeFilterHref,
} from '../lib/blocks-filter-url'
import {
  getAllBlocksCount,
  getCategoryBlockCount,
  getThemeBlockCount,
  getValidThemeSlug,
  isAllThemes,
} from '../lib/blocks-theme'
import { BlocksFilterChip } from './blocks-filter-chip'

export function BlocksNavigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeCategories = parseCategoryFilter(searchParams.get('category'))
  const activeTheme = getValidThemeSlug(searchParams.get('theme'))
  const themeIsAll = isAllThemes(activeTheme)
  const categoryIsAll = isAllCategories(activeCategories)
  const isAllActive = categoryIsAll && themeIsAll

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

        {themes.map((theme) => (
          <BlocksFilterChip
            key={theme.slug}
            href={themeFilterHref(
              pathname,
              searchParams,
              theme.slug,
              activeTheme,
            )}
            active={activeTheme === theme.slug}
            label={theme.name}
            count={getThemeBlockCount(theme.slug)}
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
            count={getCategoryBlockCount(block.slug, activeTheme)}
            className="shrink-0"
          />
        ))}
      </div>
    </div>
  )
}
