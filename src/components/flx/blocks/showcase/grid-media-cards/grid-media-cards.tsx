'use client'

import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '@/components/flx/blocks/shared/cta/cta'
import { Cta } from '@/components/flx/blocks/shared/cta/cta'

export interface ShowcaseGridMediaCardsProps {
  title?: string
  items: {
    title?: string
    description?: string
    media: {
      src: string
      alt: string
    }
  }[]
  cta?: CtaProps
}

export function GridMediaCards({
  title,
  items,
  cta,
}: ShowcaseGridMediaCardsProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        {title && (
          <h2 className="text-2xl font-bold md:max-w-200">
            <Balancer balance={0.5}>{title}</Balancer>
          </h2>
        )}
        {cta && <Cta cta={cta} />}
      </div>
      {items && items.length > 0 && (
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              className="group/media group/video space-y-4"
              key={`${item.title}-${index}`}
            >
              {item.media && (
                <div className="relative min-h-80 w-full overflow-hidden rounded-lg">
                  <img
                    src={item.media.src}
                    alt={item.title ?? 'Grid media cards image'}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              )}
              <div className="space-y-2">
                {item.title && (
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                )}
                {item.description && (
                  <p className="text-muted-foreground">
                    <Balancer balance={0.5}>{item.description}</Balancer>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
