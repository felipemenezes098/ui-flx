import type { TextBadgesProps } from './types'

export const textBadgesDefaultProps = {
  title: 'Design smarter. Ship faster. Delight users.',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get started',
    link: '/',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'Learn more',
    link: '/',
    variant: 'secondary',
  },
  features: [
    { icon: 'Zap', title: 'Fast' },
    { icon: 'Shield', title: 'Secure' },
    { icon: 'Code', title: 'Developer-first' },
  ],
} satisfies TextBadgesProps
