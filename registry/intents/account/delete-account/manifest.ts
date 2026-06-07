import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { DeleteAccountConcept } from './concept'
import { DeleteAccount1 } from './delete-account-1'
import { DeleteAccount3 } from './delete-account-3'
import { DeleteAccount2 } from './delete-account-2'

export const manifest: IntentManifest = {
  slug: 'delete-account',
  name: 'Delete Account',
  problem:
    'Let a signed-in user delete or deactivate their account with enough friction to prevent accidental loss.',
  concept: DeleteAccountConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Confirm Dialog',
      best: 'The default for a destructive action that runs immediately. A danger zone button opens a dialog that asks the user to type a confirmation word, so deletion takes a deliberate second step.',
      tags: ['Dialog', 'Type to confirm', 'Danger zone'],
      caveat:
        'A single dialog gives no room to explain consequences or capture a reason, so it suits accounts where the loss is small and obvious.',
      patterns: [],
      recommended: true,
      demo: DeleteAccount1,
    },
    {
      slug: '2',
      name: 'Multi-Step',
      best: 'High-stakes deletions where the user should understand exactly what they lose. A short wizard walks through reason, consequences, and a final typed confirmation before anything is removed.',
      tags: ['Wizard', 'Stepped', 'Explicit'],
      caveat:
        'Several screens add friction that frustrates a user who is certain, so reserve it for accounts with real, irreversible data loss.',
      patterns: [],
      demo: DeleteAccount2,
    },
    {
      slug: '3',
      name: 'Grace Period',
      best: 'Products where users may regret leaving and you want them back. Deletion is scheduled rather than instant, and a clear reactivation window lets a returning user restore everything with one sign-in.',
      tags: ['Soft delete', 'Reactivation', 'Scheduled'],
      caveat:
        'Holding data after a delete request adds cost and can clash with strict privacy or erasure rules, so the retention window must be disclosed.',
      patterns: [],
      demo: DeleteAccount3,
    },
  ],
}
