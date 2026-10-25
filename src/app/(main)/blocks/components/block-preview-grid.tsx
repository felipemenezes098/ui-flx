'use client'

import { useHydrated } from '@/hooks/use-hydrated'
import { useIsMobile } from '@/hooks/use-mobile'
import type { BlockItem } from '@/lib/blocks/block-manifest-types'

import { BlockPreviewCard } from './block-preview-card'

export type BlockPreviewEntry = Readonly<{
  key: string
  categorySlug: string
  subBlock: BlockItem
}>

function splitIntoColumns<T>(items: readonly T[], columnCount: number): T[][] {
  const columns = Array.from({ length: columnCount }, () => [] as T[])
  items.forEach((item, index) => {
    columns[index % columnCount].push(item)
  })
  return columns
}

export function BlockPreviewGrid({
  items,
  withScrollAnchor,
}: Readonly<{
  items: readonly BlockPreviewEntry[]
  withScrollAnchor?: boolean
}>) {
  const hydrated = useHydrated()
  const isMobile = useIsMobile()
  const isGrid = hydrated && !isMobile

  const cards = items.map(({ key, categorySlug, subBlock }) => (
    <BlockPreviewCard
      key={key}
      categorySlug={categorySlug}
      subBlock={subBlock}
      anchorId={
        (withScrollAnchor && `${categorySlug}-${subBlock.slug}`) || undefined
      }
    />
  ))

  return (
    <div className="mx-auto w-full max-w-[880px]">
      {!isGrid && <div className="flex flex-col gap-10">{cards}</div>}
      {isGrid && (
        <div className="grid grid-cols-2 gap-x-6">
          {splitIntoColumns(cards, 2).map((column, index) => (
            <div key={index} className="flex min-w-0 flex-col gap-6">
              {column}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
