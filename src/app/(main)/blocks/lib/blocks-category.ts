import { blocks } from '@/lib/catalog'

export function getValidBlocksCategorySlug(slug: string | null): string {
  if (!slug) return blocks[0]?.slug ?? 'hero'
  const exists = blocks.some((b) => b.slug === slug)
  return exists ? slug : (blocks[0]?.slug ?? 'hero')
}
