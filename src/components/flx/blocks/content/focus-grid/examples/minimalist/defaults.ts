import type { FocusGridProps } from '../../types'

export const focusGridMinimalistProps = {
  title: 'Our process',
  description: 'From idea to launch—click each phase to see how we work.',
  dimUnfocused: false,
  descriptionOnFocus: true,
  items: [
    {
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop',
      title: 'Discovery',
      description:
        'We start by understanding your goals, your users, and the constraints you face.',
      defaultFocus: true,
    },
    {
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop',
      title: 'Design',
      description:
        'Clean interfaces and clear flows that people love to use every day.',
    },
  ],
} satisfies FocusGridProps
