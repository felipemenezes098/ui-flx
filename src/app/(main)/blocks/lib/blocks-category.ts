import { blocks } from '@/lib/blocks/block-catalog'

export const ALL_BLOCKS_CATEGORY_SLUG = 'all'
/** Pseudo-category: every block flagged `hasNew`, across categories. */
export const NEW_BLOCKS_CATEGORY_SLUG = 'new'

const catalogSlugs = blocks.map((b) => b.slug)

export const newBlocksCount = blocks
  .flatMap((b) => b.blocks)
  .filter((b) => b.hasNew).length

/** Empty array = all categories. */
export function parseCategoryFilter(raw: string | null): string[] {
  if (!raw || isAllBlocksCategoryParam(raw)) return []
  if (raw === NEW_BLOCKS_CATEGORY_SLUG && newBlocksCount > 0) {
    return [NEW_BLOCKS_CATEGORY_SLUG]
  }
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

const CATEGORY_PATH = /^\/blocks\/([a-z0-9-]+)$/

/** The category of a /blocks/<category> page, if the pathname is one. */
export function getPathnameCategory(pathname: string): string | undefined {
  const slug = CATEGORY_PATH.exec(pathname)?.[1]
  if (!slug || !catalogSlugs.includes(slug)) return undefined
  return slug
}

export function isCatalogCategory(slug: string): boolean {
  return catalogSlugs.includes(slug)
}

export function isAllBlocksCategoryParam(slug: string): boolean {
  return slug === ALL_BLOCKS_CATEGORY_SLUG
}

export function isAllCategories(slugs: string[]): boolean {
  return slugs.length === 0
}

export function isNewBlocksFilter(slugs: string[]): boolean {
  return slugs.includes(NEW_BLOCKS_CATEGORY_SLUG)
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
