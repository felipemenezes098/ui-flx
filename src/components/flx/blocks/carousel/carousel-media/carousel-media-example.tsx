import { CarouselMedia, type CarouselMediaProps } from './carousel-media'

export function CarouselMediaExample() {
  const values = {
    title: 'In focus',
    description: 'Key themes in a compact, browsable format.',
    items: [
      {
        title: 'Ship faster',
        description: 'Less setup, more shipping.',
        media: {
          src: 'https://images.unsplash.com/photo-1596308501201-1d81619d907a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Team collaboration',
          overlay: true,
        },
        whiteTexts: true,
      },
      {
        title: 'Stay in control',
        description: 'Your code, your design system.',
        media: {
          src: 'https://images.unsplash.com/photo-1747370273882-20aefaa41dac?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Developer at work',
          overlay: true,
        },
        whiteTexts: true,
      },
      {
        title: 'Built together',
        description: 'Open by default, improved by the community.',
        media: {
          src: 'https://images.unsplash.com/photo-1740073067432-0fd060f2ecde?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Team collaborating',
          overlay: true,
        },
        whiteTexts: true,
      },
      {
        title: 'Performance first',
        description: 'Fast by default, without the tradeoffs.',
        media: {
          src: 'https://images.unsplash.com/photo-1567354440819-667147e4d12d?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Developer on laptop',
          overlay: true,
        },
        whiteTexts: true,
      },
    ],
    showNavigation: true,
  } satisfies CarouselMediaProps

  return (
    <CarouselMedia
      title={values.title}
      description={values.description}
      items={values.items}
      showNavigation={values.showNavigation}
    />
  )
}
