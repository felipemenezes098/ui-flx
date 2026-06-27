export type {
  ConceptGridColumns,
  ConceptItem,
  ConceptCategory,
} from '@/lib/concepts/concept-types'

import { chatCategory } from 'registry/concepts/chat/catalog'
import { dashboardCategory } from 'registry/concepts/dashboard/catalog'

import type { ConceptCategory, ConceptItem } from '@/lib/concepts/concept-types'

export const conceptCategories: ConceptCategory[] = [
  dashboardCategory,
  chatCategory,
]

export const allConcepts = conceptCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
  })),
)

export type ConceptCatalogEntry = (typeof allConcepts)[number]

export function getCategoryBySlug(slug: string): ConceptCategory | undefined {
  return conceptCategories.find((c) => c.slug === slug)
}

export function getConceptBySlug(
  categorySlug: string,
  conceptSlug: string,
): ConceptItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find(
    (c) => c.slug === conceptSlug,
  )
}
