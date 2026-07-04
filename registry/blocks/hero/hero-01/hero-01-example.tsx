import { Hero01, type Hero01Props } from './hero-01'

export const values = {
  title: 'Build what matters.',
  titleLine2: 'Connect what works.',
  description:
    'A single layer for payments, auth, and messaging in your product.',
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
