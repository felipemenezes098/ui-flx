import { Hero02, type Hero02Props } from './hero-02'

export const values = {
  title: 'Every metric that matters,',
  titleLine2: 'in one clear view.',
  description:
    'Track revenue, users, and activity in real time, with no setup and no spreadsheets.',
  washImage:
    'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Start free',
    link: '',
    variant: 'default',
    size: 'default',
  },
} satisfies Hero02Props

export function Hero02Example() {
  return <Hero02 {...values} />
}
