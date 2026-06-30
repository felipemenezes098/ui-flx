'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'

import {
  BlockPreviewCard,
  BlockPreviewCardBadge,
  BlockPreviewCardFooter,
  BlockPreviewCardImage,
  BlockPreviewCardPreview,
  BlockPreviewCardTitle,
} from './block-preview-card'
import { BlocksNavigation } from './blocks-navigation'
import {
  getValidBlocksCategorySlug,
  isAllBlocksCategory,
} from '../lib/blocks-category'
import { blocks } from '@/lib/blocks/block-catalog'
import type { BlockItem } from '@/lib/blocks/block-manifest-types'
import { cn } from '@/lib/utils'

function BlockPreviewLink({
  categorySlug,
  subBlock,
}: Readonly<{
  categorySlug: string
  subBlock: BlockItem
}>) {
  return (
    <Link
      id={`${categorySlug}-${subBlock.slug}`}
      href={`/blocks/${categorySlug}/${subBlock.slug}`}
      className="group relative mb-4 block w-full min-w-0 scroll-mt-16 break-inside-avoid"
    >
      <BlockPreviewCard>
        <BlockPreviewCardPreview className="flex min-h-30 items-center justify-center">
          {subBlock.hasNew && <BlockPreviewCardBadge />}
          <BlockPreviewCardImage image={subBlock.image} alt={subBlock.name} />
        </BlockPreviewCardPreview>
        <BlockPreviewCardFooter>
          <BlockPreviewCardTitle>{subBlock.name}</BlockPreviewCardTitle>
        </BlockPreviewCardFooter>
      </BlockPreviewCard>
    </Link>
  )
}

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
          <div className="columns-1 gap-4 sm:columns-3">
            {blocks.flatMap((category) =>
              category.blocks.map((subBlock) => (
                <BlockPreviewLink
                  key={`${category.slug}-${subBlock.slug}`}
                  categorySlug={category.slug}
                  subBlock={subBlock}
                />
              )),
            )}
          </div>
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
              <div className="columns-1 gap-4 sm:columns-3">
                {block.blocks.map((subBlock) => (
                  <BlockPreviewLink
                    key={subBlock.slug}
                    categorySlug={block.slug}
                    subBlock={subBlock}
                  />
                ))}
              </div>
            </div>
          )
        })}
    </div>
  )
}
