import type { IntentManifest } from '@/lib/intent-manifest-types'

import { EmptyStateConcept } from './concept'
import { ErrorStateDecision } from './error-state'
import { FirstRunDecision } from './first-run'
import { NoResultsDecision } from './no-results'

export const manifest: IntentManifest = {
  slug: 'empty-state',
  name: 'Empty State',
  problem:
    'Turn a screen with no data into a useful moment — orient the user and point them at the one thing to do next.',
  domain: 'feedback',
  concept: EmptyStateConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'first-run',
      name: 'First Run',
      best: 'A brand-new account or section that is empty by nature — give it an icon, a one-line why, and a single primary action to create the first item.',
      tags: ['Onboarding', 'Single CTA'],
      caveat:
        'Built around one clear next step; if the screen has several equally-valid actions this oversimplifies and hides them.',
      patterns: [],
      recommended: true,
      demo: FirstRunDecision,
    },
    {
      slug: 'error-state',
      name: 'Error State',
      best: 'When the screen is empty because a load failed — explain it is a temporary error, reassure the data is safe, and lead with a Retry action plus a support escape hatch.',
      tags: ['Error', 'Retry', 'Recovery'],
      caveat:
        'Strictly for failure cases; using it for a genuine first-run or zero-results state would wrongly alarm the user.',
      patterns: [],
      demo: ErrorStateDecision,
    },
    {
      slug: 'no-results',
      name: 'No Results',
      best: 'A search or filter that returned nothing — explain why it is empty and offer recovery actions (clear filters, reset search) rather than a creation CTA.',
      tags: ['Search', 'Filters', 'Recovery'],
      caveat:
        'Assumes the emptiness is temporary and user-caused; not a substitute for a true first-run welcome.',
      patterns: [],
      demo: NoResultsDecision,
    },
  ],
}
