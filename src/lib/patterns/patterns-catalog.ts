export type { PatternGridColumns, PatternItem, PatternCategory } from '@/lib/patterns/pattern-types'

import { accordionCategory } from 'registry/patterns/accordion/catalog'
import { avatarCategory } from 'registry/patterns/avatar/catalog'
import { badgeCategory } from 'registry/patterns/badge/catalog'
import { bannerCategory } from 'registry/patterns/banner/catalog'
import { breadcrumbCategory } from 'registry/patterns/breadcrumb/catalog'
import { buttonCategory } from 'registry/patterns/button/catalog'
import { cardCategory } from 'registry/patterns/card/catalog'
import { checkboxCategory } from 'registry/patterns/checkbox/catalog'
import { collapsibleCategory } from 'registry/patterns/collapsible/catalog'
import { commandCategory } from 'registry/patterns/command/catalog'
import { dialogCategory } from 'registry/patterns/dialog/catalog'
import { dropdownCategory } from 'registry/patterns/dropdown/catalog'
import { emptyCategory } from 'registry/patterns/empty/catalog'
import { inputCategory } from 'registry/patterns/input/catalog'
import { itemCategory } from 'registry/patterns/item/catalog'
import { paginationCategory } from 'registry/patterns/pagination/catalog'
import { popoverCategory } from 'registry/patterns/popover/catalog'
import { selectCategory } from 'registry/patterns/select/catalog'
import { skeletonCategory } from 'registry/patterns/skeleton/catalog'
import { switchCategory } from 'registry/patterns/switch/catalog'
import { tableCategory } from 'registry/patterns/table/catalog'
import { tabsCategory } from 'registry/patterns/tabs/catalog'
import { tooltipCategory } from 'registry/patterns/tooltip/catalog'

import type { PatternCategory, PatternItem } from '@/lib/patterns/pattern-types'

export const patternCategories: PatternCategory[] = [
  avatarCategory,
  badgeCategory,
  bannerCategory,
  accordionCategory,
  cardCategory,
  selectCategory,
  checkboxCategory,
  switchCategory,
  tableCategory,
  dialogCategory,
  dropdownCategory,
  inputCategory,
  buttonCategory,
  itemCategory,
  tabsCategory,
  popoverCategory,
  tooltipCategory,
  breadcrumbCategory,
  paginationCategory,
  collapsibleCategory,
  commandCategory,
  skeletonCategory,
  emptyCategory,
]

export const allPatterns = patternCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
  })),
)

export type PatternCatalogEntry = (typeof allPatterns)[number]

export function getCategoryBySlug(slug: string): PatternCategory | undefined {
  return patternCategories.find((c) => c.slug === slug)
}

export function getPatternBySlug(
  categorySlug: string,
  patternSlug: string,
): PatternItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find(
    (p) => p.slug === patternSlug,
  )
}
