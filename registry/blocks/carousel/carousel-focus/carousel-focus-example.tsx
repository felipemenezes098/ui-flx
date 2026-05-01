import { CarouselFocus, type CarouselFocusProps } from './carousel-focus'

export const values = {
  titlePlacement: 'outside',
  items: [
    {
      title: 'Ship faster',
      media: {
        src: 'https://images.unsplash.com/photo-1610611742876-97e4d834d077?q=80&w=1170&auto=format&fit=crop',
        aspect: 'landscape',
      },
    },
    {
      title: 'Performance first',
      media: {
        src: 'https://images.unsplash.com/photo-1688327009265-3e47cdab9dc4?q=80&w=1169&auto=format&fit=crop',
        aspect: 'portrait' as const,
      },
    },
    {
      title: 'Stay in control',
      media: {
        src: 'https://images.unsplash.com/photo-1610210162763-6c4d6da47c8f?q=80&w=1170&auto=format&fit=crop',
        aspect: 'landscape' as const,
      },
    },
    {
      title: 'Built together',
      media: {
        src: 'https://images.unsplash.com/photo-1672917765736-c1c397a5d37f?q=80&w=1170&auto=format&fit=crop',
        aspect: 'portrait' as const,
      },
    },
  ],
} satisfies CarouselFocusProps

export function CarouselFocusExample() {
  return (
    <CarouselFocus
      titlePlacement={values.titlePlacement}
      items={values.items}
    />
  )
}
