import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'
import { categories as blockCategories } from '@/lib/blocks/block-catalog'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

const staticPaths = [
  '/',
  '/blocks',
  '/patterns',
  '/forms',
  '/forms/react-hook-form',
  '/forms/tanstack-form',
  '/illustrations',
  '/me',
] as const

function entry(
  path: string,
  options?: Pick<MetadataRoute.Sitemap[number], 'changeFrequency' | 'priority'>,
): MetadataRoute.Sitemap[number] {
  const normalizedPath = path === '/' ? '' : path
  return {
    url: `${siteConfig.url}${normalizedPath}`,
    lastModified: new Date(),
    changeFrequency: options?.changeFrequency ?? 'weekly',
    priority: options?.priority ?? 0.7,
  }
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) =>
      entry(path, {
        priority: path === '/' ? 1 : 0.8,
        changeFrequency: path === '/' ? 'daily' : 'weekly',
      }),
    ),
    ...blockCategories.map((category) =>
      entry(`/blocks/${category.slug}`, { priority: 0.8 }),
    ),
    ...patternCategories.map((category) =>
      entry(`/patterns/${category.slug}`, { priority: 0.7 }),
    ),
    ...blockCategories.flatMap((category) =>
      category.blocks.map((block) =>
        entry(`/blocks/${category.slug}/${block.slug}`, { priority: 0.8 }),
      ),
    ),
  ]
}
