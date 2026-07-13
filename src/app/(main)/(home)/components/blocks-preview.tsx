import Link from 'next/link'

import {
  GalleryCard,
  GalleryCardBadge,
  GalleryCardMedia,
  GalleryCardThemeImage,
} from '@/components/core/gallery/gallery-card'
import {
  GalleryFade,
  GalleryFadeFooter,
} from '@/components/core/gallery/gallery-fade'
import {
  GalleryGrid,
  GalleryGridLink,
} from '@/components/core/gallery/gallery-grid'
import { buttonVariants } from '@/components/ui/button'
import { blocks } from '@/lib/blocks/block-catalog'
import { cn } from '@/lib/utils'

const HOME_BLOCK_PREVIEW_COUNT = 4

const previewItems = blocks
  .flatMap((category) =>
    category.blocks.map((subBlock) => ({
      key: `${category.slug}-${subBlock.slug}`,
      categorySlug: category.slug,
      subBlock,
    })),
  )
  .slice(0, HOME_BLOCK_PREVIEW_COUNT)

export function BlocksPreview() {
  return (
    <GalleryFade>
      <GalleryGrid columns={2}>
        {previewItems.map(({ key, categorySlug, subBlock }) => (
          <GalleryGridLink
            key={key}
            href={`/blocks/${categorySlug}/${subBlock.slug}`}
          >
            <GalleryCard>
              <GalleryCardMedia className="flex min-h-30 items-center justify-center">
                {subBlock.hasNew && <GalleryCardBadge />}
                <GalleryCardThemeImage
                  src={subBlock.image}
                  alt={subBlock.name}
                />
              </GalleryCardMedia>
            </GalleryCard>
          </GalleryGridLink>
        ))}
      </GalleryGrid>

      <GalleryFadeFooter>
        <Link
          href="/blocks"
          className={cn(
            buttonVariants({
              variant: 'outline',
              size: 'sm',
              className: 'bg-background dark:bg-background hover:dark:bg-muted',
            }),
          )}
        >
          View all
        </Link>
      </GalleryFadeFooter>
    </GalleryFade>
  )
}
