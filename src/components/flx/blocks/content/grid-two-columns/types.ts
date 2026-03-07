import type { CtaProps } from '@/components/flx/blocks/shared/cta/types'

export interface GridTwoColumnsProps {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  cta?: CtaProps
}
