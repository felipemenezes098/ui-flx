import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { LivePresence3 } from './live-presence-3'
import { LivePresence1 } from './live-presence-1'
import { LivePresenceConcept } from './concept'
import { LivePresence2 } from './live-presence-2'

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
      recommended: true,
      demo: LivePresence1,
    },
    {
      slug: '2',
      name: 'Cursor Trails',
      best: 'Spatial canvases like design tools and whiteboards. Live named cursors show exactly where each person is pointing, turning presence into shared, moment-to-moment awareness.',
      tags: ['Canvas', 'Real-time', 'Spatial'],
      caveat:
        'It only makes sense on a 2D surface and leans on a low-latency channel, so moving cursors are wasted on a plain document or list.',
      patterns: [],
      demo: LivePresence2,
    },
    {
      slug: '3',
      name: 'Activity Status',
      best: 'Structured work where what each person is doing matters. A roster pairs each member with a status and their current location so a lead can see who is active, viewing, or idle.',
      tags: ['Roster', 'Status', 'Detailed'],
      caveat:
        'The detail needs vertical space and frequent updates, so it suits a sidebar or panel rather than a glanceable inline badge.',
      patterns: [],
      demo: LivePresence3,
    },
  ],
}
