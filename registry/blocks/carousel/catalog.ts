import { CarouselConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as carousel01Manifest } from './carousel-01/manifest'
import { manifest as carousel02Manifest } from './carousel-02/manifest'
import { manifest as carousel03Manifest } from './carousel-03/manifest'

export const carouselCategory: BlockCategoryRow = {
  slug: 'carousel',
  category: 'Carousel',
  description: 'A carousel that pauses on item hover and reveals title.',
  type: 'carousel',
  image: carousel01Manifest.image,
  concept: CarouselConcept,
  blocks: [carousel01Manifest, carousel02Manifest, carousel03Manifest],
}
