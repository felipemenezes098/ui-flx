import type { CtaProps } from '@/components/flx/blocks/shared/cta/types'

export interface ShowcaseGridMediaCardsProps {
  title?: string
  items: {
    title?: string
    description?: string
    media: {
      src: string
      alt: string
    }
  }[]
  cta?: CtaProps
}
