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
