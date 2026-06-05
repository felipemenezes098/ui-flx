import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { AudienceSegmentsDecision } from './audience-segments'
import { ComparisonTableDecision } from './comparison-table'
import { SelectAPlanConcept } from './concept'
import { SpotlightRecommendationDecision } from './spotlight-recommendation'
import { TieredCardsDecision } from './tiered-cards'
import { UsageSliderDecision } from './usage-slider'

export const manifest: IntentManifest = {
  slug: 'select-a-plan',
  name: 'Select a Plan',
  problem:
    'Help users compare paid tiers and commit to the one that fits, without hiding the trade-offs.',
  domain: 'billing',
  concept: SelectAPlanConcept,
  grid: { columns: 3 },
  decisions: [
    {
      slug: 'tiered-cards',
      name: 'Tiered Cards',
      best: 'The default for most pricing pages. Scannable side-by-side tiers with a clear recommended plan and a monthly/yearly toggle.',
      tags: ['Pricing', 'Marketing', 'Toggle'],
      caveat:
        'Gets cramped past 3 to 4 tiers and is weak for deep feature-by-feature comparison.',
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
      styles: { span: 'full' },
      demo: ComparisonTableDecision,
    },
    {
      slug: 'audience-segments',
      name: 'Audience Segments',
      best: 'When one catalog serves distinct buyer types. A segmented control swaps to the plan tailored for Individual, Team, or Enterprise so each visitor sees only what fits.',
      tags: ['Segmented', 'Personalized', 'Toggle'],
      caveat:
        'Hides the other segments, so buyers who span two profiles lose the side-by-side view.',
      patterns: [],
      demo: AudienceSegmentsDecision,
    },
    {
      slug: 'usage-slider',
      name: 'Usage Slider',
      best: 'When price scales with one usage metric like seats or requests. Dragging the slider previews live cost and auto-selects the matching tier, turning pricing into an interactive answer.',
      tags: ['Interactive', 'Usage-based', 'Calculator'],
      caveat:
        'Only models a single dimension, so plans that differ by features rather than volume do not map cleanly.',
      patterns: [],
      demo: UsageSliderDecision,
    },
    {
      slug: 'spotlight-recommendation',
      name: 'Spotlight Recommendation',
      best: 'Post-trial or when you already know the best fit. Leads with one personalized plan plus social proof to cut choice paralysis, with all plans one tap away.',
      tags: ['Personalized', 'Social proof', 'Conversion'],
      caveat:
        'Leans on knowing the user; a wrong recommendation feels pushy and buries the alternatives.',
      patterns: [],
      demo: SpotlightRecommendationDecision,
    },
  ],
}
