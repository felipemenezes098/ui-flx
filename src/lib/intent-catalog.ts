import type {
  IntentDomain,
  IntentEntry,
  IntentManifest,
} from '@/lib/intent-manifest-types'

import { manifest as showTeamMembers } from 'registry/intent/show-team-members/manifest'

export type {
  IntentDecision,
  IntentManifest,
} from '@/lib/intent-manifest-types'

function fromManifest(manifest: IntentManifest): IntentEntry {
  return {
    slug: manifest.slug,
    name: manifest.name,
    problem: manifest.problem,
    manifest,
  }
}

export const intentDomains: IntentDomain[] = [
  {
    slug: 'collaboration',
    name: 'Collaboration',
    intents: [fromManifest(showTeamMembers)],
  },
]

export const allIntents: IntentEntry[] = intentDomains.flatMap((d) => d.intents)

export function getIntentManifest(slug: string): IntentManifest | undefined {
  return allIntents.find((i) => i.slug === slug)?.manifest
}

export function getDomainBySlug(slug: string): IntentDomain | undefined {
  return intentDomains.find((d) => d.slug === slug)
}
