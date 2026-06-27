import { Hero06, type Hero06Props } from './hero-06'

export const values = {
  title: 'The platform for teams who',
  highlight: 'ship without the busywork.',
  description:
    'Plan, build, and launch from a single workspace. Less context switching, more momentum — with the polish your customers expect.',
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
  highlights: ['No credit card', 'Free 14-day trial', 'Cancel anytime'],
  preview: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    alt: 'Product dashboard overview',
  },
  logosLabel: 'Trusted by teams building the future',
  logos: ['Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli'],
} satisfies Hero06Props

export function Hero06Example() {
  return <Hero06 {...values} />
}
