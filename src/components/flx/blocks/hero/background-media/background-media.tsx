import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { Cta } from '@/components/flx/blocks/shared/cta/cta'

import type { BackgroundMediaProps } from './types'

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
          <Image
            src={image.url}
            alt={image.alt ?? 'Hero background media'}
            className="h-full w-full rounded-xl object-cover"
            fill
            unoptimized
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
