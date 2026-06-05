import { BentoGridConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as primaryItemGridManifest } from './primary-item-grid/manifest'

export const bentoGridsCategory: BlockCategoryRow = {
  slug: 'bento-grids',
  category: 'Bento grids',
  description: 'Bento-style grids with a prominent primary tile and supporting cards.',
  type: 'bento-grids',
  image: primaryItemGridManifest.image,
  concept: BentoGridConcept,
  blocks: [primaryItemGridManifest],
}
