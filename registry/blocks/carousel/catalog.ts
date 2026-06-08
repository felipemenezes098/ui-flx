import { CarouselConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as carouselCardsManifest } from './carousel-cards/manifest'
import { manifest as carouselFocusManifest } from './carousel-focus/manifest'
import { manifest as carouselMediaManifest } from './carousel-media/manifest'

export const carouselCategory: BlockCategoryRow = {
  slug: 'carousel',
  category: 'Carousel',
  description: 'A carousel that pauses on item hover and reveals title.',
  type: 'carousel',
  image: carouselFocusManifest.image,
  concept: CarouselConcept,
  blocks: [carouselFocusManifest, carouselMediaManifest, carouselCardsManifest],
}
