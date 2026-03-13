import type { BackgroundMediaProps } from './background-media'

export const backgroundMediaDefaultProps = {
  title: 'Fast. Flexible. Beautiful.',
  description:
    'Clean, modern interfaces with minimal effort and maximum flexibility.',
  whiteTexts: true,
  image: {
    url: 'https://images.unsplash.com/photo-1493993083687-7e4f91383dfa?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Minimal workspace',
  },
  cta: {
    ctaEnabled: true,
    text: 'Get started',
    link: '/',
    variant: 'outline',
  },
} satisfies BackgroundMediaProps
