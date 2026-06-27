/**
 * Sync registry metadata from catalog sources.
 *
 * Blocks: `title`, `description`, `meta.iframeHeight` from block manifests.
 * Patterns: `title`, `description` from registry/patterns/<cat>/catalog.ts.
 * Forms: `title`, `description` from registry/forms/<lib>/<cat>/catalog.ts.
 * Intents: `title`, `description`, `files` from intent manifests.
 *
 * Shadcn-specific fields (files, registryDependencies, dependencies) are NOT modified
 * for blocks and patterns (only intents auto-fix `files`).
 *
 * Supports the `include` feature: registry.json may reference sub-registries.
 *
 * Usage:
 *   npx tsx scripts/sync-registry.ts
 *   npx tsx scripts/sync-registry.ts --check  (exits 1 if out of sync)
 */

import fs from 'node:fs'
import path from 'node:path'
import { allManifests } from '../src/lib/blocks/block-catalog'
import { allIntents } from '../src/lib/intents/intent-catalog'
import { allFormPatterns } from '../src/lib/forms/catalog'
import { allPatterns } from '../src/lib/patterns/patterns-catalog'
import { allConcepts } from '../src/lib/concepts/concepts-catalog'
import { allSketches } from '../src/lib/sketches/sketches-catalog'

const ROOT = process.cwd()
const CHECK_ONLY = process.argv.includes('--check')

type RegistryItem = {
  name: string
  title?: string
  description?: string
  files?: unknown[]
  meta?: Record<string, unknown>
  [key: string]: unknown
}

type Registry = {
  $schema: string
  name: string
  homepage: string
  include?: string[]
  items: RegistryItem[]
}

/** Item index: name → { item ref, filePath of the registry file it lives in } */
const itemIndex = new Map<string, { item: RegistryItem; filePath: string }>()
/** Track which registry files were loaded and their parsed data */
const registryFiles = new Map<string, Registry>()
/** Track which files were mutated */
const dirtyFiles = new Set<string>()

function loadRegistry(filePath: string) {
  if (registryFiles.has(filePath)) return
  const data: Registry = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  registryFiles.set(filePath, data)

  for (const item of data.items ?? []) {
    if (!itemIndex.has(item.name)) {
      itemIndex.set(item.name, { item, filePath })
    }
  }

  for (const include of data.include ?? []) {
    const resolved = path.resolve(path.dirname(filePath), include)
    loadRegistry(resolved)
  }
}

// Load all registries starting from root
const ROOT_REGISTRY = path.join(ROOT, 'registry.json')
loadRegistry(ROOT_REGISTRY)

const issues: string[] = []

// ---------------------------------------------------------------------------
// Intent sync
// ---------------------------------------------------------------------------
function syncIntentItems() {
  for (const entry of allIntents) {
    const manifest = entry.manifest
    if (!manifest) continue

    for (const decision of manifest.decisions) {
      const name = `${manifest.slug}-${decision.slug}`
      const file = `${manifest.slug}-${decision.slug}.tsx`
      // path is relative to registry/intents/registry.json (its containing directory)
      const expectedFiles = [
        {
          path: `${manifest.slug}/${file}`,
          type: 'registry:component',
          target: `components/flx/intent/${manifest.slug}/${file}`,
        },
      ]
      const expectedTitle = decision.name
      const expectedDescription = `${decision.name} for ${manifest.name}.`

      const found = itemIndex.get(name)
      if (!found) {
        issues.push(`  MISSING in registry: "${name}" (intent decision)`)
        continue
      }

      const { item, filePath } = found
      const drifted =
        JSON.stringify(item.files ?? []) !== JSON.stringify(expectedFiles) ||
        item.title !== expectedTitle ||
        item.description !== expectedDescription

      if (drifted) {
        if (CHECK_ONLY) {
          issues.push(`  OUT OF SYNC: "${name}" (intent decision)`)
        } else {
          item.title = expectedTitle
          item.description = expectedDescription
          item.files = expectedFiles
          dirtyFiles.add(filePath)
          console.log(`  Updated intent item: ${name}`)
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Block + pattern sync
// ---------------------------------------------------------------------------
type CatalogEntry = {
  slug: string
  name: string
  description?: string
  categoryLabel: string
  meta?: { iframeHeight?: number }
}

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
  ...allFormPatterns.map((pattern) => ({
    slug: pattern.slug,
    name: pattern.name,
    description: pattern.description,
    categoryLabel: pattern.categorySlug,
  })),
  ...allConcepts.map((concept) => ({
    slug: concept.slug,
    name: concept.name,
    description: concept.description,
    categoryLabel: concept.categorySlug,
  })),
  ...allSketches.map((sketch) => ({
    slug: sketch.slug,
    name: sketch.name,
    description: sketch.description,
    categoryLabel: sketch.categorySlug,
  })),
]

function syncEntry(entry: CatalogEntry) {
  const found = itemIndex.get(entry.slug)
  if (!found) {
    issues.push(
      `  MISSING in registry: "${entry.slug}" (category: ${entry.categoryLabel})`,
    )
    return
  }

  const { item, filePath } = found
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
      if (item.title !== expectedTitle)
        issues.push(`    title: registry="${item.title}" catalog="${expectedTitle}"`)
      if (item.description !== expectedDescription)
        issues.push(`    description: registry="${item.description}" catalog="${expectedDescription}"`)
      if (expectedIframeHeight !== undefined && item.meta?.iframeHeight !== expectedIframeHeight)
        issues.push(`    meta.iframeHeight: registry=${item.meta?.iframeHeight} catalog=${expectedIframeHeight}`)
    } else {
      item.title = expectedTitle
      item.description = expectedDescription
      if (expectedIframeHeight !== undefined) {
        item.meta = { ...(item.meta ?? {}), iframeHeight: expectedIframeHeight }
      }
      dirtyFiles.add(filePath)
      console.log(`  Updated: ${entry.slug}`)
    }
  }
}

for (const entry of catalogEntries) {
  syncEntry(entry)
}

syncIntentItems()

// Image validation (blocks only)
for (const manifest of allManifests) {
  if (!manifest.image?.light || !manifest.image?.dark) {
    issues.push(
      `  MISSING image.light or image.dark in manifest: "${manifest.slug}"`,
    )
  }
}

// ---------------------------------------------------------------------------
// Write back changed files
// ---------------------------------------------------------------------------
if (CHECK_ONLY) {
  if (issues.length > 0) {
    console.error('Registry validation FAILED:')
    issues.forEach((i) => console.error(i))
    process.exit(1)
  } else {
    console.log('Registry validation PASSED — catalog and registry in sync.')
  }
} else {
  if (issues.length > 0) {
    console.warn('Warnings (manual action required):')
    issues.forEach((i) => console.warn(i))
  }

  if (dirtyFiles.size > 0) {
    for (const filePath of dirtyFiles) {
      const data = registryFiles.get(filePath)!
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n')
      console.log(`  Saved: ${path.relative(ROOT, filePath)}`)
    }
    console.log('registry files updated.')
  } else {
    console.log('registry already in sync — no changes needed.')
  }
}
