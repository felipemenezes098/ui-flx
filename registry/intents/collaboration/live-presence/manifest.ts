import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { LivePresence3 } from './live-presence-3'
import { LivePresence1 } from './live-presence-1'
import { LivePresenceConcept } from './concept'

export const manifest: IntentManifest = {
  slug: 'live-presence',
  name: 'Live Presence',
  problem:
    'Show who else is in a shared space right now so collaborators feel each other and avoid colliding.',
  concept: LivePresenceConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Avatar Stack',
      best: 'The default ambient signal in a header or toolbar. A row of overlapping faces with an overflow count tells everyone who is here without taking real estate or stealing focus.',
      tags: ['Ambient', 'Compact', 'Header'],
      caveat:
        'It answers who but not where or what, so on its own it cannot stop two people editing the same thing at once.',
      patterns: [],
      styles: { previewSize: 'sm' },
      recommended: true,
      demo: LivePresence1,
    },
    {
      slug: '3',
      name: 'Activity Status',
      best: 'Structured work where what each person is doing matters. A roster pairs each member with a status and their current location so a lead can see who is active, viewing, or idle.',
      tags: ['Roster', 'Status', 'Detailed'],
      caveat:
        'The detail needs vertical space and frequent updates, so it suits a sidebar or panel rather than a glanceable inline badge.',
      patterns: [],
      styles: { previewSize: 'sm', span: 'full' },
      demo: LivePresence3,
    },
  ],
}
