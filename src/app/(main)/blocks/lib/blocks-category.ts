import { blocks } from '@/lib/blocks/block-catalog'

export const ALL_BLOCKS_CATEGORY_SLUG = 'all'

export function isAllBlocksCategory(slug: string): boolean {
  return slug === ALL_BLOCKS_CATEGORY_SLUG
}

export function getValidBlocksCategorySlug(slug: string | null): string {
  if (!slug || isAllBlocksCategory(slug)) return ALL_BLOCKS_CATEGORY_SLUG
  const exists = blocks.some((b) => b.slug === slug)
  return exists ? slug : ALL_BLOCKS_CATEGORY_SLUG
}
