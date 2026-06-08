import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import type { RegistryItem } from 'shadcn/schema'

import registry from '../../registry.json'

const items = registry.items as unknown as RegistryItem[]

/**
 * Server/build lookup for a registry item. Lives in a separate file from
 * registry-utils.ts so client code (e.g. block-editor) does not bundle the
 * full registry.json.
 *
 * Prefers public/r/*.json (the built artifact — carries file content AND
 * dependencies, the same source block-editor fetches at runtime) and falls
 * back to registry.json (metadata only) when the build output is absent.
 */
export function getRegistryItem(name: string): RegistryItem | undefined {
  try {
    const filePath = join(process.cwd(), 'public', 'r', `${name}.json`)
    return JSON.parse(readFileSync(filePath, 'utf8')) as RegistryItem
  } catch {
    return items.find((item) => item.name === name)
  }
}
