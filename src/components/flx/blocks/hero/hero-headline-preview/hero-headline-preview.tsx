import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '@/components/flx/blocks/shared/cta/cta'
import { Cta } from '@/components/flx/blocks/shared/cta/cta'

export interface HeroHeadlinePreviewProps {
  title: string
  description: string
  media: {
    src: string
    alt: string
  }
  cta?: CtaProps
}

export function HeroHeadlinePreview({
  title,
  description,
  media,
  cta,
}: Readonly<HeroHeadlinePreviewProps>) {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-4">
          {title && (
            <h1 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              <Balancer balance={0.5}>{title}</Balancer>
            </h1>
          )}
          {description && (
            <p className="text-muted-foreground text-sm leading-7 md:text-base">
              <Balancer balance={0.5}>{description}</Balancer>
            </p>
          )}
        </div>

        {cta && <Cta cta={cta} />}
      </div>

      {media && (
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={media.src}
              alt={media.alt ?? title ?? 'Hero preview'}
              loading="lazy"
              decoding="async"
              className="h-100 w-full object-cover"
            />
          </div>
          <div className="from-background via-background/80 pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t to-transparent md:h-32" />
        </div>
      )}
    </div>
  )
}
