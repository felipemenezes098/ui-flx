import type { RegistryItem } from 'shadcn/schema'

import registry from '../../registry.json'

const items = registry.items as unknown as RegistryItem[]

export function getPatternsByNames(names: string[]): RegistryItem[] {
  const map = new Map(items.map((item) => [item.name, item]))
  return names
    .map((name) => map.get(name))
    .filter((item): item is RegistryItem => item !== undefined)
}

export function getPatternByName(name: string): RegistryItem | undefined {
  return items.find((item) => item.name === name)
}
