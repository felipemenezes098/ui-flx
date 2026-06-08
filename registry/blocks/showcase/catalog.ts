import { ShowcaseConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as showcaseGridMediaCardsManifest } from './grid-media-cards/manifest'

export const showcaseCategory: BlockCategoryRow = {
  slug: 'showcase',
  category: 'Showcase',
  description: 'Showcase components to display information.',
  type: 'showcase',
  image: showcaseGridMediaCardsManifest.image,
  concept: ShowcaseConcept,
  blocks: [showcaseGridMediaCardsManifest],
}
