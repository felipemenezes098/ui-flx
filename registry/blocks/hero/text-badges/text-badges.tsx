import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'
import { Badge } from '@/components/ui/badge'

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

export function TextBadges({
  title,
  primaryCTA,
  secondaryCTA,
  features,
}: Readonly<TextBadgesProps>) {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center space-y-6 text-center">
      {title && (
        <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl">
          <Balancer balance={0.5}>{title}</Balancer>
        </h1>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        {primaryCTA && <Cta cta={primaryCTA} className="w-full sm:w-fit" />}
        {secondaryCTA && <Cta cta={secondaryCTA} className="w-full sm:w-fit" />}
      </div>

      {features && features.length > 0 && (
        <ul className="m-0 mt-3 flex list-none flex-wrap justify-center gap-3">
          {features.map((feature, index) => (
            <Badge key={`${feature.title}-${index}`} variant="secondary">
              {feature.title}
            </Badge>
          ))}
        </ul>
      )}
    </div>
  )
}
