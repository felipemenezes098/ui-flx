import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { ManageSubscription3 } from './manage-subscription-3'
import { ManageSubscription2 } from './manage-subscription-2'
import { ManageSubscriptionConcept } from './concept'
import { ManageSubscription1 } from './manage-subscription-1'

export const manifest: IntentManifest = {
  slug: 'manage-subscription',
  name: 'Manage Subscription',
  problem:
    'Let a subscriber see their current plan and change or cancel it from one place.',
  concept: ManageSubscriptionConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Plan Overview',
      best: 'The default home for an active subscription. One card shows the plan, price, renewal date, and usage, with change and cancel actions a click away.',
      tags: ['Summary', 'Status', 'Self-serve'],
      caveat:
        'It surfaces state but does not perform the change itself, so it always hands off to a change or cancel flow to finish the job.',
      patterns: [],
      recommended: true,
      demo: ManageSubscription1,
    },
    {
      slug: '2',
      name: 'Change Plan',
      best: 'Upgrades and downgrades where the cost impact matters. Selectable tiers with a live proration note tell the user exactly what they pay before they confirm.',
      tags: ['Upgrade', 'Proration', 'Compare'],
      caveat:
        'Proration math and effective dates are easy to get wrong, so the copy must match what billing actually charges or trust erodes fast.',
      patterns: [],
      demo: ManageSubscription2,
    },
    {
      slug: '3',
      name: 'Cancel Flow',
      best: 'The exit path when a user wants out. A retention offer followed by a short reason step gives one honest chance to save the account and captures why they left.',
      tags: ['Retention', 'Churn', 'Offboarding'],
      caveat:
        'Push the save too hard and it reads as a dark pattern, so the cancel action must stay obvious and never be buried behind the offer.',
      patterns: [],
      demo: ManageSubscription3,
    },
  ],
}
