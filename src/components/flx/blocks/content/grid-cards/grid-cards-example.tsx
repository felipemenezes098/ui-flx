import { GridCards, type GridCardsProps } from './grid-cards'

export const values = {
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

export function GridCardsExample() {
  return <GridCards title={values.title} items={values.items} />
}
