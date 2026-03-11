import type { CtaProps } from '@/components/flx/blocks/shared/cta/types'

export interface HeroContentMediaProps {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  primaryCTA?: CtaProps
  secondaryCTA?: CtaProps
}
