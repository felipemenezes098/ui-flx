import type {
  IntentDomain,
  IntentEntry,
  IntentManifest,
} from '@/lib/intents/intent-manifest-types'

import { manifest as resetPassword } from 'registry/intent/reset-password/manifest'
import { manifest as selectAPlan } from 'registry/intent/select-a-plan/manifest'
import { manifest as signIn } from 'registry/intent/sign-in/manifest'
import { manifest as twoFactorSetup } from 'registry/intent/two-factor-setup/manifest'

export type {
  IntentDecision,
  IntentDecisionStyles,
  IntentGridColumns,
  IntentManifest,
} from '@/lib/intents/intent-manifest-types'

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
    slug: 'billing',
    name: 'Billing',
    intents: [fromManifest(selectAPlan)],
  },
  {
    slug: 'auth',
    name: 'Auth',
    intents: [
      fromManifest(signIn),
      fromManifest(resetPassword),
      fromManifest(twoFactorSetup),
    ],
  },
]

export const allIntents: IntentEntry[] = intentDomains.flatMap((d) => d.intents)

export function getIntentManifest(slug: string): IntentManifest | undefined {
  return allIntents.find((i) => i.slug === slug)?.manifest
}

export function getDomainBySlug(slug: string): IntentDomain | undefined {
  return intentDomains.find((d) => d.slug === slug)
}
