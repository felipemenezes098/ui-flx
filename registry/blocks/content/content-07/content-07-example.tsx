import { Content07, type Content07Props } from './content-07'

export const values = {
  title: 'Two ways to move faster',
  description:
    'Pair a strong visual with clear copy and an optional action — side by side.',
  variant: 'standard',
  animation: 'subtle',
  items: [
    {
      title: 'Design',
      content:
        'Clean, accessible components that make your product feel modern and easy to use.',
      media: {
        src: 'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'alt image',
      },
      cta: {
        ctaEnabled: true,
        text: 'Learn more',
        link: '',
        variant: 'outline',
      },
    },
    {
      title: 'Developer Experience',
      content:
        'Built with TypeScript, clear APIs, and documentation that gets you shipping faster.',
      media: {
        src: 'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'alt image',
      },
      cta: {
        ctaEnabled: true,
        text: 'Get started',
        link: '',
        variant: 'outline',
      },
    },
  ],
} satisfies Content07Props

export function Content07Example() {
  return (
    <Content07
      title={values.title}
      description={values.description}
      items={values.items}
      variant={values.variant}
      animation={values.animation}
    />
  )
}
