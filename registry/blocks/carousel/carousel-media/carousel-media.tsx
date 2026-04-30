'use client'

import type { EmblaOptionsType } from 'embla-carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export interface CarouselMediaProps {
  className?: string
  title?: string
  description?: string
  items: {
    title?: string
    description?: string
    media: {
      src: string
      alt: string
      overlay?: boolean
    }
    invert: boolean
  }[]
  showNavigation: boolean
  carouselOpts?: EmblaOptionsType
}

export function CarouselMedia({
  className,
  title,
  description,
  items,
  showNavigation,
}: Readonly<CarouselMediaProps>) {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
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

  const handlePrevious = () => {
    api?.scrollPrev()
  }

  const handleNext = () => {
    api?.scrollNext()
  }

  if (!items || items.length === 0) {
    return null
  }

  const containerWidthClassName = cn('w-full max-w-6xl mx-auto px-4', className)

  return (
    <div className="flex flex-col gap-8">
      <div
        className={cn(
          'flex w-full flex-col justify-between gap-6 md:flex-row md:items-center',
          containerWidthClassName,
        )}
      >
        <div className="flex flex-col gap-1">
          {title && (
            <h2 className="text-2xl font-bold md:max-w-200">
              <Balancer balance={0.5}>{title}</Balancer>
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground md:max-w-200">
              <Balancer balance={0.5}>{description}</Balancer>
            </p>
          )}
        </div>
        {showNavigation && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={!canScrollPrev}
              size="icon"
              className="bg-muted/60 hover:bg-muted h-10 w-10 rounded-full border-none shadow-none"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={!canScrollNext}
              size="icon"
              className="bg-muted/60 hover:bg-muted h-10 w-10 rounded-full border-none shadow-none"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        )}
      </div>
      {items && (
        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            dragFree: true,
          }}
          className="w-full"
          aria-label="Carousel media"
        >
          <CarouselContent
            className={cn(
              'h-auto select-none first:!pl-0',
              containerWidthClassName,
            )}
          >
            {items.map((item, index) => {
              return (
                <CarouselItem
                  key={`${item.title}-${index}`}
                  className="h-full basis-5/5 last:!pr-5 md:basis-2/5"
                >
                  <div className="relative flex w-full items-center justify-center">
                    <div className="group/media group/video relative w-full overflow-hidden rounded-xl">
                      {item.media && (
                        <>
                          <div className="relative h-full min-h-64 w-full md:min-h-96">
                            <img
                              src={item.media.src}
                              alt={item.title ?? 'Carousel media image'}
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 size-full object-cover"
                            />
                          </div>
                          {item.media.overlay && (
                            <div className="absolute inset-0 bg-black/40" />
                          )}
                        </>
                      )}
                      <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
                        <div className="max-w-2xl space-y-2 text-center">
                          {item.title && (
                            <h3
                              className={`text-xl font-medium ${
                                item.invert ? 'text-white' : ''
                              }`}
                            >
                              {item.title}
                            </h3>
                          )}
                          {item.description && (
                            <p
                              className={`text-sm ${
                                item.invert
                                  ? 'text-white'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  )
}
