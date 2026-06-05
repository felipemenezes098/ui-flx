import { EmptyConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const emptyCategory: PatternCategory = {
  slug: 'empty',
  name: 'Empty',
  description: 'Placeholder states when there is nothing to show.',
  preview: EmptyConcept,
  grid: { columns: 2 },
  items: [
    { slug: 'empty-01', name: 'Basic', description: 'Icon, title, and description for an empty list.' },
    { slug: 'empty-02', name: 'With actions', description: 'First-run state with primary and secondary CTAs.' },
    { slug: 'empty-03', name: 'No results', description: 'Search empty state with a clear-filters action.' },
    { slug: 'empty-04', name: 'Avatar group', description: 'Bordered empty team card with an avatar stack and invite.' },
    { slug: 'empty-05', name: 'In dialog', description: 'Empty inbox state composed inside a Dialog.' },
  ],
}
