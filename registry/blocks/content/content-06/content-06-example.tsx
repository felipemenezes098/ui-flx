import { Content06, type Content06Props } from './content-06'

export const values = {
  title: 'Ship with confidence',
  description:
    'Built with TypeScript, clear APIs, and documentation that gets you moving faster.',
  variant: 'standard',
  animation: 'subtle',
  media: {
    src: 'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Developer Experience',
  },
  cta: {
    ctaEnabled: true,
    text: 'Get started',
    link: '',
    variant: 'default',
  },
} satisfies Content06Props

export function Content06Example() {
  return (
    <Content06
      title={values.title}
      description={values.description}
      media={values.media}
      cta={values.cta}
      variant={values.variant}
      animation={values.animation}
    />
  )
}
