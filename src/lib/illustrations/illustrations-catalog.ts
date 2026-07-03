export type {
  IllustrationSpan,
  IllustrationSize,
  IllustrationItem,
  IllustrationCategory,
} from '@/lib/illustrations/illustration-types'

import { sceneCategory } from 'registry/illustrations/scene/catalog'
import { spotCategory } from 'registry/illustrations/spot/catalog'

import type {
  IllustrationCategory,
  IllustrationItem,
} from '@/lib/illustrations/illustration-types'

export const illustrationCategories: IllustrationCategory[] = [
  spotCategory,
  sceneCategory,
]

export const allIllustrations = illustrationCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
  })),
)

export type IllustrationCatalogEntry = (typeof allIllustrations)[number]

export function getCategoryBySlug(
  slug: string,
): IllustrationCategory | undefined {
  return illustrationCategories.find((c) => c.slug === slug)
}

export function getIllustrationBySlug(
  categorySlug: string,
  illustrationSlug: string,
): IllustrationItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find(
    (c) => c.slug === illustrationSlug,
  )
}
