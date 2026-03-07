export interface SelectRevealMediaItem {
  id: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
}

export interface SelectRevealMediaProps {
  items: SelectRevealMediaItem[]
}
