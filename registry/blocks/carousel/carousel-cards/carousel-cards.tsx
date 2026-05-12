'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export type CarouselCardItem = {
  title?: string
  description?: string
  media: {
    src: string
    alt?: string
  }
}

export type CarouselCardsProps = {
  title?: string
  description?: string
  items: CarouselCardItem[]
  className?: string
}

export function CarouselCards({
  title,
  description,
  items,
  className,
}: CarouselCardsProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }

    api.on('select', onSelect)
    api.on('reInit', onSelect)
    setTimeout(() => {
      onSelect()
    }, 0)

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

  if (!items || items.length === 0) return null

  const containerWidthClassName = cn('w-full max-w-8xl mx-auto px-4', className)

  return (
    <div className="flex w-full flex-col gap-8 md:gap-10">
      <div
        className={cn(
          'flex flex-wrap items-start justify-between gap-2',
          containerWidthClassName,
        )}
      >
        <h2 className="min-w-[200px] flex-1 text-2xl font-semibold sm:max-w-md md:text-3xl lg:max-w-lg">
          {title}
        </h2>

        <p className="text-muted-foreground w-full text-sm sm:w-auto sm:max-w-md md:text-base lg:max-w-lg">
          {description}
        </p>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
        }}
        className="w-full"
        aria-label="Carousel cards"
      >
        <CarouselContent
          className={cn(
            'h-auto select-none first:!pl-0',
            containerWidthClassName,
          )}
        >
          {items.map((item, i) => (
            <CarouselItem
              key={`${item.title}-${i}`}
              className="basis-[80%] pl-4 md:basis-[45%] lg:basis-[36%]"
            >
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={item.media.src}
                  alt={item.media.alt ?? item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-[220px] w-full object-cover md:h-[300px] lg:h-[340px]"
                />
              </div>
              <div className="mt-3">
                {item.title && (
                  <h3 className="text-lg font-medium">{item.title}</h3>
                )}
                {item.description && (
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className={cn('flex justify-end gap-3', containerWidthClassName)}>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!canPrev}
          className="bg-muted/60 hover:bg-muted size-10 rounded-full border-none shadow-none"
        >
          <ChevronLeft />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!canNext}
          className="bg-muted/60 hover:bg-muted size-10 rounded-full border-none shadow-none"
        >
          <ChevronRight />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
}
