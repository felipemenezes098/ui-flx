'use client'

import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import type { TitleWithMediaProps } from './types'

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
          <Image
            src={media.src}
            alt={title ?? 'Title With Media Image'}
            className="h-full w-full object-cover"
            fill
            unoptimized
          />
        </div>
      )}
    </div>
  )
}
