export type CarouselFocusAspect = 'landscape' | 'portrait' | 'wide'

export interface CarouselFocusImage {
  url: string
  aspect: CarouselFocusAspect
}

export interface CarouselFocusItem {
  title: string
  image: CarouselFocusImage
}

export type CarouselFocusTitlePlacement = 'inside' | 'outside'

export interface CarouselFocusProps {
  titlePlacement: CarouselFocusTitlePlacement
  items: CarouselFocusItem[]
}
