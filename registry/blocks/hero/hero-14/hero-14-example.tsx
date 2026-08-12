import { Hero14, type Hero14Props } from './hero-14'

export const values = {
  title: 'Describe the screen. Ship the block.',
  description:
    'Flexnative turns a plain-language brief into a production-ready block, with wired props and sensible defaults, so you copy the code straight into your app.',
  image:
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1600&auto=format&fit=crop',
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
