import type { RegistryItem } from 'shadcn/schema'

import { siteConfig } from '@/config/site'
import type {
  DecisionView,
  IntentCodeFile,
  IntentDecision,
  IntentManifest,
} from '@/lib/intent-manifest-types'
import { getRegistryItem } from '@/lib/registry-utils.server'

/**
 * Server-only. Builds the self-contained view-model for an intent decision —
 * the registry item, install command, prompt, and code files. Do not import
 * from client components: call in a server component and pass the resulting
 * `DecisionView` down as a single prop.
 */

const REGISTRY_BASE_URL = siteConfig.url

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

/** Single source of the install command shown across the AI surface. */
export function installCommand(registryName: string): string {
  return `npx shadcn@latest add @${siteConfig.codeName}/${registryName}`
}

function componentList(item: RegistryItem | undefined): string {
  const slugs = item?.registryDependencies ?? []
  return slugs.map(pretty).join(', ') || 'shadcn/ui primitives'
}

function toCodeFiles(item: RegistryItem | undefined): IntentCodeFile[] {
  if (!item?.files) return []

  return item.files
    .filter((f) => f.content)
    .map((f) => {
      const path = f.target ?? f.path
      return {
        name: path.split('/').pop() ?? path,
        content: f.content as string,
      }
    })
}

function buildPrompt(
  manifest: IntentManifest,
  decision: IntentDecision,
  item: RegistryItem | undefined,
  registryName: string,
  install: string,
): string {
  const registryUrl = `${REGISTRY_BASE_URL}/r/${registryName}.json`
  const baseList = (item?.registryDependencies ?? []).map(pretty).join(', ')

  return `# Intent: ${manifest.name}
${manifest.problem}

## Decision: ${decision.name}
- Why this fits: ${decision.best}
- Watch out: ${decision.caveat}

## How to build it
A ready-made implementation of this decision lives in our registry. Read it to
understand the exact structure, then install it (it brings its own dependencies):

  ${install}

Registry item: ${registryUrl}

Then adapt it to my context — replace the sample data and match my spacing,
colors, and typography. Keep the interaction shown in the preview.

If the registry is not an option, recreate the same concept with ${
    baseList || 'shadcn/ui primitives'
  }: keep the layout and behavior, not the literal markup.`
}

export function buildDecisionView(
  manifest: IntentManifest,
  decision: IntentDecision,
): DecisionView {
  const registryName = registryNameFor(manifest, decision)
  const item = getRegistryItem(registryName)
  const install = installCommand(registryName)

  return {
    slug: decision.slug,
    name: decision.name,
    best: decision.best,
    caveat: decision.caveat,
    registryName,
    install,
    prompt: buildPrompt(manifest, decision, item, registryName, install),
    codeFiles: toCodeFiles(item),
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
