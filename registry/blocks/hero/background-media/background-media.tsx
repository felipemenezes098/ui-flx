import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'
import { cn } from '@/lib/utils'

export interface BackgroundMediaProps {
  title: string
  description: string
  invert?: boolean
  media: {
    src: string
    alt?: string
    overlay?: boolean
  }
  cta?: CtaProps
}

export function BackgroundMedia({
  title,
  description,
  invert,
  media,
  cta,
}: Readonly<BackgroundMediaProps>) {
  return (
    <div className="group/video group/media relative">
      {media && (
        <div className="relative min-h-120 w-full">
          <img
            src={media.src}
            alt={media.alt ?? 'Hero background media'}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full rounded-xl object-cover"
          />
          {media.overlay && (
            <div className="absolute inset-0 rounded-xl bg-black/20" />
          )}
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            {title && (
              <h1
                className={cn(
                  'mx-auto max-w-2xl text-3xl font-bold md:text-4xl',
                  invert && 'text-white',
                )}
              >
                <Balancer balance={0.5}>{title}</Balancer>
              </h1>
            )}
            {description && (
              <p
                className={cn(
                  'mx-auto max-w-2xl',
                  invert && 'text-white',
                  !invert && 'text-muted-foreground',
                )}
              >
                <Balancer balance={0.5}>{description}</Balancer>
              </p>
            )}
          </div>
          {cta && <Cta cta={cta} invert={invert} />}
        </div>
      </div>
    </div>
  )
}
