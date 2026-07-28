import {
  blockPresets,
  blocks,
  type BlockCategory,
} from '@/lib/blocks/block-catalog'

export const ALL_PRESETS_SLUG = 'all'

export function isAllPresets(slug: string): boolean {
  return slug === ALL_PRESETS_SLUG
}

export function getValidPresetSlug(slug: string | null): string {
  if (!slug || isAllPresets(slug)) return ALL_PRESETS_SLUG
  const exists = blockPresets.some((p) => p.id === slug)
  return exists ? slug : ALL_PRESETS_SLUG
}

export function filterBlocksByPreset(
  categories: BlockCategory[],
  presetSlug: string,
): BlockCategory[] {
  if (isAllPresets(presetSlug)) return categories
  return categories
    .map((cat) => ({
      ...cat,
      blocks: cat.blocks.filter((b) => b.preset === presetSlug),
    }))
    .filter((cat) => cat.blocks.length > 0)
}

export function getPresetBlockCount(presetSlug: string): number {
  return blocks.reduce(
    (sum, cat) =>
      sum + cat.blocks.filter((b) => b.preset === presetSlug).length,
    0,
  )
}

export function getAllBlocksCount(): number {
  return blocks.reduce((sum, cat) => sum + cat.blocks.length, 0)
}

export function getCategoryBlockCount(
  categorySlug: string,
  presetSlug: string,
): number {
  const filtered = filterBlocksByPreset(blocks, presetSlug)
  return filtered.find((c) => c.slug === categorySlug)?.blocks.length ?? 0
}
