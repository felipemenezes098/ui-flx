import type { ComponentType } from 'react'

import type {
  IntentDecisionStyles,
  IntentManifest,
} from '@/lib/intents/intent-manifest-types'
import { manifest as notifications } from 'registry/intents/account/notifications/manifest'
import { manifest as signIn } from 'registry/intents/auth/sign-in/manifest'
import { manifest as payment } from 'registry/intents/billing/payment/manifest'
import { manifest as selectAPlan } from 'registry/intents/billing/select-a-plan/manifest'
import { manifest as commentThread } from 'registry/intents/collaboration/comment-thread/manifest'
import { manifest as shareAccess } from 'registry/intents/collaboration/share-access/manifest'

export interface ShowcaseIntent {
  slug: string
  domain: string
  prompt: string
  name: string
  decision: string
  rationale: string
  tags: string[]
  styles?: IntentDecisionStyles
  Demo: ComponentType
}

function pick(
  manifest: IntentManifest,
  domain: string,
  prompt: string,
): ShowcaseIntent {
  const decision =
    manifest.decisions.find((d) => d.recommended) ?? manifest.decisions[0]

  return {
    slug: manifest.slug,
    domain,
    prompt,
    name: manifest.name,
    decision: decision.name,
    rationale: decision.best,
    tags: decision.tags,
    styles: decision.styles,
    Demo: decision.demo,
  }
}

export const showcaseIntents: ShowcaseIntent[] = [
  pick(signIn, 'Auth', 'I need returning users to sign in'),
  pick(payment, 'Billing', 'Let a customer pay for their order'),
  pick(selectAPlan, 'Billing', 'Help people pick a pricing plan'),
  pick(commentThread, 'Collaboration', 'Add comments to a document'),
  pick(shareAccess, 'Collaboration', 'Let an owner share access to a file'),
  pick(notifications, 'Account', 'Manage notification preferences'),
]
