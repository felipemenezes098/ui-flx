import { BadgeConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const badgeCategory: PatternCategory = {
  slug: 'badge',
  name: 'Badge',
  description: 'Compact labels for status, counts, and metadata.',
  preview: BadgeConcept,
  items: [
    { slug: 'badge-01', name: 'Basic', description: 'A single default badge.' },
    {
      slug: 'badge-02',
      name: 'Variants',
      description:
        'All six variants side-by-side: default, secondary, destructive, outline, ghost, link.',
    },
    {
      slug: 'badge-03',
      name: 'With icon',
      description: 'Leading verified icon before the label.',
    },
    {
      slug: 'badge-04',
      name: 'With status dot',
      description: 'A colored presence dot beside an outline label.',
    },
    {
      slug: 'badge-05',
      name: 'Status colors',
      description: 'Tinted success, warning, error, and info states.',
    },
    {
      slug: 'badge-06',
      name: 'Count',
      description: 'Pill-shaped numeric counts with tabular figures.',
    },
    {
      slug: 'badge-07',
      name: 'As link',
      description:
        'render prop renders the badge as an anchor with a trailing icon.',
    },
    {
      slug: 'badge-08',
      name: 'Removable',
      description: 'Dismissible tag chips with a trailing remove button.',
    },
    {
      slug: 'badge-09',
      name: 'With avatar',
      description: 'Assignee chip with a leading avatar inside the badge.',
    },
    {
      slug: 'badge-10',
      name: 'Sizes',
      description: 'Small, default, and large sizes via className.',
    },
    {
      slug: 'badge-11',
      name: 'Trend delta',
      description: 'Up and down arrows with tinted gain / loss percentages.',
    },
    {
      slug: 'badge-12',
      name: 'Icon only',
      description: 'Round icon-only badges across variants.',
    },
    {
      slug: 'badge-13',
      name: 'Tag list',
      description: 'A wrapping group of outline badges as tags.',
    },
  ],
}
