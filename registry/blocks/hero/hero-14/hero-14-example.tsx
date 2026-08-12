import { Hero14, type Hero14Props } from './hero-14'

export const values = {
  title: 'Describe the screen. Ship the block.',
  description:
    'Turn a plain-language brief into a production-ready block you can copy into your app.',
  image:
    'https://images.unsplash.com/photo-1673271044466-b23ea152130f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'A pastel wildflower meadow at golden hour',
  logos: ['Northwind', 'Vertex Labs', 'Solstice', 'Anchorpoint', 'Lumen'],
  animation: 'subtle',
  variant: 'standard',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Browse Blocks',
    link: '',
    size: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'How It Works',
    link: '',
    variant: 'outline',
    size: 'default',
  },
} satisfies Hero14Props

export function Hero14Example() {
  return <Hero14 {...values} />
}
