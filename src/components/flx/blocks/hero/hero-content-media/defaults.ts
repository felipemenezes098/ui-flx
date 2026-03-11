import type { HeroContentMediaProps } from './types'

export const heroContentMediaDefaultProps = {
  title: 'From idea to launch, without the friction.',
  description:
    'Focus on what matters. We handle the structure, theming, and responsive patterns so you can ship faster.',
  image: {
    src: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Hero — product experience',
  },
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get started',
    link: '/',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'View documentation',
    link: '/docs',
    variant: 'outline',
  },
} satisfies HeroContentMediaProps
