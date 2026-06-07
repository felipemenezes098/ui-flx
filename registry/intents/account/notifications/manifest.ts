import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { Notifications1 } from './notifications-1'
import { NotificationsConcept } from './concept'
import { Notifications3 } from './notifications-3'
import { Notifications2 } from './notifications-2'

export const manifest: IntentManifest = {
  slug: 'notifications',
  name: 'Notifications',
  problem:
    'Let a signed-in user control which notifications they receive and through which channels.',
  concept: NotificationsConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Channel Matrix',
      best: 'The default when each notification type can arrive on more than one channel, like email, push, and SMS. A grid puts type against channel so a user sees and sets every combination on one screen.',
      tags: ['Grid', 'Multi-channel', 'Granular'],
      caveat:
        'The matrix grows wide fast and reads as dense, so it strains on small screens and overwhelms when there is really only one channel to toggle.',
      patterns: [],
      recommended: true,
      styles: { span: 'full' },
      demo: Notifications1,
    },
    {
      slug: '2',
      name: 'Grouped Toggles',
      best: 'A single delivery channel where notifications split into a few clear categories. Sectioned switch rows stay scannable and map cleanly to a narrow column or a settings tab.',
      tags: ['Switches', 'Grouped', 'Compact'],
      caveat:
        'One switch per item means no per-channel control, so it cannot express that the same alert should email but not push.',
      patterns: [],
      demo: Notifications2,
    },
    {
      slug: '3',
      name: 'Digest Frequency',
      best: 'High-volume notifications where the real choice is cadence, not on or off. A per-category frequency selector lets a user batch noisy updates into a daily or weekly digest instead of muting them.',
      tags: ['Cadence', 'Digest', 'Per-category'],
      caveat:
        'Adding a frequency to every row is more decision than a simple toggle, so it is overkill when notifications are low volume or time critical.',
      patterns: [],
      demo: Notifications3,
    },
  ],
}
