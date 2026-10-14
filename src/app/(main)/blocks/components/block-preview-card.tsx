import type { BlockItem } from '@/lib/blocks/block-manifest-types'
import {
  GalleryCardBadge,
  GalleryCardMedia,
  GalleryCardThemeImage,
} from '@/components/core/gallery/gallery-card'
import { GalleryGridLink } from '@/components/core/gallery/gallery-grid'

import { BlockCopyPromptButton } from './block-copy-prompt-button'

export function BlockPreviewCard({
  categorySlug,
  subBlock,
  anchorId,
}: Readonly<{
  categorySlug: string
  subBlock: BlockItem
  anchorId?: string
}>) {
  return (
    <div className="relative">
      <GalleryGridLink
        href={`/blocks/${categorySlug}/${subBlock.slug}`}
        id={anchorId}
      >
        <GalleryCardMedia className="flex min-h-30 items-center justify-center rounded-xl">
          {subBlock.hasNew && (
            <GalleryCardBadge className="right-auto left-2" />
          )}
          <GalleryCardThemeImage src={subBlock.image} alt={subBlock.name} />
        </GalleryCardMedia>
      </GalleryGridLink>
      <div className="absolute top-2.5 right-2.5 z-10">
        <BlockCopyPromptButton slug={subBlock.slug} />
      </div>
    </div>
  )
}
