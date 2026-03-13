'use client'

import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '@/components/flx/blocks/shared/cta/cta'
import { Cta } from '@/components/flx/blocks/shared/cta/cta'

export interface GridContentColumnsProps {
  items: {
    title?: string
    content?: string
    media?: {
      src: string
      alt: string
    }
    cta?: CtaProps
  }[]
}

export function GridContentColumns({ items }: GridContentColumnsProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={`${item.title}-${index}`} className="space-y-5">
          {item.media && (
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src={item.media.src}
                alt={item.title ?? 'Grid content columns image'}
                className="h-full w-full object-cover"
                fill
                unoptimized
              />
            </div>
          )}

          <div className="space-y-2">
            {item.title && (
              <h3 className="text-xl font-medium">{item.title}</h3>
            )}
            {item.content && (
              <p className="text-muted-foreground whitespace-pre-line">
                <Balancer balance={0.5}>{item.content}</Balancer>
              </p>
            )}
          </div>

          {item.cta && <Cta cta={item.cta} />}
        </div>
      ))}
    </div>
  )
}
