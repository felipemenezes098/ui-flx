import type { CenteredTextProps } from './centered-text'

export const centeredTextDefaultProps = {
  title: 'Simple & Elegant',
  description: 'Display content in a minimal and visually appealing way.',
  cta: {
    ctaEnabled: true,
    text: 'Click here',
    link: '/',
    variant: 'default',
  },
} satisfies CenteredTextProps
