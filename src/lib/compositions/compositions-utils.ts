import type { RegistryItem } from 'shadcn/schema'

import { siteConfig } from '@/config/site'
import { registryItemUrl } from '@/lib/registry-command'
import {
  formatCodeFilesForPrompt,
  type RegistryCodeFile,
} from '@/lib/registry-source'

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

export function buildCompositionPrompt(
  item: RegistryItem,
  categorySlug: string,
  codeFiles: RegistryCodeFile[] = [],
): string {
  const description = item.description?.trim()
  const previewUrl = `${siteConfig.url}/compositions#${item.name}`
  const source = formatCodeFilesForPrompt(codeFiles)

  const sections = [
    `# ${item.title}`,
    `## Context\nFlexnative UI composition — a full, composed screen reference implementation from the shadcn/ui registry (@${siteConfig.codeName}).`,
    ...(description ? [`## Description\n${description}`] : []),
    `## Registry Item\n@${siteConfig.codeName}/${item.name}`,
    `## Stack\n${buildStackSection(item)}`,
    `## Registry Source\n${registryItemUrl(item.name)}`,
    `## Preview\n${previewUrl}`,
    ...(source ? [`## Reference Implementation\n${source}`] : []),
  ]

  return sections.join('\n\n')
}
