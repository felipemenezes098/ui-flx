import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { ShareAccessConcept } from './concept'
import { ShareAccess1 } from './share-access-1'
import { ShareAccess2 } from './share-access-2'
import { ShareAccess3 } from './share-access-3'

export const manifest: IntentManifest = {
  slug: 'share-access',
  name: 'Share Access',
  problem:
    'Let an owner give other people access to a resource and decide what each of them can do with it.',
  concept: ShareAccessConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Link with Scope',
      best: 'Fast, low-friction sharing where reach matters more than control. One link opens the resource for anyone who has it, scoped to a permission and an optional expiry.',
      tags: ['Public link', 'Low friction', 'Scoped'],
      caveat:
        'Anyone who forwards the link passes the access along, so it is the weakest trust model and wrong for anything sensitive.',
      patterns: [],
      styles: { previewSize: 'sm' },
      recommended: true,
      demo: ShareAccess1,
    },
    {
      slug: '2',
      name: 'People Picker',
      best: 'Explicit collaboration where each person gets a named seat. Invite by email, set a per-person role, and change or revoke any one of them later.',
      tags: ['Invite', 'Per-person roles', 'Explicit'],
      caveat:
        'Every collaborator must be added by hand, so it does not scale to a large or constantly changing audience the way a link does.',
      patterns: [],
      demo: ShareAccess2,
    },
    {
      slug: '3',
      name: 'Request Access',
      best: 'Closed resources where the owner stays in control. People ask for access with a note, and the owner grants a role or denies, one request at a time.',
      tags: ['Approval', 'Owner-gated', 'Pull'],
      caveat:
        'It puts a manual step between the user and the work, so it adds latency and only fits when gatekeeping is worth the wait.',
      patterns: [],
      demo: ShareAccess3,
    },
  ],
}
