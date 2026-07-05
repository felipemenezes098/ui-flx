import type { BlockItem } from '@/lib/blocks/block-manifest-types'
import {
  GalleryCard,
  GalleryCardBadge,
  GalleryCardFooter,
  GalleryCardMedia,
  GalleryCardThemeImage,
  GalleryCardTitle,
} from '@/components/core/gallery/gallery-card'
import { GalleryGrid, GalleryGridLink } from '@/components/core/gallery/gallery-grid'

export type BlockPreviewEntry = Readonly<{
  key: string
  categorySlug: string
  subBlock: BlockItem
}>

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
    <GalleryGrid columns={2} lgColumns={lgColumns}>
      {items.map(({ key, categorySlug, subBlock }) => (
        <GalleryGridLink
          key={key}
          href={`/blocks/${categorySlug}/${subBlock.slug}`}
          id={withScrollAnchor ? `${categorySlug}-${subBlock.slug}` : undefined}
        >
          <GalleryCard>
            <GalleryCardMedia className="flex min-h-30 items-center justify-center">
              {subBlock.hasNew && <GalleryCardBadge />}
              <GalleryCardThemeImage
                src={subBlock.image}
                alt={subBlock.name}
              />
            </GalleryCardMedia>
            <GalleryCardFooter>
              <GalleryCardTitle>{subBlock.name}</GalleryCardTitle>
            </GalleryCardFooter>
          </GalleryCard>
        </GalleryGridLink>
      ))}
    </GalleryGrid>
  )
}
