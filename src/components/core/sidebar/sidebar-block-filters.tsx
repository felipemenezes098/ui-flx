'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import {
  NEW_BLOCKS_CATEGORY_SLUG,
  isAllCategories,
  newBlocksCount,
} from '@/app/(main)/blocks/lib/blocks-category'
import {
  allBlocksHref,
  categoryFilterHref,
} from '@/app/(main)/blocks/lib/blocks-filter-url'
import { useBlocksNavCategories } from '@/app/(main)/blocks/hooks/use-blocks-nav-category'
import { blockCategories } from '@/lib/blocks/block-catalog'

import { SidebarLink } from './sidebar-link'
import { SidebarSection } from './sidebar-section'

const blocksPath = '/blocks'

export function SidebarBlockFilters() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const navCategories = useBlocksNavCategories()

  if (pathname !== '/' && pathname.split('/')[1] !== 'blocks') {
    return null
  }

  const activeCategories = navCategories ?? []
  const categoryIsAll = isAllCategories(activeCategories)

  return (
    <div className="flex flex-col gap-8">
      <SidebarSection label="Browse">
        <SidebarLink
          href={allBlocksHref(blocksPath, searchParams)}
          active={pathname === blocksPath && categoryIsAll}
        >
          All blocks
        </SidebarLink>
        {newBlocksCount > 0 && (
          <SidebarLink
            href={categoryFilterHref(
              blocksPath,
              searchParams,
              NEW_BLOCKS_CATEGORY_SLUG,
            )}
            active={activeCategories.includes(NEW_BLOCKS_CATEGORY_SLUG)}
          >
            New
          </SidebarLink>
        )}
      </SidebarSection>
      <SidebarSection label="Categories">
        {blockCategories.map((block) => (
          <SidebarLink
            key={block.slug}
            href={categoryFilterHref(blocksPath, searchParams, block.slug)}
            active={activeCategories.includes(block.slug)}
          >
            {block.category}
          </SidebarLink>
        ))}
      </SidebarSection>
    </div>
  )
}
