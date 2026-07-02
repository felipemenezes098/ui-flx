import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import type { RegistryItem } from 'shadcn/schema'

import registry from '../../registry.json'

const items = registry.items as unknown as RegistryItem[]

/**
 * Reads a single built registry item from public/r/*.json (content + deps),
 * falling back to registry.json (metadata only) when the build output is
 * absent. Does NOT resolve registryDependencies — use getRegistryItem for that.
 */
function readRegistryItem(name: string): RegistryItem | undefined {
  try {
    const filePath = join(process.cwd(), 'public', 'r', `${name}.json`)
    return JSON.parse(readFileSync(filePath, 'utf8')) as RegistryItem
  } catch {
    return items.find((item) => item.name === name)
  }
}

/**
 * Resolves registryDependencies recursively and merges their files into the
 * item. Internal deps are namespaced (e.g. "@flx/cta") and resolve to a local
 * public/r/*.json; shadcn primitives (e.g. "button") have no local file and are
 * skipped — the CLI installs those at `shadcn add` time. Mirrors the runtime
 * resolver in registry-utils.ts but reads from disk instead of fetching.
 */
function resolveRegistryDependencies(
  item: RegistryItem,
  visited: Set<string> = new Set(),
): RegistryItem {
  if (visited.has(item.name)) return item
  visited.add(item.name)

  if (!item.registryDependencies?.length) return item

  const allFiles = [...(item.files ?? [])]

  for (const dep of item.registryDependencies) {
    // Strip registry namespace prefix (@flx/cta -> cta).
    const depName = dep.replace(/^@[^/]+\//, '')
    const depItem = readRegistryItem(depName)
    // No local file => shadcn primitive; the CLI installs it separately.
    if (!depItem) continue

    const resolvedDep = resolveRegistryDependencies(depItem, visited)
    if (resolvedDep.files) allFiles.push(...resolvedDep.files)
  }

  return { ...item, files: allFiles }
}

/**
 * Server/build lookup for a registry item with its registryDependencies
 * resolved and their files merged in. Lives in a separate file from
 * registry-utils.ts so client code (e.g. block-editor) does not bundle the
 * full registry.json.
 */
export function getRegistryItem(name: string): RegistryItem | undefined {
  const item = readRegistryItem(name)
  if (!item) return undefined
  return resolveRegistryDependencies(item)
}
