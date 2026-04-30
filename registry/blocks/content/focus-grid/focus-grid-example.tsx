import { FocusGrid, type FocusGridProps } from './focus-grid'

export const values = {
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
    {
      image:
        'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Build',
      description:
        'Solid, accessible code that scales with your product and your team.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1713623069173-3afa89926882?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Test',
      description:
        'We validate everything with real users before launch, so nothing is left to chance.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Launch',
      description:
        'Go live with confidence, with support and iteration when you need it.',
    },
  ],
} satisfies FocusGridProps

export function FocusGridExample() {
  return (
    <FocusGrid
      title={values.title}
      description={values.description}
      dimUnfocused={values.dimUnfocused}
      descriptionOnFocus={values.descriptionOnFocus}
      items={values.items}
    />
  )
}
