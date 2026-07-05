import type { RegistryItem } from 'shadcn/schema'

import { siteConfig } from '@/config/site'
import { registryItemUrl } from '@/lib/registry-command'
import {
  formatCodeFilesForPrompt,
  type RegistryCodeFile,
} from '@/lib/registry-source'

function buildStackSection(item: RegistryItem): string {
  const lines = ['- UI: shadcn/ui', '- Styling: Tailwind CSS']

  const deps = item.dependencies?.filter(Boolean)
  if (deps?.length) {
    lines.push(`- npm: ${deps.join(', ')}`)
  }

  return lines.join('\n')
}

export function buildIllustrationPrompt(
  item: RegistryItem,
  categorySlug: string,
  codeFiles: RegistryCodeFile[] = [],
): string {
  const description = item.description?.trim()
  const previewUrl = `${siteConfig.url}/illustrations#${categorySlug}`
  const source = formatCodeFilesForPrompt(codeFiles)

  const sections = [
    `# ${item.title}`,
    `## Context\nFlexnative UI illustration — a UI illustration / motion component that makes interfaces feel alive, built with shadcn/ui and Motion, from the shadcn/ui registry (@${siteConfig.codeName}).`,
    ...(description ? [`## Description\n${description}`] : []),
    `## Registry Item\n@${siteConfig.codeName}/${item.name}`,
    `## Stack\n${buildStackSection(item)}`,
    `## Registry Source\n${registryItemUrl(item.name)}`,
    `## Preview\n${previewUrl}`,
    ...(source ? [`## Reference Implementation\n${source}`] : []),
  ]

  return sections.join('\n\n')
}
