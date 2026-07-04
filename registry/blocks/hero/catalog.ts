import { HeroConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as hero01Manifest } from './hero-01/manifest'
import { manifest as hero02Manifest } from './hero-02/manifest'
import { manifest as hero06Manifest } from './hero-06/manifest'

export const heroCategory: BlockCategoryRow = {
  slug: 'hero',
  category: 'Hero',
  description: 'Components to display information in a hero section.',
  type: 'hero',
  image: hero01Manifest.image,
  concept: HeroConcept,
  blocks: [hero01Manifest, hero02Manifest, hero06Manifest],
}
