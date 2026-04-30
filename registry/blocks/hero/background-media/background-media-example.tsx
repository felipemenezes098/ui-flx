import { BackgroundMedia, type BackgroundMediaProps } from './background-media'

export const values = {
  title: 'Fast. Flexible. Beautiful.',
  description:
    'Clean, modern interfaces with minimal effort and maximum flexibility.',
  invert: true,
  media: {
    src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Minimal workspace',
  },
  cta: {
    ctaEnabled: true,
    text: 'Get started',
    link: '',
    variant: 'outline',
  },
} satisfies BackgroundMediaProps

export function BackgroundMediaExample() {
  return (
    <BackgroundMedia
      title={values.title}
      description={values.description}
      invert={values.invert}
      media={values.media}
      cta={values.cta}
    />
  )
}
