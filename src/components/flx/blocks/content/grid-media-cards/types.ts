export interface GridMediaCardsProps {
  title: string
  items: {
    title: string
    description: string
    icon: string
    image: {
      url: string
      alt: string
      overlay?: boolean
      whiteTexts?: boolean
    }
  }[]
}
