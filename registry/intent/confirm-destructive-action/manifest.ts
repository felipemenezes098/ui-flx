import type { IntentManifest } from '@/lib/intent-manifest-types'

import { ConfirmDestructiveActionConcept } from './concept'
import { PopoverConfirmDecision } from './popover-confirm'
import { SimpleDialogDecision } from './simple-dialog'
import { TypeToConfirmDecision } from './type-to-confirm'

export const manifest: IntentManifest = {
  slug: 'confirm-destructive-action',
  name: 'Confirm Destructive Action',
  problem:
    'Guard a permanent or high-stakes operation so users cannot trigger it by accident.',
  domain: 'actions',
  concept: ConfirmDestructiveActionConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'simple-dialog',
      name: 'Simple Dialog',
      best: 'Most destructive actions — gives the user a clear pause before committing.',
      tags: ['Modal', 'Standard', 'Accessible'],
      caveat:
        'Interrupts the current flow; avoid for low-stakes or easily reversible actions.',
      patterns: ['dialog-01', 'dialog-03'],
      recommended: true,
      demo: SimpleDialogDecision,
    },
    {
      slug: 'type-to-confirm',
      name: 'Type to Confirm',
      best: 'Critical data loss where you want proof of intent, such as deleting an account or workspace.',
      tags: ['High-stakes', 'Friction'],
      caveat:
        'Adds deliberate friction — reserve for account deletion or bulk erasure, not everyday removes.',
      patterns: ['dialog-13'],
      demo: TypeToConfirmDecision,
    },
    {
      slug: 'popover-confirm',
      name: 'Popover Confirm',
      best: 'List item removal where a full modal would feel too heavy.',
      tags: ['Inline', 'Lightweight'],
      caveat:
        'Easier to dismiss accidentally; not suited for irreversible bulk actions.',
      patterns: [],
      demo: PopoverConfirmDecision,
    },
  ],
}
