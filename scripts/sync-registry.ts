/**
 * Sync registry.json from catalog manifests.
 *
 * Updates `title`, `description`, and `meta.iframeHeight` in registry.json
 * to match manifest data. Shadcn-specific fields (files, registryDependencies,
 * dependencies) are NOT modified — those remain manually maintained.
 *
 * Usage:
 *   npx tsx scripts/sync-registry.ts
 *   npx tsx scripts/sync-registry.ts --check  (exits 1 if out of sync)
 */

import fs from 'node:fs'
import path from 'node:path'
import { allManifests } from '../src/lib/catalog'

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

const registry: Registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'))

let changed = false
const issues: string[] = []

for (const manifest of allManifests) {
  const item = registry.items.find((i) => i.name === manifest.slug)

  if (!item) {
    issues.push(
      `  MISSING in registry.json: "${manifest.slug}" (category: ${manifest.category})`,
    )
    continue
  }

  const expectedTitle = manifest.name
  const expectedDescription = manifest.description
  const expectedIframeHeight = manifest.meta?.iframeHeight

  if (
    item.title !== expectedTitle ||
    item.description !== expectedDescription ||
    (expectedIframeHeight !== undefined &&
      item.meta?.iframeHeight !== expectedIframeHeight)
  ) {
    if (CHECK_ONLY) {
      issues.push(`  OUT OF SYNC: "${manifest.slug}"`)
      if (item.title !== expectedTitle) {
        issues.push(
          `    title: registry="${item.title}" manifest="${expectedTitle}"`,
        )
      }
      if (item.description !== expectedDescription) {
        issues.push(
          `    description: registry="${item.description}" manifest="${expectedDescription}"`,
        )
      }
      if (
        expectedIframeHeight !== undefined &&
        item.meta?.iframeHeight !== expectedIframeHeight
      ) {
        issues.push(
          `    meta.iframeHeight: registry=${item.meta?.iframeHeight} manifest=${expectedIframeHeight}`,
        )
      }
    } else {
      item.title = expectedTitle
      item.description = expectedDescription
      if (expectedIframeHeight !== undefined) {
        item.meta = { ...(item.meta ?? {}), iframeHeight: expectedIframeHeight }
      }
      changed = true
      console.log(`  Updated: ${manifest.slug}`)
    }
  }
}

// Check for manifest slugs not in registry.json
const registryNames = new Set(registry.items.map((i) => i.name))
for (const manifest of allManifests) {
  if (!registryNames.has(manifest.slug)) {
    issues.push(
      `  MISSING in registry.json: "${manifest.slug}" — add it manually with files/deps.`,
    )
  }
}

// Check for image.light and image.dark
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
    console.log('Registry validation PASSED — all manifests in sync.')
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
