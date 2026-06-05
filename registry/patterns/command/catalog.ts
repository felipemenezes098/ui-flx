import { CommandConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const commandCategory: PatternCategory = {
  slug: 'command',
  name: 'Command',
  description: 'Fast, composable command menu and searchable pickers.',
  preview: CommandConcept,
  items: [
    { slug: 'command-01', name: 'Basic', description: 'Canonical command menu with grouped items, icons, and shortcuts.' },
    { slug: 'command-02', name: 'Command dialog', description: 'Spotlight-style ⌘K palette toggled by a button or keyboard shortcut.' },
    { slug: 'command-03', name: 'Global search', description: 'Rich search dialog with recent, pages, and people plus a hint footer.' },
    { slug: 'command-04', name: 'Async loading', description: 'Debounced search with skeleton rows while loading, an empty state, and shouldFilter disabled for server-driven results.' },
    { slug: 'command-05', name: 'Combobox', description: 'Popover + Command framework picker with a check mark.' },
    { slug: 'command-06', name: 'Combobox with clear', description: 'Selected value shows an inline X that clears without reopening.' },
    { slug: 'command-07', name: 'Multiple — chips', description: 'Multi-select showing every choice as a removable badge chip in the trigger.' },
    { slug: 'command-14', name: 'Multiple — count summary', description: 'Trigger shows "first, +N" with a separate button to clear all.' },
    { slug: 'command-15', name: 'Multiple — faceted filter', description: 'Dashed trigger with count badges, checkbox rows, facet counts, and a clear footer.' },
    { slug: 'command-08', name: 'Grouped picker', description: 'Options split into labeled groups with separators, demonstrated with timezones organized by region.' },
    { slug: 'command-09', name: 'Assignee picker', description: 'Avatars with name and email subtext in the trigger and options.' },
    { slug: 'command-10', name: 'Status picker', description: 'Ghost trigger with a colored status dot, issue-tracker style.' },
    { slug: 'command-11', name: 'With label', description: 'Combobox composed with an accessible field Label.' },
    { slug: 'command-12', name: 'React Hook Form + Zod', description: 'Controller binds the combobox to RHF; Zod resolver drives FieldError on submit.' },
    { slug: 'command-13', name: 'TanStack Form + Zod', description: 'form.Field wires the combobox; Zod onSubmit validator surfaces FieldError when touched.' },
  ],
}
