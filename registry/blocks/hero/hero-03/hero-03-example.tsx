import { Hero03, type Hero03Props } from './hero-03'

export const values = {
  title: 'Ideas worth sharing with the world.',
  description:
    'Turn rough notes into polished stories. Write, refine, and publish from one calm workspace built for focus.',
  portraitImage:
    'https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  portraitAlt: 'Alt',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get started',
    link: '',
    variant: 'default',
    size: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'Learn more',
    link: '',
    variant: 'link',
  },
} satisfies Hero03Props

export function Hero03Example() {
  return <Hero03 {...values} />
}
