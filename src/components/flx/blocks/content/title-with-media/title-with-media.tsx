'use client'

import Balancer from 'react-wrap-balancer'

export interface TitleWithMediaProps {
  title?: string
  media: {
    src: string
    alt: string
  }
}

export function TitleWithMedia({ title, media }: TitleWithMediaProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        {title && (
          <h2 className="text-center text-2xl font-bold">
            <Balancer balance={0.5}>{title}</Balancer>
          </h2>
        )}
      </div>
      {media && (
        <div className="relative min-h-96 w-full overflow-hidden rounded-lg">
          <img
            src={media.src}
            alt={title ?? 'Title With Media Image'}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      )}
    </div>
  )
}
