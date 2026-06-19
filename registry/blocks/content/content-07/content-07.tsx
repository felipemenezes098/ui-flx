'use client'

import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta'
import { Cta } from '../../shared/cta'

export interface Content07Props {
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

export function Content07({ items }: Content07Props) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={`${item.title}-${index}`} className="space-y-5">
          {item.media && (
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <img
                src={item.media.src}
                alt={item.title ?? 'Content 07 image'}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
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
