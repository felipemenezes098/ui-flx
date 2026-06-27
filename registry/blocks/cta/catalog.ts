import { CtaConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as cta01Manifest } from './cta-01/manifest'

export const ctaCategory: BlockCategoryRow = {
  slug: 'cta',
  category: 'Call to Action',
  description: 'Call-to-action sections to drive users toward a next step.',
  type: 'cta',
  image: cta01Manifest.image,
  concept: CtaConcept,
  blocks: [cta01Manifest],
}
