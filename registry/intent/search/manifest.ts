import type { IntentManifest } from '@/lib/intent-manifest-types'

import { CommandPaletteDecision } from './command-palette'
import { SearchConcept } from './concept'
import { FacetedFilterDecision } from './faceted-filter'
import { InlineInstantDecision } from './inline-instant'

export const manifest: IntentManifest = {
  slug: 'search',
  name: 'Search',
  problem:
    'Help people find what they need, choosing the surface that fits how much they already know about what they are looking for.',
  domain: 'discovery',
  concept: SearchConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'inline-instant',
      name: 'Inline Instant Results',
      best: 'Users want immediate feedback and the dataset is fast to query as they type.',
      tags: ['Live', 'Low friction', 'Always visible'],
      caveat: 'Needs a fast backend, and the dropdown competes for screen space.',
      patterns: [],
      recommended: true,
      demo: InlineInstantDecision,
    },
    {
      slug: 'command-palette',
      name: 'Command Palette',
      best: 'A power-user app where search also drives navigation and actions from the keyboard.',
      tags: ['⌘K', 'Keyboard-first', 'Search + actions'],
      caveat: 'Hidden behind a shortcut — casual users may never discover it.',
      patterns: [],
      demo: CommandPaletteDecision,
    },
    {
      slug: 'faceted-filter',
      name: 'Faceted Filter',
      best: 'A large catalog where users narrow results by attributes like category or availability.',
      tags: ['Filters', 'Large catalogs', 'Precise'],
      caveat: 'Heavier UI that needs dedicated space — overkill for small datasets.',
      patterns: [],
      demo: FacetedFilterDecision,
    },
  ],
}
