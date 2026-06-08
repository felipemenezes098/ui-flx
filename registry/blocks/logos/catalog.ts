import { LogosConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as logoMarqueeManifest } from './logo-marquee/manifest'

export const logosCategory: BlockCategoryRow = {
  slug: 'logos',
  category: 'Logos',
  description: 'Minimalist logo carousels with auto-scroll and edge fade.',
  type: 'logos',
  image: logoMarqueeManifest.image,
  concept: LogosConcept,
  blocks: [logoMarqueeManifest],
}
