import { Hero04, type Hero04Props } from './hero-04'

export const values = {
  title: 'A gallery for the work',
  titleLine2: 'you are proud of.',
  description:
    'Collect, arrange, and publish your art in a space that feels like a studio, not a spreadsheet.',
  washImage:
    'https://images.unsplash.com/photo-1685013640715-8701bbaa2207?q=80&w=2198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  primaryImage:
    'https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  secondaryImage:
    'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  primaryAlt: 'Featured artwork',
  secondaryAlt: 'Abstract artwork',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Start your gallery',
    link: '',
    variant: 'default',
    size: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'See examples',
    link: '',
    variant: 'link',
  },
} satisfies Hero04Props

export function Hero04Example() {
  return <Hero04 {...values} />
}
