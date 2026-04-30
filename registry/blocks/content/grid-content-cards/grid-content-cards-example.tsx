import {
  GridContentCards,
  type GridContentCardsProps,
} from './grid-content-cards'

export const values = {
  items: [
    {
      title: 'From idea to interface',
      description:
        'Start with a clear concept. Turn it into a clean, focused layout without the clutter.',
      media: {
        src: 'https://images.unsplash.com/photo-1776011469177-6035c9c6d6a9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Workspace with clean layout',
      },
    },
    {
      title: 'Ship with confidence',
      description:
        'Documented, consistent, and ready to adapt to your stack and your team.',
      media: {
        src: 'https://images.unsplash.com/photo-1734808215019-5e37cae896b4?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Developer at work',
      },
    },
  ],
} satisfies GridContentCardsProps

export function GridContentCardsExample() {
  return <GridContentCards items={values.items} />
}
