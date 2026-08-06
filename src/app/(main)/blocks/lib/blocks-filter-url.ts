import {
  ALL_BLOCKS_CATEGORY_SLUG,
  isAllCategories,
  parseCategoryFilter,
  serializeCategoryFilter,
} from './blocks-category'

function toHref(pathname: string, params: URLSearchParams): string {
  const qs = params.toString()
  return qs ? `${pathname}?${qs}` : pathname
}

/** Clear preset + category → all blocks. */
export function allBlocksHref(
  pathname: string,
  searchParams: URLSearchParams,
): string {
  const params = new URLSearchParams(searchParams.toString())
  params.set('category', ALL_BLOCKS_CATEGORY_SLUG)
  params.delete('preset')
  return toHref(pathname, params)
}

/** Clear the preset filter only, keep the category filter as-is. */
export function clearPresetHref(
  pathname: string,
  searchParams: URLSearchParams,
): string {
  const params = new URLSearchParams(searchParams.toString())
  params.delete('preset')
  return toHref(pathname, params)
}

/** Clear the category filter only, keep the preset filter as-is. */
export function clearCategoriesHref(
  pathname: string,
  searchParams: URLSearchParams,
): string {
  const params = new URLSearchParams(searchParams.toString())
  params.set('category', ALL_BLOCKS_CATEGORY_SLUG)
  return toHref(pathname, params)
}

/** Toggle preset: same slug clears; other slug selects. */
export function presetFilterHref(
  pathname: string,
  searchParams: URLSearchParams,
  presetSlug: string,
  activePreset: string,
): string {
  const params = new URLSearchParams(searchParams.toString())
  if (activePreset === presetSlug) {
    params.delete('preset')
  } else {
    params.set('preset', presetSlug)
  }
  return toHref(pathname, params)
}

/**
 * Toggle category into a comma-separated multi-select.
 * From "all", first click selects only that category.
 * Click active again removes it; empty → all.
 */
export function categoryFilterHref(
  pathname: string,
  searchParams: URLSearchParams,
  categorySlug: string,
  activeCategories: string[],
): string {
  const params = new URLSearchParams(searchParams.toString())
  let next: string[]

  if (isAllCategories(activeCategories)) {
    next = [categorySlug]
  } else if (activeCategories.includes(categorySlug)) {
    next = activeCategories.filter((s) => s !== categorySlug)
  } else {
    next = parseCategoryFilter(
      serializeCategoryFilter([...activeCategories, categorySlug]),
    )
  }

  params.set('category', serializeCategoryFilter(next))
  return toHref(pathname, params)
}
