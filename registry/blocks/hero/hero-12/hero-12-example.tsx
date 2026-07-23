import { Hero12, type Hero12Props } from './hero-12'

export const values = {
  title: 'Aspen Ridge',
  established: 'Est. 2019',
  description:
    'A secluded mountain retreat set among the aspens, with floor-to-ceiling windows framing uninterrupted views of the Rockies. Wake to still water, quiet forest, and nothing on the schedule.',
  backgroundImage:
    'https://images.unsplash.com/photo-1626849440347-a491d028c0cf?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  backgroundAlt: 'A calm mountain lake at dusk beneath a forested ridge',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Reserve a Stay',
    link: '',
    size: 'default',
  },
} satisfies Hero12Props

export function Hero12Example() {
  return <Hero12 {...values} />
}
