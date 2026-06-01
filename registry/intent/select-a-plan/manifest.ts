import type { IntentManifest } from '@/lib/intent-manifest-types'

import { ComparisonTableDecision } from './comparison-table'
import { SelectAPlanConcept } from './concept'
import { TieredCardsDecision } from './tiered-cards'
import { UpgradePanelDecision } from './upgrade-panel'

export const manifest: IntentManifest = {
  slug: 'select-a-plan',
  name: 'Select a Plan',
  problem:
    'Help users compare paid tiers and commit to the one that fits, without hiding the trade-offs.',
  domain: 'billing',
  concept: SelectAPlanConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'tiered-cards',
      name: 'Tiered Cards',
      best: 'The default for most pricing pages — scannable side-by-side tiers with a clear recommended plan and a monthly/yearly toggle.',
      tags: ['Pricing', 'Marketing', 'Toggle'],
      caveat:
        'Gets cramped past 3–4 tiers and is weak for deep feature-by-feature comparison.',
      patterns: [],
      recommended: true,
      styles: { span: 'full' },
      demo: TieredCardsDecision,
    },
    {
      slug: 'comparison-table',
      name: 'Comparison Table',
      best: 'Feature-heavy products where buyers decide by checking specific capabilities row by row.',
      tags: ['Dense', 'Feature matrix'],
      caveat:
        'Visually heavy and degrades on mobile; can overwhelm users who just want the obvious pick.',
      patterns: [],
      demo: ComparisonTableDecision,
    },
    {
      slug: 'upgrade-panel',
      name: 'Upgrade Panel',
      best: 'In-app contextual upsell shown when a user hits a limit — focused on the single next tier.',
      tags: ['In-app', 'Contextual', 'Upsell'],
      caveat:
        'Shows only one upgrade path, so it cannot serve as a full plan picker.',
      patterns: [],
      demo: UpgradePanelDecision,
    },
  ],
}
