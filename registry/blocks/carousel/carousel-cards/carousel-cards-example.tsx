import { CarouselCards, CarouselCardsProps } from './carousel-cards'

export const values = {
  title: 'New blocks for modern UI building.',
  description: 'Fresh, reusable pieces for fast product work.',
  items: [
    {
      title: 'Beautiful blocks',
      description: 'Polished components that feel ready.',
      media: {
        src: 'https://images.unsplash.com/photo-1545277048-000c86055339?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Beautiful blocks preview',
      },
    },
    {
      title: 'Ship faster',
      description: 'Move from idea to screen quickly.',
      media: {
        src: 'https://images.unsplash.com/photo-1574557398955-09174289ea44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Ship faster preview',
      },
    },
    {
      title: 'Build clean',
      description: 'Simple structure with room to breathe.',
      media: {
        src: 'https://images.unsplash.com/photo-1595330495302-e257debfa664?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Build clean preview',
      },
    },
    {
      title: 'Launch ready',
      description: 'Fast to use and easy to ship.',
      media: {
        src: 'https://images.unsplash.com/photo-1543617934-70e4a9efad1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Launch ready preview',
      },
    },
    {
      title: 'Made to scale',
      description: 'Reusable blocks for growing products.',
      media: {
        src: 'https://images.unsplash.com/photo-1574557399375-c721d2371825?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Made to scale preview',
      },
    },
    {
      title: 'Ready to use',
      description: 'Drop in and keep moving.',
      media: {
        src: 'https://images.unsplash.com/photo-1574557399909-c6df4fde191a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Ready to use preview',
      },
    },
  ],
} satisfies CarouselCardsProps

export function CarouselCardsExample() {
  return (
    <CarouselCards
      title={values.title}
      description={values.description}
      items={values.items}
    />
  )
}
