import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const rhfRulesCategory: PatternCategory = {
  slug: 'rules',
  name: 'Rules',
  description:
    'Validation logic: format checks, strength rules and cross-field constraints.',
  preview: () => null,
  grid: { columns: 2 },
  items: [
    {
      slug: 'rhf-rules-01',
      name: 'Password Confirmation',
      description: 'Pick a strong password and confirm it matches.',
    },
    {
      slug: 'rhf-rules-02',
      name: 'Email Address',
      description: 'Validate an email address with instant feedback.',
      isNew: true,
    },
    {
      slug: 'rhf-rules-03',
      name: 'Number Range',
      description: 'Keep a numeric input within a sensible range.',
      isNew: true,
    },
    {
      slug: 'rhf-rules-04',
      name: 'Character Limit',
      description: 'Cap text length with a live character counter.',
      isNew: true,
    },
  ],
}
