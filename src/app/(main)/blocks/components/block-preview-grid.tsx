import Link from 'next/link'

import type { BlockItem } from '@/lib/blocks/block-manifest-types'
import { cn } from '@/lib/utils'

import {
  BlockPreviewCard,
  BlockPreviewCardBadge,
  BlockPreviewCardFooter,
  BlockPreviewCardImage,
  BlockPreviewCardPreview,
  BlockPreviewCardTitle,
} from './block-preview-card'

export type BlockPreviewEntry = Readonly<{
  key: string
  categorySlug: string
  subBlock: BlockItem
}>

function BlockPreviewLink({
  categorySlug,
  subBlock,
  withScrollAnchor,
}: Readonly<{
  categorySlug: string
  subBlock: BlockItem
  withScrollAnchor?: boolean
}>) {
  return (
    <Link
      id={withScrollAnchor ? `${categorySlug}-${subBlock.slug}` : undefined}
      href={`/blocks/${categorySlug}/${subBlock.slug}`}
      className={cn(
        'group relative block w-full min-w-0',
        withScrollAnchor && 'scroll-mt-16',
      )}
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

function splitIntoColumns<T>(
  items: readonly T[],
  columnCount: number,
): T[][] {
  const columns = Array.from({ length: columnCount }, () => [] as T[])

  items.forEach((item, index) => {
    columns[index % columnCount].push(item)
  })

  return columns
}

function AlternatingColumnGrid({
  items,
  columnCount,
  className,
  withScrollAnchor,
}: Readonly<{
  items: readonly BlockPreviewEntry[]
  columnCount: number
  className?: string
  withScrollAnchor?: boolean
}>) {
  const columns = splitIntoColumns(items, columnCount)

  return (
    <div
      className={cn('grid gap-4', className)}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
      }}
    >
      {columns.map((columnItems, columnIndex) => (
        <div
          key={columnIndex}
          className="flex min-w-0 flex-col gap-4"
        >
          {columnItems.map(({ key, categorySlug, subBlock }) => (
            <BlockPreviewLink
              key={key}
              categorySlug={categorySlug}
              subBlock={subBlock}
              withScrollAnchor={withScrollAnchor}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export function BlockPreviewGrid({
  items,
  lgColumns,
  withScrollAnchor,
}: Readonly<{
  items: readonly BlockPreviewEntry[]
  lgColumns?: number
  withScrollAnchor?: boolean
}>) {
  return (
    <>
      <div className="flex flex-col gap-4 sm:hidden">
        {items.map(({ key, categorySlug, subBlock }) => (
          <BlockPreviewLink
            key={key}
            categorySlug={categorySlug}
            subBlock={subBlock}
            withScrollAnchor={withScrollAnchor}
          />
        ))}
      </div>
      <AlternatingColumnGrid
        items={items}
        columnCount={2}
        withScrollAnchor={withScrollAnchor}
        className={cn('hidden sm:grid', lgColumns && 'lg:hidden')}
      />
      {lgColumns && (
        <AlternatingColumnGrid
          items={items}
          columnCount={lgColumns}
          withScrollAnchor={withScrollAnchor}
          className="hidden lg:grid"
        />
      )}
    </>
  )
}
