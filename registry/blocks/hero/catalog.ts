import { HeroConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as hero01Manifest } from './hero-01/manifest'
import { manifest as hero02Manifest } from './hero-02/manifest'
import { manifest as hero03Manifest } from './hero-03/manifest'
import { manifest as hero04Manifest } from './hero-04/manifest'
import { manifest as hero05Manifest } from './hero-05/manifest'
import { manifest as hero06Manifest } from './hero-06/manifest'
import { manifest as hero07Manifest } from './hero-07/manifest'

export const heroCategory: BlockCategoryRow = {
  slug: 'hero',
  category: 'Hero',
  description: 'Components to display information in a hero section.',
  type: 'hero',
  image: hero01Manifest.image,
  concept: HeroConcept,
  blocks: [
    hero01Manifest,
    hero02Manifest,
    hero03Manifest,
    hero04Manifest,
    hero05Manifest,
    hero06Manifest,
    hero07Manifest,
  ],
}
