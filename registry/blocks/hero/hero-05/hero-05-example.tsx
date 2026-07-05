import { Hero05, type Hero05Props } from './hero-05'

export const values = {
  tagline: 'Brand, product, and story for teams building something new',
  title:
    'A creative studio for founders who want their work to feel considered.',
  description:
    'We help early stage companies turn rough ideas into clear identities, thoughtful digital products, and messaging people remember. Strategy, design, and execution in one place.',
  landscapeImage:
    'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  landscapeAlt: 'Alt',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: false,
    text: 'Start a project',
    link: '',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: false,
    text: 'View work',
    link: '',
    variant: 'link',
  },
} satisfies Hero05Props

export function Hero05Example() {
  return <Hero05 {...values} />
}
