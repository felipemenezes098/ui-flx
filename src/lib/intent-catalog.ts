import type {
  IntentDomain,
  IntentEntry,
  IntentManifest,
} from '@/lib/intent-manifest-types'

import { manifest as checkoutPayment } from 'registry/intent/checkout-payment/manifest'
import { manifest as confirmDestructiveAction } from 'registry/intent/confirm-destructive-action/manifest'
import { manifest as emptyState } from 'registry/intent/empty-state/manifest'
import { manifest as inviteTeammates } from 'registry/intent/invite-teammates/manifest'
import { manifest as onboardingFlow } from 'registry/intent/onboarding-flow/manifest'
import { manifest as resetPassword } from 'registry/intent/reset-password/manifest'
import { manifest as search } from 'registry/intent/search/manifest'
import { manifest as selectAPlan } from 'registry/intent/select-a-plan/manifest'
import { manifest as showTeamMembers } from 'registry/intent/show-team-members/manifest'
import { manifest as signIn } from 'registry/intent/sign-in/manifest'
import { manifest as twoFactorSetup } from 'registry/intent/two-factor-setup/manifest'

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
    intents: [fromManifest(showTeamMembers), fromManifest(inviteTeammates)],
  },
  {
    slug: 'billing',
    name: 'Billing',
    intents: [fromManifest(selectAPlan), fromManifest(checkoutPayment)],
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
  {
    slug: 'feedback',
    name: 'Feedback',
    intents: [fromManifest(emptyState)],
  },
  {
    slug: 'discovery',
    name: 'Discovery',
    intents: [fromManifest(search)],
  },
  {
    slug: 'onboarding',
    name: 'Onboarding',
    intents: [fromManifest(onboardingFlow)],
  },
]

export const allIntents: IntentEntry[] = intentDomains.flatMap((d) => d.intents)

export function getIntentManifest(slug: string): IntentManifest | undefined {
  return allIntents.find((i) => i.slug === slug)?.manifest
}

export function getDomainBySlug(slug: string): IntentDomain | undefined {
  return intentDomains.find((d) => d.slug === slug)
}
