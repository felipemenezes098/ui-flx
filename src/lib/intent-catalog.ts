import type {
  IntentDomain,
  IntentEntry,
  IntentManifest,
} from '@/lib/intent-manifest-types'

import { manifest as confirmDestructiveAction } from 'registry/intent/confirm-destructive-action/manifest'
import { manifest as selectAPlan } from 'registry/intent/select-a-plan/manifest'
import { manifest as showTeamMembers } from 'registry/intent/show-team-members/manifest'
import { manifest as signIn } from 'registry/intent/sign-in/manifest'

export type {
  IntentDecision,
  IntentDecisionStyles,
  IntentGridColumns,
  IntentManifest,
} from '@/lib/intent-manifest-types'

function fromManifest(manifest: IntentManifest): IntentEntry {
  return {
    slug: manifest.slug,
    name: manifest.name,
    problem: manifest.problem,
    grid: manifest.grid,
    manifest,
  }
}

export const intentDomains: IntentDomain[] = [
  {
    slug: 'actions',
    name: 'Actions',
    intents: [fromManifest(confirmDestructiveAction)],
  },
  {
    slug: 'collaboration',
    name: 'Collaboration',
    intents: [fromManifest(showTeamMembers)],
  },
  {
    slug: 'billing',
    name: 'Billing',
    intents: [fromManifest(selectAPlan)],
  },
  {
    slug: 'auth',
    name: 'Auth',
    intents: [fromManifest(signIn)],
  },
]

export const allIntents: IntentEntry[] = intentDomains.flatMap((d) => d.intents)

export function getIntentManifest(slug: string): IntentManifest | undefined {
  return allIntents.find((i) => i.slug === slug)?.manifest
}

export function getDomainBySlug(slug: string): IntentDomain | undefined {
  return intentDomains.find((d) => d.slug === slug)
}
