import { ShowcaseConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as showcase01Manifest } from './showcase-01/manifest'

export const showcaseCategory: BlockCategoryRow = {
  slug: 'showcase',
  category: 'Showcase',
  description: 'Showcase components to display information.',
  type: 'showcase',
  image: showcase01Manifest.image,
  concept: ShowcaseConcept,
  blocks: [showcase01Manifest],
}
