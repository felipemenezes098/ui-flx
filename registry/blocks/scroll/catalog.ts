import { ScrollConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as stickyScrollMediaManifest } from './sticky-scroll-media/manifest'

export const scrollCategory: BlockCategoryRow = {
  slug: 'scroll',
  category: 'Scroll',
  description: 'Scroll-based interactive blocks with animations.',
  type: 'scroll',
  hasNew: true,
  image: stickyScrollMediaManifest.image,
  concept: ScrollConcept,
  blocks: [stickyScrollMediaManifest],
}
