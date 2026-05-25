/**
 * Sync registry.json metadata from catalog sources.
 *
 * Blocks: `title`, `description`, `meta.iframeHeight` from block manifests (catalog.ts).
 * Patterns: `title`, `description` from patterns-catalog.ts.
 *
 * Shadcn-specific fields (files, registryDependencies, dependencies) are NOT modified.
 *
 * Usage:
 *   npx tsx scripts/sync-registry.ts
 *   npx tsx scripts/sync-registry.ts --check  (exits 1 if out of sync)
 */

import fs from 'node:fs'
import path from 'node:path'
import { allManifests } from '../src/lib/catalog'
import { allPatterns } from '../src/lib/patterns-catalog'

const REGISTRY_PATH = path.resolve(process.cwd(), 'registry.json')
const CHECK_ONLY = process.argv.includes('--check')

type RegistryItem = {
  name: string
  title?: string
  description?: string
  meta?: Record<string, unknown>
  [key: string]: unknown
}

type Registry = {
  $schema: string
  name: string
  homepage: string
  items: RegistryItem[]
}

type CatalogEntry = {
  slug: string
  name: string
  description?: string
  categoryLabel: string
  meta?: { iframeHeight?: number }
}

const registry: Registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'))

let changed = false
const issues: string[] = []

const catalogEntries: CatalogEntry[] = [
  ...allManifests.map((manifest) => ({
    slug: manifest.slug,
    name: manifest.name,
    description: manifest.description,
    categoryLabel: manifest.category,
    meta: manifest.meta,
  })),
  ...allPatterns.map((pattern) => ({
    slug: pattern.slug,
    name: pattern.name,
    description: pattern.description,
    categoryLabel: pattern.categorySlug,
  })),
]

function syncEntry(entry: CatalogEntry) {
  const item = registry.items.find((i) => i.name === entry.slug)

  if (!item) {
    issues.push(
      `  MISSING in registry.json: "${entry.slug}" (category: ${entry.categoryLabel})`,
    )
    return
  }

  const expectedTitle = entry.name
  const expectedDescription = entry.description ?? ''
  const expectedIframeHeight = entry.meta?.iframeHeight

  if (
    item.title !== expectedTitle ||
    item.description !== expectedDescription ||
    (expectedIframeHeight !== undefined &&
      item.meta?.iframeHeight !== expectedIframeHeight)
  ) {
    if (CHECK_ONLY) {
      issues.push(`  OUT OF SYNC: "${entry.slug}"`)
      if (item.title !== expectedTitle) {
        issues.push(
          `    title: registry="${item.title}" catalog="${expectedTitle}"`,
        )
      }
      if (item.description !== expectedDescription) {
        issues.push(
          `    description: registry="${item.description}" catalog="${expectedDescription}"`,
        )
      }
      if (
        expectedIframeHeight !== undefined &&
        item.meta?.iframeHeight !== expectedIframeHeight
      ) {
        issues.push(
          `    meta.iframeHeight: registry=${item.meta?.iframeHeight} catalog=${expectedIframeHeight}`,
        )
      }
    } else {
      item.title = expectedTitle
      item.description = expectedDescription
      if (expectedIframeHeight !== undefined) {
        item.meta = { ...(item.meta ?? {}), iframeHeight: expectedIframeHeight }
      }
      changed = true
      console.log(`  Updated: ${entry.slug}`)
    }
  }
}

for (const entry of catalogEntries) {
  syncEntry(entry)
}

for (const manifest of allManifests) {
  if (!manifest.image?.light || !manifest.image?.dark) {
    issues.push(
      `  MISSING image.light or image.dark in manifest: "${manifest.slug}"`,
    )
  }
}

if (CHECK_ONLY) {
  if (issues.length > 0) {
    console.error('Registry validation FAILED:')
    issues.forEach((i) => console.error(i))
    process.exit(1)
  } else {
    console.log('Registry validation PASSED — catalog and registry.json in sync.')
  }
} else {
  if (issues.length > 0) {
    console.warn('Warnings (manual action required):')
    issues.forEach((i) => console.warn(i))
  }

  if (changed) {
    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2) + '\n')
    console.log('registry.json updated.')
  } else {
    console.log('registry.json already in sync — no changes needed.')
  }
}
