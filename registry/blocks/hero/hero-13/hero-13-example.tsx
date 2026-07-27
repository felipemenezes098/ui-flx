import { Hero13, type Hero13Props } from './hero-13'

export const values = {
  title: 'Haven',
  titleLine2: 'Studio.',
  meta: 'Portland — 2019',
  eyebrow: 'Craft & quiet',
  description:
    'We shape residential and commercial interiors into calm rooms where light, material, and proportion do the quiet work.',
  variant: 'standard',
  animation: 'subtle',
  primaryImage: {
    src: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Soft abstract wash of muted color',
  },
  secondaryImage: {
    src: 'https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait study in soft light',
  },
} satisfies Hero13Props

export function Hero13Example() {
  return <Hero13 {...values} />
}
