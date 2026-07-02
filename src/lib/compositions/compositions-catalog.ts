export type {
  CompositionGridColumns,
  CompositionItem,
  CompositionCategory,
} from '@/lib/compositions/composition-types'

import { dashboardCategory } from 'registry/compositions/dashboard/catalog'

import type {
  CompositionCategory,
  CompositionItem,
} from '@/lib/compositions/composition-types'

export const compositionCategories: CompositionCategory[] = [dashboardCategory]

export const allCompositions = compositionCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
  })),
)

export type CompositionCatalogEntry = (typeof allCompositions)[number]

export function getCategoryBySlug(
  slug: string,
): CompositionCategory | undefined {
  return compositionCategories.find((c) => c.slug === slug)
}

export function getCompositionBySlug(
  categorySlug: string,
  compositionSlug: string,
): CompositionItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find(
    (c) => c.slug === compositionSlug,
  )
}
