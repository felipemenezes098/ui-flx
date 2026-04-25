import {
  SelectRevealMedia,
  type SelectRevealMediaProps,
} from './select-reveal-media'

export const values = {
  items: [
    {
      id: '1',
      title: 'Design',
      description:
        'Clean, accessible components that make your product feel modern and easy to use.',
      image: {
        src: 'https://images.unsplash.com/photo-1549308050-395642b27438?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Design',
      },
    },
    {
      id: '2',
      title: 'Components',
      description:
        'Pre-built blocks you can drop into any layout. Customize once, reuse everywhere.',
      image: {
        src: 'https://images.unsplash.com/photo-1580215141106-04ce621a971d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Components',
      },
    },
    {
      id: '3',
      title: 'Developer Experience',
      description:
        'Built with TypeScript, clear APIs, and documentation that gets you shipping faster.',
      image: {
        src: 'https://images.unsplash.com/photo-1666529529871-a619c5a1a2b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Developer Experience',
      },
    },
    {
      id: '4',
      title: 'Customization',
      description:
        'Themes, variants, and overrides. Make it look and behave exactly how you need.',
      image: {
        src: 'https://images.unsplash.com/photo-1551777995-e47e7ba6d1f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Customization',
      },
    },
    {
      id: '5',
      title: 'Performance',
      description:
        'Optimized for speed and accessibility. Less bundle size, smoother interactions.',
      image: {
        src: 'https://images.unsplash.com/photo-1604181941498-d7b7acc8a160?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Performance',
      },
    },
  ],
} satisfies SelectRevealMediaProps

export function SelectRevealMediaExample() {
  return <SelectRevealMedia items={values.items} />
}
