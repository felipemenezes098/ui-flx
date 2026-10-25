import { BentoGridConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as bentoGrids01Manifest } from './bento-grids-01/manifest'
import { manifest as bentoGrids02Manifest } from './bento-grids-02/manifest'
import { manifest as bentoGrids03Manifest } from './bento-grids-03/manifest'
import { manifest as bentoGrids04Manifest } from './bento-grids-04/manifest'
import { manifest as bentoGrids05Manifest } from './bento-grids-05/manifest'
import { manifest as bentoGrids06Manifest } from './bento-grids-06/manifest'

export const bentoGridsCategory: BlockCategoryRow = {
  slug: 'bento-grids',
  category: 'Bento grids',
  description:
    'Bento-style grids with a prominent primary tile and supporting cards.',
  type: 'bento-grids',
  image: bentoGrids01Manifest.image,
  concept: BentoGridConcept,
  blocks: [
    bentoGrids01Manifest,
    bentoGrids02Manifest,
    bentoGrids03Manifest,
    bentoGrids04Manifest,
    bentoGrids05Manifest,
    bentoGrids06Manifest,
  ],
}
