'use client'

import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'

import { BlockPreviewGrid } from './block-preview-grid'
import { BlocksNavigation } from './blocks-navigation'
import {
  getValidBlocksCategorySlug,
  isAllBlocksCategory,
} from '../lib/blocks-category'
import { blocks } from '@/lib/blocks/block-catalog'
import { cn } from '@/lib/utils'

export function Blocks() {
  const searchParams = useSearchParams()

  const activeTab = getValidBlocksCategorySlug(searchParams.get('category'))

  const visitedRef = useRef<Set<string>>(new Set())
  visitedRef.current.add(activeTab)

  const showAll = isAllBlocksCategory(activeTab)

  return (
    <div className="space-y-6">
      <div className="bg-background sticky top-14 z-30 w-full lg:hidden">
        <BlocksNavigation />
      </div>
      {showAll && (
        <div role="tabpanel" aria-hidden={false}>
          <BlockPreviewGrid
            withScrollAnchor
            items={blocks.flatMap((category) =>
              category.blocks.map((subBlock) => ({
                key: `${category.slug}-${subBlock.slug}`,
                categorySlug: category.slug,
                subBlock,
              })),
            )}
          />
        </div>
      )}
      {!showAll &&
        blocks.map((block) => {
          if (!visitedRef.current.has(block.slug)) return null
          const isActive = activeTab === block.slug
          return (
            <div
              key={block.slug}
              className={cn(
                'transition-opacity duration-300',
                isActive ? 'opacity-100' : 'hidden opacity-0',
              )}
              role="tabpanel"
              aria-hidden={!isActive}
            >
              <BlockPreviewGrid
                withScrollAnchor
                items={block.blocks.map((subBlock) => ({
                  key: subBlock.slug,
                  categorySlug: block.slug,
                  subBlock,
                }))}
              />
            </div>
          )
        })}
    </div>
  )
}
