import { HeroConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as backgroundMediaManifest } from './background-media/manifest'
import { manifest as heroContentMediaManifest } from './hero-content-media/manifest'
import { manifest as heroHeadlinePreviewManifest } from './hero-headline-preview/manifest'
import { manifest as heroLogosCarouselManifest } from './hero-logos-carousel/manifest'
import { manifest as textBadgesManifest } from './text-badges/manifest'

export const heroCategory: BlockCategoryRow = {
  slug: 'hero',
  category: 'Hero',
  description: 'Components to display information in a hero section.',
  type: 'hero',
  image: textBadgesManifest.image,
  concept: HeroConcept,
  blocks: [
    backgroundMediaManifest,
    heroLogosCarouselManifest,
    heroContentMediaManifest,
    heroHeadlinePreviewManifest,
    textBadgesManifest,
  ],
}
