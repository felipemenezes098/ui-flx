export type {
  SketchGridColumns,
  SketchItem,
  SketchCategory,
} from '@/lib/sketches/sketch-types'

import { chatCategory } from 'registry/sketches/chat/catalog'
import { dashboardCategory } from 'registry/sketches/dashboard/catalog'

import type { SketchCategory, SketchItem } from '@/lib/sketches/sketch-types'

export const sketchCategories: SketchCategory[] = [
  dashboardCategory,
  chatCategory,
]

export const allSketches = sketchCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
  })),
)

export type SketchCatalogEntry = (typeof allSketches)[number]

export function getCategoryBySlug(slug: string): SketchCategory | undefined {
  return sketchCategories.find((c) => c.slug === slug)
}

export function getSketchBySlug(
  categorySlug: string,
  sketchSlug: string,
): SketchItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find((c) => c.slug === sketchSlug)
}
