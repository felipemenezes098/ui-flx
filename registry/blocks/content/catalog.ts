import { ContentConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as content02Manifest } from './content-02/manifest'
import { manifest as content04Manifest } from './content-04/manifest'
import { manifest as content06Manifest } from './content-06/manifest'
import { manifest as content07Manifest } from './content-07/manifest'
import { manifest as content11Manifest } from './content-11/manifest'
import { manifest as content12Manifest } from './content-12/manifest'
import { manifest as content13Manifest } from './content-13/manifest'
import { manifest as content14Manifest } from './content-14/manifest'
import { manifest as content15Manifest } from './content-15/manifest'
import { manifest as content16Manifest } from './content-16/manifest'
import { manifest as content17Manifest } from './content-17/manifest'
import { manifest as content18Manifest } from './content-18/manifest'
import { manifest as content19Manifest } from './content-19/manifest'

export const contentCategory: BlockCategoryRow = {
  slug: 'content',
  category: 'Content',
  description: 'Content components to display information in an organized way.',
  type: 'content',
  image: content02Manifest.image,
  concept: ContentConcept,
  blocks: [
    content02Manifest,
    content04Manifest,
    content06Manifest,
    content07Manifest,
    content11Manifest,
    content12Manifest,
    content13Manifest,
    content14Manifest,
    content15Manifest,
    content16Manifest,
    content17Manifest,
    content18Manifest,
    content19Manifest,
  ],
}
