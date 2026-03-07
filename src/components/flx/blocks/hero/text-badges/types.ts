import type { CtaProps } from '@/components/flx/blocks/shared/cta/types'

export interface Feature {
  icon: string
  title: string
}

export interface TextBadgesProps {
  title: string
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  features: Feature[]
}
