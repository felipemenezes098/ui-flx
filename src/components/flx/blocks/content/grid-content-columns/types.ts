import type { CtaProps } from '@/components/flx/blocks/shared/cta/types'

export interface GridContentColumnsProps {
  items: {
    title?: string
    content?: string
    media?: {
      src: string
      alt: string
    }
    cta?: CtaProps
  }[]
}
