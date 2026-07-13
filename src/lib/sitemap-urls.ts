import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

import type { MetadataRoute } from 'next'
import type { RegistryItem } from 'shadcn/schema'

import { siteConfig } from '@/config/site'
import { allIntents } from '@/lib/intents/intent-catalog'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

import registry from '../../public/r/registry.json'

const registryItems = registry.items as RegistryItem[]

const staticPaths = [
  '/',
  '/blocks',
  '/patterns',
  '/forms',
  '/forms/react-hook-form',
  '/forms/tanstack-form',
  '/intents',
  '/compositions',
  '/sketches',
  '/illustrations',
  '/presets',
  '/new',
  '/cms/sanity',
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

function collectBlockDocPaths(dir: string, segments: string[] = []): string[] {
  const paths: string[] = []

  for (const name of readdirSync(dir)) {
    const fullPath = join(dir, name)
    if (statSync(fullPath).isDirectory()) {
      paths.push(...collectBlockDocPaths(fullPath, [...segments, name]))
      continue
    }

    if (!name.endsWith('.mdx')) continue

    const slug = name.replace(/\.mdx$/, '')
    const [category] = segments.slice(-1)
    if (!category) continue

    paths.push(`/blocks/${category}/${slug}`)
  }

  return paths
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) =>
      entry(path, {
        priority: path === '/' ? 1 : 0.8,
        changeFrequency: path === '/' ? 'daily' : 'weekly',
      }),
    ),
    ...patternCategories.map((category) =>
      entry(`/patterns/${category.slug}`, { priority: 0.7 }),
    ),
    ...allIntents
      .filter((intent) => intent.manifest)
      .map((intent) => entry(`/intents/${intent.slug}`, { priority: 0.7 })),
    ...collectBlockDocPaths(join(process.cwd(), 'src/app/content/blocks')).map(
      (path) => entry(path, { priority: 0.8 }),
    ),
    entry('/r/registry.json', { priority: 0.9, changeFrequency: 'daily' }),
    ...registryItems.map((item) =>
      entry(`/r/${item.name}.json`, {
        priority: 0.6,
        changeFrequency: 'weekly',
      }),
    ),
  ]

  return entries
}
