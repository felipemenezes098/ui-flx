import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const tsfRecipesCategory: PatternCategory = {
  slug: 'recipes',
  name: 'Recipes',
  description: 'Ready-to-use forms for common real-world flows.',
  preview: () => null,
  grid: { columns: 2 },
  items: [
    {
      slug: 'tsf-recipes-01',
      name: 'Contact Form',
      description: 'Name, email, topic and message validated on submit.',
    },
    {
      slug: 'tsf-recipes-02',
      name: 'Create Account',
      description: 'Sign up with name, email, a strong password and terms.',
    },
    {
      slug: 'tsf-recipes-03',
      name: 'Sign In',
      description: 'Email and password validated on submit.',
    },
    {
      slug: 'tsf-recipes-04',
      name: 'Newsletter',
      description: 'Subscribe with an email and a delivery frequency.',
    },
  ],
}
