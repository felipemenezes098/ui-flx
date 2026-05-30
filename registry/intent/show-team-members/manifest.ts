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
      components: ['Avatar', 'Tooltip', 'Button'],
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
      components: ['Avatar', 'Item', 'Badge'],
      demo: CompactListDecision,
    },
    {
      slug: 'teammate-picker',
      name: 'Teammate Picker',
      best: 'The user can add or change who is on the team.',
      tags: ['Selectable', 'Action'],
      caveat: 'Too heavy for display-only.',
      patterns: ['dialog-11'],
      components: ['Avatar', 'Button', 'Separator'],
      demo: TeammatePickerDecision,
    },
  ],
  exports: {
    prompt: `Intent: Show Team Members

Goal: Display project members efficiently in limited space.

Decision: Use an Avatar Group with tooltips.

Reasoning:
- Avatar Group is compact enough to sit inline next to other elements.
- Overlapping avatars communicate membership at a glance.
- Tooltip on each avatar reveals the name without consuming space.
- Overflow count (+N) handles any list size.

Patterns to use:
- avatar-11 (Group with tooltip)

Components: Avatar, Tooltip

Avoid:
- Full member lists unless names must always be visible.
- Modal pickers unless the user needs to assign or change members.`,

    skill: `# Show Team Members

## Intent
Display team members compactly. Start from available space and whether names need to be always visible.

## Decision tree

| Context | Decision | Pattern |
|---|---|---|
| Inline, space-limited | Avatar Group + tooltips | avatar-11 |
| Names must be visible | Compact list | item-12 |
| User needs to assign/change | Teammate picker dialog | dialog-11 |

## Recommended default
Use Avatar Group (avatar-11) unless names are a hard requirement.

## Anti-patterns
- Do not use a full table to show members in a sidebar widget.
- Do not use a dialog if the task is display-only.`,

    spec: `# Component Spec: Team Members Display

## Variants

### AvatarGroup (default)
- Render overlapping avatars, max 5 visible
- Show overflow count badge if members > 5
- Tooltip with full name on hover
- Props: members: { id, name, avatarUrl? }[]

### CompactList
- Render Item rows: avatar + name + optional role
- Scrollable if > 8 members
- Props: members: { id, name, role?, avatarUrl? }[]

### TeammatePicker
- Trigger button with current count
- Searchable list inside dialog
- Multi-select with checkboxes
- Confirm + Cancel footer
- Props: members[], selected[], onConfirm(ids[])`,

    rules: `# Interface Rules: Show Team Members

- Default to Avatar Group when showing members inside a card, table cell, or header.
- Switch to Compact List only when the member names must be immediately readable.
- Use the Teammate Picker only when the user can change assignments.
- Always show an overflow count when the list is truncated.
- Always provide name via tooltip on Avatar Group items for accessibility.`,
  },
}
