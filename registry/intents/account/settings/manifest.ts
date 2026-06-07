import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { SettingsConcept } from './concept'
import { Settings3 } from './settings-3'
import { Settings4 } from './settings-4'
import { Settings2 } from './settings-2'
import { Settings1 } from './settings-1'

export const manifest: IntentManifest = {
  slug: 'settings',
  name: 'Settings',
  problem:
    'Let a signed-in user view and change their settings and preferences across more than one category.',
  concept: SettingsConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Tabbed Sections',
      best: 'The default for three to six setting groups. Tabs keep everything on one screen and one URL, so switching between profile, notifications, and billing is instant and the layout never feels deep.',
      tags: ['Tabs', 'Single page', 'Grouped'],
      caveat:
        'Tabs hide every group but the active one, so discovery suffers once you pass roughly six tabs or need to search across them.',
      patterns: [],
      recommended: true,
      styles: { span: 'full' },
      demo: Settings1,
    },
    {
      slug: '2',
      name: 'Sidebar Layout',
      best: 'Settings with many categories, like an enterprise or workspace product. A persistent left nav scales to a dozen sections, supports nesting, and gives each area its own focused page.',
      tags: ['Navigation', 'Scalable', 'Multi-page'],
      caveat:
        'The nav chrome is heavy and demands real width, so it is overkill for a handful of settings and cramped on small screens.',
      patterns: [],
      styles: { span: 'full' },
      demo: Settings2,
    },
    {
      slug: '3',
      name: 'Inline Edit',
      best: 'Profile and account fields a user changes one at a time. Each row shows its current value and reveals an input in place on edit, so the page stays readable and changes feel low risk.',
      tags: ['Edit in place', 'Rows', 'Focused'],
      caveat:
        'Editing one field at a time is slow for bulk changes, and a row in edit mode shifts layout, so it suits short field lists over dense forms.',
      patterns: [],
      demo: Settings3,
    },
    {
      slug: '4',
      name: 'Preferences Dialog',
      best: 'Lightweight app preferences reached from a menu or avatar, like theme, sound, and density. A dialog overlays the current screen so users adjust a switch and return without losing context.',
      tags: ['Dialog', 'Overlay', 'Quick'],
      caveat:
        'A modal interrupts the current task and has limited room, so reserve it for a small set of toggles rather than a full settings surface.',
      patterns: [],
      demo: Settings4,
    },
  ],
}
