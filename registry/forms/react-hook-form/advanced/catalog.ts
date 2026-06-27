import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const rhfAdvancedCategory: PatternCategory = {
  slug: 'advanced',
  name: 'Advanced',
  description:
    'Composed forms: dynamic field arrays, nested data and multi-group state.',
  preview: () => null,
  grid: { columns: 1 },
  items: [
    {
      slug: 'rhf-advanced-01',
      name: 'Dynamic Field Array',
      description:
        'Start from an empty state, then add and remove teammate rows with per-item validation.',
    },
    {
      slug: 'rhf-advanced-02',
      name: 'Form in a Dialog',
      description:
        'Build an invoice while a dialog validates each line item against its own schema.',
    },
  ],
}
