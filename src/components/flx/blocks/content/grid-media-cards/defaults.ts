import type { GridMediaCardsProps } from './grid-media-cards'

export const gridMediaCardsDefaultProps = {
  title: 'Focus areas',
  items: [
    {
      title: 'Clean interfaces',
      description: 'Minimal layouts that put content first and noise last.',
      icon: 'Palette',
      image: {
        url: 'https://images.unsplash.com/photo-1770838917379-32208420ea9a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Clean workspace',
        whiteTexts: true,
      },
    },
    {
      title: 'Documentation',
      description:
        'Clear guides and examples so you can move fast without guessing.',
      icon: 'Code',
      image: {
        url: 'https://images.unsplash.com/photo-1756826513350-5b660cb91b55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Developer on laptop',
        whiteTexts: true,
      },
    },
    {
      title: 'Open by default',
      description:
        'Built in the open so you can adapt, extend, and own your stack.',
      icon: 'Users',
      image: {
        url: 'https://images.unsplash.com/photo-1658725935880-3b93d812d42c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Team collaboration',
        whiteTexts: true,
      },
    },
  ],
} satisfies GridMediaCardsProps
