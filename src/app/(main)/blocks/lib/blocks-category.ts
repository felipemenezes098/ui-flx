import { blocks } from '@/lib/blocks/block-catalog'

export const ALL_BLOCKS_CATEGORY_SLUG = 'all'

const catalogSlugs = blocks.map((b) => b.slug)

/** Empty array = all categories. */
export function parseCategoryFilter(raw: string | null): string[] {
  if (!raw || isAllBlocksCategoryParam(raw)) return []
  const valid = new Set(catalogSlugs)
  const selected = new Set(
    raw
      .split(',')
      .map((s) => s.trim())
      .filter((s) => valid.has(s)),
  )
  if (selected.size === 0) return []
  return catalogSlugs.filter((slug) => selected.has(slug))
}

export function isAllBlocksCategoryParam(slug: string): boolean {
  return slug === ALL_BLOCKS_CATEGORY_SLUG
}

export function isAllCategories(slugs: string[]): boolean {
  return slugs.length === 0
}

export function serializeCategoryFilter(slugs: string[]): string {
  if (slugs.length === 0) return ALL_BLOCKS_CATEGORY_SLUG
  return slugs.join(',')
}

/** @deprecated use parseCategoryFilter — kept for single-slug callers */
export function getValidBlocksCategorySlug(slug: string | null): string {
  const parsed = parseCategoryFilter(slug)
  if (parsed.length === 0) return ALL_BLOCKS_CATEGORY_SLUG
  if (parsed.length === 1) return parsed[0]!
  return parsed.join(',')
}

export function isAllBlocksCategory(slug: string): boolean {
  return isAllBlocksCategoryParam(slug)
}
