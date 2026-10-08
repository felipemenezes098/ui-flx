import { ScrollConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as scroll01Manifest } from './scroll-01/manifest'

export const scrollCategory: BlockCategoryRow = {
  slug: 'scroll',
  category: 'Scroll',
  description: 'Sticky media that changes as you scroll through text.',
  type: 'scroll',
  image: scroll01Manifest.image,
  concept: ScrollConcept,
  blocks: [scroll01Manifest],
}
