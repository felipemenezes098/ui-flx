import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const rhfRecipesCategory: PatternCategory = {
  slug: 'recipes',
  name: 'Recipes',
  description: 'Ready-to-use forms for common real-world flows.',
  preview: () => null,
  grid: { columns: 2 },
  items: [
    {
      slug: 'rhf-recipes-01',
      name: 'Contact Form',
      description: 'Name, email, topic and message validated on submit.',
    },
    {
      slug: 'rhf-recipes-02',
      name: 'Create Account',
      description: 'Sign up with name, email, a strong password and terms.',
    },
    {
      slug: 'rhf-recipes-03',
      name: 'Sign In',
      description: 'Email and password validated on submit.',
    },
    {
      slug: 'rhf-recipes-04',
      name: 'Newsletter',
      description: 'Subscribe with an email and a delivery frequency.',
    },
  ],
}
