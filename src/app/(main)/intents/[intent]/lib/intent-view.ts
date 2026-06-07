import type { RegistryItem } from 'shadcn/schema'

import { siteConfig } from '@/config/site'
import { installCommand, registryItemUrl } from '@/lib/registry-command'
import {
  formatCodeFilesForPrompt,
  toRegistryCodeFiles,
  type RegistryCodeFile,
} from '@/lib/registry-source'
import type {
  DecisionView,
  IntentDecision,
  IntentManifest,
} from '@/lib/intents/intent-manifest-types'
import { getRegistryItem } from '@/lib/registry-utils.server'

/**
 * Server-only. Builds the self-contained view-model for an intent decision —
 * the registry item, install command, prompt, and code files. Do not import
 * from client components: call in a server component and pass the resulting
 * `DecisionView` down as a single prop.
 */

function pretty(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function registryNameFor(
  manifest: IntentManifest,
  decision: IntentDecision,
): string {
  return `${manifest.slug}-${decision.slug}`
}

function componentList(item: RegistryItem | undefined): string {
  const slugs = item?.registryDependencies ?? []
  return slugs.map(pretty).join(', ') || 'shadcn/ui primitives'
}

function buildStackSection(item: RegistryItem | undefined): string {
  const lines = ['- UI: shadcn/ui', '- Styling: Tailwind CSS']

  const components = item?.registryDependencies?.map(pretty)
  if (components?.length) {
    lines.push(`- shadcn components: ${components.join(', ')}`)
  }

  const deps = item?.dependencies?.filter(Boolean)
  if (deps?.length) {
    lines.push(`- npm: ${deps.join(', ')}`)
  }

  return lines.join('\n')
}

function buildPrompt(
  manifest: IntentManifest,
  decision: IntentDecision,
  item: RegistryItem | undefined,
  registryName: string,
  codeFiles: RegistryCodeFile[],
): string {
  const previewUrl = `${siteConfig.url}/intents/${manifest.slug}#${decision.slug}`
  const source = formatCodeFilesForPrompt(codeFiles)

  const sections = [
    `# ${manifest.name}: ${decision.name}`,
    `## Context\nFlexnative UI intent — a reference solution from the shadcn/ui registry (@${siteConfig.codeName}). The intent frames the problem; the decision is one approach to it.`,
    `## Problem\n${manifest.problem}`,
    `## Decision\n- Best for: ${decision.best}\n- Trade-off: ${decision.caveat}`,
    `## Registry Item\n@${siteConfig.codeName}/${registryName}`,
    `## Stack\n${buildStackSection(item)}`,
    `## Registry Source\n${registryItemUrl(registryName)}`,
    `## Preview\n${previewUrl}`,
    ...(source ? [`## Reference Implementation\n${source}`] : []),
  ]

  return sections.join('\n\n')
}

export function buildDecisionView(
  manifest: IntentManifest,
  decision: IntentDecision,
): DecisionView {
  const registryName = registryNameFor(manifest, decision)
  const item = getRegistryItem(registryName)
  const install = installCommand(registryName)
  const codeFiles = toRegistryCodeFiles(item)

  return {
    slug: decision.slug,
    name: decision.name,
    best: decision.best,
    caveat: decision.caveat,
    styles: decision.styles,
    registryName,
    install,
    prompt: buildPrompt(manifest, decision, item, registryName, codeFiles),
    codeFiles,
  }
}

/** Intent-level Spec + Rules, templated from the decision set. */
export function buildIntentDocs(manifest: IntentManifest): {
  spec: string
  rules: string
} {
  const recommended =
    manifest.decisions.find((d) => d.recommended) ?? manifest.decisions[0]

  const spec = `# UI Spec: ${manifest.name}

${manifest.problem}

## Variants
${manifest.decisions
  .map(
    (d) => `
### ${d.name}${d.recommended ? ' (default)' : ''}
- Use when: ${d.best}
- Caveat: ${d.caveat}
- Components: ${componentList(getRegistryItem(registryNameFor(manifest, d)))}`,
  )
  .join('\n')}`

  const rules = `# Interface Rules: ${manifest.name}

- Default to ${recommended.name} — ${recommended.best}
${manifest.decisions
  .filter((d) => d !== recommended)
  .map((d) => `- Switch to ${d.name} when: ${d.best}`)
  .join('\n')}
- Always reason from the intent to the decision before choosing components.
- Explain the tradeoff (${recommended.caveat.toLowerCase()}) when it applies.`

  return { spec, rules }
}
