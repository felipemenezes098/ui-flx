import {
  Hero03,
  type Hero03Props,
} from './hero-03'

export const values = {
  title: 'From idea to launch, without the friction.',
  description:
    'Focus on what matters. We handle the structure, theming, and responsive patterns so you can ship faster.',
  variant: 'standard',
  animation: 'emphasis',
  media: {
    src: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Hero — product experience',
  },
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get started',
    link: '',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'View documentation',
    link: '',
    variant: 'outline',
  },
} satisfies Hero03Props

export function Hero03Example() {
  return (
    <Hero03
      title={values.title}
      description={values.description}
      variant={values.variant}
      animation={values.animation}
      media={values.media}
      primaryCTA={values.primaryCTA}
      secondaryCTA={values.secondaryCTA}
    />
  )
}
