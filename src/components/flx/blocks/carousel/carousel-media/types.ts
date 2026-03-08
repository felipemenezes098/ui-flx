import type { EmblaOptionsType } from 'embla-carousel'

export interface CarouselMediaProps {
  className?: string
  title?: string
  description?: string
  items: {
    title?: string
    description?: string
    media: {
      src: string
      alt: string
      overlay?: boolean
    }
    whiteTexts: boolean
  }[]
  showNavigation: boolean
  /** Opções extras do Embla Carousel. Faz merge com as opções padrão (drag mais suave, sem momentum livre). */
  carouselOpts?: EmblaOptionsType
}
