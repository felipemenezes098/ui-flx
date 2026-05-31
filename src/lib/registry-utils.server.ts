import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import type { RegistryItem } from 'shadcn/schema'

import registry from '../../registry.json'

const items = registry.items as unknown as RegistryItem[]

/**
 * Server/build lookup from registry.json.
 * Lives in a separate file from registry-utils.ts so client code (e.g.
 * block-editor) does not bundle the full registry.json.
 */
export function getRegistryItemByName(name: string): RegistryItem | undefined {
  return items.find((item) => item.name === name)
}

/** Full item with file content (public/r/*.json), same source block-editor fetches. */
export function getPublicRegistryItem(name: string): RegistryItem | undefined {
  try {
    const filePath = join(process.cwd(), 'public', 'r', `${name}.json`)
    const raw = readFileSync(filePath, 'utf8')
    return JSON.parse(raw) as RegistryItem
  } catch {
    return undefined
  }
}
