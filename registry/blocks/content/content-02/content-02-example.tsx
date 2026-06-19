import { Content02, type Content02Props } from './content-02'

export const values = {
  title: 'Focus areas',
  items: [
    {
      title: 'Clean interfaces',
      description: 'Minimal layouts that put content first and noise last.',
      icon: 'Palette',
      invert: true,
      media: {
        src: 'https://images.unsplash.com/photo-1770838917379-32208420ea9a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Clean workspace',
      },
    },
    {
      title: 'Documentation',
      description:
        'Clear guides and examples so you can move fast without guessing.',
      icon: 'Code',
      invert: true,
      media: {
        src: 'https://images.unsplash.com/photo-1756826513350-5b660cb91b55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Developer on laptop',
      },
    },
    {
      title: 'Open by default',
      description:
        'Built in the open so you can adapt, extend, and own your stack.',
      icon: 'Users',
      invert: true,
      media: {
        src: 'https://images.unsplash.com/photo-1658725935880-3b93d812d42c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Team collaboration',
      },
    },
  ],
} satisfies Content02Props

export function Content02Example() {
  return <Content02 title={values.title} items={values.items} />
}
