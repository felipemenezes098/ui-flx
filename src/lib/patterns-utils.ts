import type { RegistryItem } from 'shadcn/schema'

import { siteConfig } from '@/config/site'
import { registryItemUrl } from '@/lib/registry-command'
import {
  formatCodeFilesForPrompt,
  type RegistryCodeFile,
} from '@/lib/registry-source'
import { patternCategories } from '@/lib/patterns-catalog'

import registry from '../../registry.json'

const items = registry.items as unknown as RegistryItem[]

function prettyRegistryDependency(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function buildStackSection(item: RegistryItem): string {
  const lines = ['- UI: shadcn/ui', '- Styling: Tailwind CSS']

  const components = item.registryDependencies?.map(prettyRegistryDependency)
  if (components?.length) {
    lines.push(`- shadcn components: ${components.join(', ')}`)
  }

  const deps = item.dependencies?.filter(Boolean)
  if (deps?.length) {
    lines.push(`- npm: ${deps.join(', ')}`)
  }

  return lines.join('\n')
}

export function buildPatternPrompt(
  item: RegistryItem,
  categorySlug: string,
  codeFiles: RegistryCodeFile[] = [],
): string {
  const description = item.description?.trim()
  const previewUrl = `${siteConfig.url}/patterns/${categorySlug}#${item.name}`
  const source = formatCodeFilesForPrompt(codeFiles)

  const sections = [
    `# ${item.title}`,
    `## Context\nFlexnative UI pattern — reference implementation from the shadcn/ui registry (@${siteConfig.codeName}).`,
    ...(description ? [`## Description\n${description}`] : []),
    `## Registry Item\n@${siteConfig.codeName}/${item.name}`,
    `## Stack\n${buildStackSection(item)}`,
    `## Registry Source\n${registryItemUrl(item.name)}`,
    `## Preview\n${previewUrl}`,
    ...(source ? [`## Reference Implementation\n${source}`] : []),
  ]

  return sections.join('\n\n')
}

export function getPatternsByNames(names: string[]): RegistryItem[] {
  const map = new Map(items.map((item) => [item.name, item]))
  return names
    .map((name) => map.get(name))
    .filter((item): item is RegistryItem => item !== undefined)
}

export function getPatternByName(name: string): RegistryItem | undefined {
  return items.find((item) => item.name === name)
}

export function getPatternHref(slug: string): string | undefined {
  for (const category of patternCategories) {
    if (category.items.some((item) => item.slug === slug)) {
      return `/patterns/${category.slug}#${slug}`
    }
  }

  return undefined
}
