import { GridContentColumns, type GridContentColumnsProps } from './grid-content-columns'

export function GridContentColumnsExample() {
  const values = {
    items: [
      {
        title: 'From idea to interface',
        content:
          'Start with a clear concept. Turn it into a clean, focused layout without the clutter.',
        media: {
          src: 'https://images.unsplash.com/photo-1501027874987-73e9c32f46a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Workspace with clean layout',
        },
        cta: {
          ctaEnabled: true,
          text: 'Learn more',
          link: '/',
          variant: 'outline',
        },
      },
      {
        title: 'Ship with confidence',
        content:
          'Documented, consistent, and ready to adapt to your stack and your team.',
        media: {
          src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Developer at work',
        },
        cta: {
          ctaEnabled: true,
          text: 'Get started',
          link: '/',
          variant: 'outline',
        },
      },
    ],
  } satisfies GridContentColumnsProps

  return <GridContentColumns items={values.items} />
}
