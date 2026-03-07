import type { CtaProps } from '@/components/flx/blocks/shared/cta/types'

export interface BackgroundMediaProps {
  title: string
  description: string
  whiteTexts?: boolean
  image: {
    url: string
    alt: string
    overlay?: boolean
  }
  cta?: CtaProps
}
