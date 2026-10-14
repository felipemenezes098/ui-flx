'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { isAllCategories } from '@/app/(main)/blocks/lib/blocks-category'
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
    <SidebarSection label="Categories">
      <SidebarLink
        href={allBlocksHref(blocksPath, searchParams)}
        active={pathname === blocksPath && categoryIsAll}
      >
        All blocks
      </SidebarLink>
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
  )
}
