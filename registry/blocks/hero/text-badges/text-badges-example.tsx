import { TextBadges, type TextBadgesProps } from './text-badges'

export const values = {
  title: 'Design smarter. Ship faster. Delight users.',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get started',
    link: '',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'Learn more',
    link: '',
    variant: 'secondary',
  },
  features: [
    { icon: 'Zap', title: 'Fast' },
    { icon: 'Shield', title: 'Secure' },
    { icon: 'Code', title: 'Developer-first' },
  ],
} satisfies TextBadgesProps

export function TextBadgesExample() {
  return (
    <TextBadges
      title={values.title}
      primaryCTA={values.primaryCTA}
      secondaryCTA={values.secondaryCTA}
      features={values.features}
    />
  )
}
