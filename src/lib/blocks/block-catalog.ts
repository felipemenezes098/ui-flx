import type { ComponentType } from 'react'

import type {
  BlockCategory,
  BlockCategoryRow,
  BlockImage,
  BlockItem,
  BlockManifest,
} from '@/lib/blocks/block-manifest-types'

import { bentoGridsCategory } from 'registry/blocks/bento-grids/catalog'
import { contentCategory } from 'registry/blocks/content/catalog'
import { ctaCategory } from 'registry/blocks/cta/catalog'
import { heroCategory } from 'registry/blocks/hero/catalog'
import { testimonialsCategory } from 'registry/blocks/testimonials/catalog'

export const categories: BlockCategoryRow[] = [
  heroCategory,
  contentCategory,
  ctaCategory,
  bentoGridsCategory,
  testimonialsCategory,
]

export const allManifests: BlockManifest[] = categories.flatMap((c) => c.blocks)

function manifestToBlockItem(m: BlockManifest): BlockItem {
  return {
    name: m.name,
    description: m.description,
    image: m.image,
    slug: m.slug,
    hasNew: m.hasNew,
    meta: m.meta,
  }
}

export type BlockCategoryWithConcept = BlockCategory & {
  concept: ComponentType
}

export const blockCategories: BlockCategoryWithConcept[] = categories.map(
  (cat) => ({
    slug: cat.slug,
    category: cat.category,
    description: cat.description,
    type: cat.type,
    hasNew: cat.hasNew,
    image: cat.image,
    concept: cat.concept,
    blocks: cat.blocks.map(manifestToBlockItem),
  }),
)

export const blocks: BlockCategory[] = categories.map((cat) => ({
  slug: cat.slug,
  category: cat.category,
  description: cat.description,
  type: cat.type,
  hasNew: cat.hasNew,
  image: cat.image,
  blocks: cat.blocks.map(manifestToBlockItem),
}))

export function getBlockBySlug(slug: string): BlockManifest | undefined {
  return allManifests.find((m) => m.slug === slug)
}

export type { BlockCategory, BlockItem, BlockImage, BlockManifest }
