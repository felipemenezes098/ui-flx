import { Hero01, type Hero01Props } from './hero-01'

export const values = {
  title: 'Build what matters.',
  titleLine2: 'Connect what works.',
  description:
    'A single layer for payments, auth, and messaging in your product.',
  washImage:
    'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get started',
    link: '',
    variant: 'default',
    size: 'default',
  },
  integrationRows: [
    ['Notion', 'GitHub', 'Stripe', 'Figma'],
    ['Supabase', 'Resend', 'Raycast'],
  ],
} satisfies Hero01Props

export function Hero01Example() {
  return <Hero01 {...values} />
}
