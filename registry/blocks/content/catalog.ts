import { ContentConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as content01Manifest } from './content-01/manifest'
import { manifest as content02Manifest } from './content-02/manifest'
import { manifest as content03Manifest } from './content-03/manifest'
import { manifest as content04Manifest } from './content-04/manifest'
import { manifest as content05Manifest } from './content-05/manifest'
import { manifest as content06Manifest } from './content-06/manifest'
import { manifest as content07Manifest } from './content-07/manifest'
import { manifest as content09Manifest } from './content-09/manifest'
import { manifest as content10Manifest } from './content-10/manifest'
import { manifest as content11Manifest } from './content-11/manifest'

export const contentCategory: BlockCategoryRow = {
  slug: 'content',
  category: 'Content',
  description: 'Content components to display information in an organized way.',
  type: 'content',
  image: content03Manifest.image,
  concept: ContentConcept,
  blocks: [
    content01Manifest,
    content02Manifest,
    content03Manifest,
    content04Manifest,
    content05Manifest,
    content06Manifest,
    content07Manifest,
    content09Manifest,
    content10Manifest,
    content11Manifest,
  ],
}
