import type {
  IntentDomain,
  IntentEntry,
  IntentManifest,
} from '@/lib/intents/intent-manifest-types'

import { manifest as accountSettings } from 'registry/intents/account/settings/manifest'
import { manifest as deleteAccount } from 'registry/intents/account/delete-account/manifest'
import { manifest as notifications } from 'registry/intents/account/notifications/manifest'
import { manifest as commentThread } from 'registry/intents/collaboration/comment-thread/manifest'
import { manifest as livePresence } from 'registry/intents/collaboration/live-presence/manifest'
import { manifest as shareAccess } from 'registry/intents/collaboration/share-access/manifest'
import { manifest as resetPassword } from 'registry/intents/auth/reset-password/manifest'
import { manifest as manageSubscription } from 'registry/intents/billing/manage-subscription/manifest'
import { manifest as payment } from 'registry/intents/billing/payment/manifest'
import { manifest as selectAPlan } from 'registry/intents/billing/select-a-plan/manifest'
import { manifest as signIn } from 'registry/intents/auth/sign-in/manifest'
import { manifest as twoFactorSetup } from 'registry/intents/auth/two-factor-setup/manifest'
import { manifest as verifyIdentity } from 'registry/intents/auth/verify-identity/manifest'

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
    intents: [
      fromManifest(selectAPlan),
      fromManifest(payment),
      fromManifest(manageSubscription),
    ],
  },
  {
    slug: 'auth',
    name: 'Auth',
    intents: [
      fromManifest(signIn),
      fromManifest(verifyIdentity),
      fromManifest(resetPassword),
      fromManifest(twoFactorSetup),
    ],
  },
  {
    slug: 'account',
    name: 'Account',
    intents: [
      fromManifest(accountSettings),
      fromManifest(notifications),
      fromManifest(deleteAccount),
    ],
  },
  {
    slug: 'collaboration',
    name: 'Collaboration',
    intents: [
      fromManifest(shareAccess),
      fromManifest(commentThread),
      fromManifest(livePresence),
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
