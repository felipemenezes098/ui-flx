import {
  blocks,
  getThemeBySlug,
  themes,
  type BlockCategory,
} from '@/lib/blocks/block-catalog'

export const ALL_THEMES_SLUG = 'all'

export function isAllThemes(slug: string): boolean {
  return slug === ALL_THEMES_SLUG
}

export function getValidThemeSlug(slug: string | null): string {
  if (!slug || isAllThemes(slug)) return ALL_THEMES_SLUG
  const exists = themes.some((t) => t.slug === slug)
  return exists ? slug : ALL_THEMES_SLUG
}

export function filterBlocksByTheme(
  categories: BlockCategory[],
  themeSlug: string,
): BlockCategory[] {
  if (isAllThemes(themeSlug)) return categories
  const theme = getThemeBySlug(themeSlug)
  if (!theme) return categories
  const allowed = new Set(theme.blocks.map((b) => b.slug))
  return categories
    .map((cat) => ({
      ...cat,
      blocks: cat.blocks.filter((b) => allowed.has(b.slug)),
    }))
    .filter((cat) => cat.blocks.length > 0)
}

export function getThemeBlockCount(themeSlug: string): number {
  return getThemeBySlug(themeSlug)?.blocks.length ?? 0
}

export function getAllBlocksCount(): number {
  return blocks.reduce((sum, cat) => sum + cat.blocks.length, 0)
}

export function getCategoryBlockCount(
  categorySlug: string,
  themeSlug: string,
): number {
  const filtered = filterBlocksByTheme(blocks, themeSlug)
  return filtered.find((c) => c.slug === categorySlug)?.blocks.length ?? 0
}
