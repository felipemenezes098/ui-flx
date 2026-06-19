import { BentoGridConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as bentoGrids01Manifest } from './bento-grids-01/manifest'

export const bentoGridsCategory: BlockCategoryRow = {
  slug: 'bento-grids',
  category: 'Bento grids',
  description: 'Bento-style grids with a prominent primary tile and supporting cards.',
  type: 'bento-grids',
  image: bentoGrids01Manifest.image,
  concept: BentoGridConcept,
  blocks: [bentoGrids01Manifest],
}
