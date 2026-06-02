import type { IntentManifest } from '@/lib/intent-manifest-types'

import { BulkCsvDecision } from './bulk-csv'
import { InviteTeammatesConcept } from './concept'
import { EmailInviteListDecision } from './email-invite-list'
import { InviteLinkDecision } from './invite-link'

export const manifest: IntentManifest = {
  slug: 'invite-teammates',
  name: 'Invite Teammates',
  problem:
    'Get new people into a workspace, balancing how much control you keep over who joins and what role they get.',
  domain: 'collaboration',
  concept: InviteTeammatesConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'email-invite-list',
      name: 'Email Invite List',
      best: 'You want to control exactly who joins and assign each person a role up front.',
      tags: ['Per-person roles', 'Controlled', 'Auditable'],
      caveat: 'Every invite is manual — tedious past a handful of people.',
      patterns: [],
      recommended: true,
      demo: EmailInviteListDecision,
    },
    {
      slug: 'invite-link',
      name: 'Shareable Link',
      best: 'You want fast, open growth and trust anyone with the link to join.',
      tags: ['One link', 'Self-serve', 'Fast'],
      caveat:
        'Less control over who actually joins, and a leaked link is hard to take back.',
      patterns: [],
      demo: InviteLinkDecision,
    },
    {
      slug: 'bulk-csv',
      name: 'Bulk CSV Import',
      best: 'You are onboarding or migrating a large team in one batch.',
      tags: ['Batch', 'Scales', 'Import'],
      caveat: 'Error-prone to prepare and offers no per-person personalization.',
      patterns: [],
      demo: BulkCsvDecision,
    },
  ],
}
