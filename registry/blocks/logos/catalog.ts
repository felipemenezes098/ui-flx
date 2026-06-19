import { LogosConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as logos01Manifest } from './logos-01/manifest'

export const logosCategory: BlockCategoryRow = {
  slug: 'logos',
  category: 'Logos',
  description: 'Minimalist logo carousels with auto-scroll and edge fade.',
  type: 'logos',
  image: logos01Manifest.image,
  concept: LogosConcept,
  blocks: [logos01Manifest],
}
