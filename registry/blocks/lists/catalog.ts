import { ListsConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as lists01Manifest } from './lists-01/manifest'
import { manifest as lists02Manifest } from './lists-02/manifest'

export const listsCategory: BlockCategoryRow = {
  slug: 'lists',
  category: 'Lists',
  description:
    'Lists and detail rows for projects, roles, articles and labelled facts.',
  type: 'lists',
  image: lists01Manifest.image,
  concept: ListsConcept,
  blocks: [lists01Manifest, lists02Manifest],
}
