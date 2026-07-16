import { Hero11, type Hero11Props } from './hero-11'

export const values = {
  title: 'The interface system for teams and agents.',
  description:
    'Purpose-built blocks for planning and shipping product UI. Designed for the AI era.',
  featureText: 'Compositions',
  featureHref: '/compositions',
  animation: 'subtle',
  variant: 'standard',
} satisfies Hero11Props

export function Hero11Example() {
  return <Hero11 {...values} />
}
