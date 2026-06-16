import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const tsfAdvancedCategory: PatternCategory = {
  slug: 'advanced',
  name: 'Advanced',
  description:
    'Composed forms: dynamic field arrays, nested data and multi-group state.',
  preview: () => null,
  grid: { columns: 1 },
  items: [
    {
      slug: 'tsf-advanced-01',
      name: 'Dynamic Field Array',
      description:
        'Repeatable member rows with add/remove via array mode and per-item validation.',
    },
  ],
}
