import type { GridCardsProps } from './types'

export const gridCardsDefaultProps = {
  title: 'What we offer',
  items: [
    {
      title: 'Modern Design',
      description:
        'Beautiful and contemporary UI components that make your projects stand out.',
      icon: 'Palette',
    },
    {
      title: 'Developer Experience',
      description:
        'Built with developers in mind. Easy to use, well documented, and highly customizable.',
      icon: 'Code',
    },
    {
      title: 'Community Driven',
      description:
        'Join thousands of developers contributing to make UI development better for everyone.',
      icon: 'Users',
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency right out of the box.',
      icon: 'Zap',
    },
  ],
} satisfies GridCardsProps
