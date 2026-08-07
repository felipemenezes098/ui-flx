import { FeatureConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as feature01Manifest } from './feature-01/manifest'
import { manifest as feature02Manifest } from './feature-02/manifest'
import { manifest as feature03Manifest } from './feature-03/manifest'

export const featureCategory: BlockCategoryRow = {
  slug: 'feature',
  category: 'Feature',
  description: 'Feature sections to explain product capabilities.',
  type: 'feature',
  image: feature01Manifest.image,
  concept: FeatureConcept,
  blocks: [feature01Manifest, feature02Manifest, feature03Manifest],
}
