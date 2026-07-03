import { Hero06, type Hero06Props } from './hero-06'

export const values = {
  title: 'Ship your best work,',
  highlight: 'without the busywork.',
  description:
    'One workspace to plan, build, and launch. No context switching, no clutter.',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Start for free',
    link: '',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'Book a demo',
    link: '',
    variant: 'outline',
  },
  logosLabel: 'Trusted by fast-moving teams',
  logos: ['Acme', 'Globex', 'Initech', 'Umbrella'],
} satisfies Hero06Props

export function Hero06Example() {
  return <Hero06 {...values} />
}
