import { Hero09, type Hero09Props } from './hero-09'

export const values = {
  title: 'Find the perfect',
  titleLine2: 'block for your app.',
  description:
    'Production-ready UI blocks built with React, Tailwind, and shadcn.',
  searchPlaceholder: 'Search blocks and components',
  searchButtonText: 'Search',
  heroImage:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
  heroAlt: 'Modern minimalist house with clean architecture',
  bottomTitle: 'Blocks',
  bottomTitleLine2: 'crafted with purpose.',
  bottomText:
    'A curated library where clean design, accessibility, and copy-paste code come together.',
  animation: 'subtle',
} satisfies Hero09Props

export function Hero09Example() {
  return <Hero09 {...values} />
}
