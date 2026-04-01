import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '@/components/flx/blocks/shared/cta/cta'
import { Cta } from '@/components/flx/blocks/shared/cta/cta'
import { cn } from '@/lib/utils'

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

export function HeroContentMedia({
  title,
  description,
  image,
  primaryCTA,
  secondaryCTA,
}: Readonly<HeroContentMediaProps>) {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 gap-10 overflow-x-hidden md:min-h-[28rem] md:grid-cols-2',
      )}
    >
      <div
        className={cn(
          'order-1 flex w-full min-w-0 flex-col justify-end space-y-6 self-end overflow-x-hidden pb-2',
        )}
      >
        <div className="space-y-4">
          {title && (
            <h1
              className={cn(
                'max-w-full text-3xl font-bold tracking-tight md:max-w-lg md:text-4xl',
              )}
            >
              <Balancer balance={0.5}>{title}</Balancer>
            </h1>
          )}
          {description && (
            <p
              className={cn(
                'text-muted-foreground max-w-full text-base whitespace-pre-line md:max-w-md',
              )}
            >
              <Balancer balance={0.5}>{description}</Balancer>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {primaryCTA && <Cta cta={primaryCTA} className="w-full sm:w-fit" />}
          {secondaryCTA && (
            <Cta cta={secondaryCTA} className="w-full sm:w-fit" />
          )}
        </div>
      </div>

      {image && (
        <div
          className={cn(
            'relative order-2 flex md:h-full md:items-end md:justify-end',
          )}
        >
          <div className="group/image relative min-h-80 w-full overflow-hidden rounded-lg md:min-h-[30rem]">
            <img
              src={image.src}
              alt={image.alt ?? title ?? 'Hero image'}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full rounded-lg object-cover object-bottom transition-all duration-200 group-hover/image:scale-[1.02]"
            />
          </div>
        </div>
      )}
    </div>
  )
}
