import { Hero07, type Hero07Props } from './hero-07'

export const values = {
  tagline: 'Architecture, interiors, and spaces built to last',
  title: 'Design-led homes for people who care how a place feels.',
  description:
    'From first sketch to final detail, we shape residential projects that balance light, material, and daily life. Thoughtful planning, refined finishes, and a calm build process.',
  landscapeImage:
    'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  landscapeAlt: 'Alt',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: false,
    text: 'View projects',
    link: '',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: false,
    text: 'Book a consultation',
    link: '',
    variant: 'link',
  },
} satisfies Hero07Props

export function Hero07Example() {
  return <Hero07 {...values} />
}
