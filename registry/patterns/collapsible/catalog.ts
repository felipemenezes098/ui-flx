import { CollapsibleConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const collapsibleCategory: PatternCategory = {
  slug: 'collapsible',
  name: 'Collapsible',
  description: 'Show and hide a section of content with a trigger.',
  preview: CollapsibleConcept,
  items: [
    { slug: 'collapsible-01', name: 'Basic', description: 'Canonical starred-repos toggle with a chevron trigger.' },
    { slug: 'collapsible-02', name: 'FAQ list', description: 'Stacked question rows; each answer expands with an animated chevron.' },
    { slug: 'collapsible-03', name: 'File tree', description: 'Nested folders built from collapsible rows, with folder icons that swap on open.' },
    { slug: 'collapsible-04', name: 'Read more', description: 'Truncated paragraph reveals the rest; trigger label swaps to Show less.' },
    { slug: 'collapsible-05', name: 'Sidebar nav group', description: 'Collapsible navigation sections with sub-items and a rotating chevron.' },
    { slug: 'collapsible-06', name: 'Advanced options', description: 'Form reveals extra fields behind an Advanced options toggle.' },
  ],
}
