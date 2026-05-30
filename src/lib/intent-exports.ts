import {
  type IntentDecision,
  type IntentManifest,
} from '@/lib/intent-manifest-types'
import { getRegistryItemByName } from '@/lib/registry-utils.server'
import { siteConfig } from '@/config/site'

/**
 * Server-only. Generates self-contained export artifacts for an intent
 * decision. Do not import from client components — call this in a server
 * component and pass the resulting strings down as props.
 *
 * Install deps come from registry.json (same data as public/r/*.json), like
 * block-editor does via getRegistryItem.
 */

const REGISTRY_BASE_URL = siteConfig.url

function pretty(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function decisionRegistryName(
  manifest: IntentManifest,
  decision: IntentDecision,
): string {
  return `${manifest.slug}-${decision.slug}`
}

function decisionComponentList(
  manifest: IntentManifest,
  decision: IntentDecision,
): string {
  const item = getRegistryItemByName(decisionRegistryName(manifest, decision))
  const slugs = item?.registryDependencies ?? []
  return slugs.map(pretty).join(', ') || 'shadcn/ui primitives'
}

export interface DecisionExports {
  registryName: string
  registryDependencies: string[]
  dependencies: string[]
  registryUrl: string
  install: string
  prompt: string
}

export function buildDecisionExports(
  manifest: IntentManifest,
  decision: IntentDecision,
): DecisionExports {
  const registryName = decisionRegistryName(manifest, decision)
  const item = getRegistryItemByName(registryName)
  const registryDependencies = item?.registryDependencies ?? []
  const dependencies = item?.dependencies ?? []
  const registryUrl = `${REGISTRY_BASE_URL}/r/${registryName}.json`
  const install = `npx shadcn@latest add ${registryUrl}`

  const baseList = registryDependencies.map(pretty).join(', ')

  const prompt = `# Intent: ${manifest.name}
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

  return {
    registryName,
    registryDependencies,
    dependencies,
    registryUrl,
    install,
    prompt,
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
- Components: ${decisionComponentList(manifest, d)}`,
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
