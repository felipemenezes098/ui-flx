import type { IntentManifest } from '@/lib/intent-manifest-types'

import { AvatarGroupDecision } from './avatar-group'
import { CompactListDecision } from './compact-list'
import { TeammatePickerDecision } from './teammate-picker'

export const manifest: IntentManifest = {
  slug: 'show-team-members',
  name: 'Show Team Members',
  problem:
    'Display the members of a project or task in a way that fits the space you have.',
  domain: 'collaboration',
  decisions: [
    {
      slug: 'avatar-group',
      name: 'Avatar Group',
      best: 'Space is tight and quick recognition matters more than names.',
      tags: ['Compact', 'Inline', 'Scales'],
      caveat: 'Names appear only on hover.',
      patterns: ['avatar-09', 'avatar-11'],
      recommended: true,
      demo: AvatarGroupDecision,
    },
    {
      slug: 'compact-list',
      name: 'Compact List',
      best: 'Names and roles need to be readable without interaction.',
      tags: ['Names visible', 'Accessible'],
      caveat: 'Takes more vertical space.',
      patterns: ['item-12'],
      demo: CompactListDecision,
    },
    {
      slug: 'teammate-picker',
      name: 'Teammate Picker',
      best: 'The user can add or change who is on the team.',
      tags: ['Selectable', 'Action'],
      caveat: 'Too heavy for display-only.',
      patterns: ['dialog-11'],
      demo: TeammatePickerDecision,
    },
  ],
}
