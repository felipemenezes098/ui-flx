import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'

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

export function BackgroundMedia({
  title,
  description,
  whiteTexts,
  image,
  cta,
}: Readonly<BackgroundMediaProps>) {
  return (
    <div className="group/video group/media relative">
      {image && (
        <div className="relative min-h-120 w-full">
          <img
            src={image.url}
            alt={image.alt ?? 'Hero background media'}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full rounded-xl object-cover"
          />
          {image.overlay && (
            <div className="absolute inset-0 rounded-xl bg-black/50" />
          )}
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            {title && (
              <h1
                className={`mx-auto max-w-2xl text-3xl font-bold md:text-4xl ${
                  whiteTexts ? 'text-white' : ''
                }`}
              >
                <Balancer balance={0.5}>{title}</Balancer>
              </h1>
            )}
            {description && (
              <p
                className={`mx-auto max-w-2xl ${
                  whiteTexts ? 'text-white' : 'text-muted-foreground'
                }`}
              >
                <Balancer balance={0.5}>{description}</Balancer>
              </p>
            )}
          </div>
          {cta && <Cta cta={cta} />}
        </div>
      </div>
    </div>
  )
}
