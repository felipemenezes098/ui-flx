import Image from 'next/image'

import type { CtaProps } from '@/components/flx/blocks/shared/cta/cta'
import { Cta } from '@/components/flx/blocks/shared/cta/cta'
import { cn } from '@/lib/utils'

export type PrimaryItemMedia = {
  url: string
  title: string
}

export type PrimaryItem = {
  title: string
  description: string
  cta: CtaProps
  media: PrimaryItemMedia
}

export type GridItem = {
  title: string
  description: string
  media: PrimaryItemMedia
}

export interface PrimaryItemGridProps {
  className?: string
  primary: PrimaryItem
  items: GridItem[]
}

export function PrimaryItemGrid({
  className,
  primary,
  items,
}: Readonly<PrimaryItemGridProps>) {
  return (
    <div
      className={cn('grid grid-cols-1 gap-6 md:grid-cols-3', className)}
      aria-label="Primary item grid"
    >
      <article className="bg-muted/50 col-span-1 overflow-hidden rounded-lg p-6 md:col-span-2">
        <div className="grid h-full grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                {primary.title}
              </h2>
              <p className="text-muted-foreground text-sm whitespace-pre-line">
                {primary.description}
              </p>
            </div>

            <div className="flex">
              <Cta cta={{ ...primary.cta, size: 'sm' }} />
            </div>
          </div>

          <div className="bg-muted relative min-h-64 w-full overflow-hidden rounded-xl md:min-h-0">
            <Image
              src={primary.media.url}
              alt={primary.media.title}
              fill
              className="object-cover"
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </article>

      {items.map((item) => (
        <article
          key={`${item.title}-${item.media.url}`}
          className="bg-muted/50 col-span-1 overflow-hidden rounded-lg p-6"
        >
          <div className="flex h-full flex-col gap-6">
            <div className="bg-muted relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={item.media.url}
                alt={item.media.title}
                fill
                className="object-cover"
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
