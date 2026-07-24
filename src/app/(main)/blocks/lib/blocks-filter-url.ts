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

/** Clear theme + category → all blocks. */
export function allBlocksHref(
  pathname: string,
  searchParams: URLSearchParams,
): string {
  const params = new URLSearchParams(searchParams.toString())
  params.set('category', ALL_BLOCKS_CATEGORY_SLUG)
  params.delete('theme')
  return toHref(pathname, params)
}

/** Toggle theme: same slug clears; other slug selects. */
export function themeFilterHref(
  pathname: string,
  searchParams: URLSearchParams,
  themeSlug: string,
  activeTheme: string,
): string {
  const params = new URLSearchParams(searchParams.toString())
  if (activeTheme === themeSlug) {
    params.delete('theme')
  } else {
    params.set('theme', themeSlug)
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
