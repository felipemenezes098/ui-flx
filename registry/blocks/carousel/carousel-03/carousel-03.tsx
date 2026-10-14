'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const items = [
  {
    title: 'Beautiful blocks',
    description: 'Polished components that feel ready.',
    src: 'https://images.unsplash.com/photo-1545277048-000c86055339?q=80&w=1171&auto=format&fit=crop',
    alt: 'Alt 1',
  },
  {
    title: 'Ship faster',
    description: 'Move from idea to screen quickly.',
    src: 'https://images.unsplash.com/photo-1574557398955-09174289ea44?q=80&w=1171&auto=format&fit=crop',
    alt: 'Alt 2',
  },
  {
    title: 'Build clean',
    description: 'Simple structure with room to breathe.',
    src: 'https://images.unsplash.com/photo-1595330495302-e257debfa664?q=80&w=1171&auto=format&fit=crop',
    alt: 'Alt 3',
  },
  {
    title: 'Launch ready',
    description: 'Fast to use and easy to ship.',
    src: 'https://images.unsplash.com/photo-1543617934-70e4a9efad1c?q=80&w=1170&auto=format&fit=crop',
    alt: 'Alt 4',
  },
  {
    title: 'Made to scale',
    description: 'Reusable blocks for growing products.',
    src: 'https://images.unsplash.com/photo-1574557399375-c721d2371825?q=80&w=1171&auto=format&fit=crop',
    alt: 'Alt 5',
  },
  {
    title: 'Ready to use',
    description: 'Drop in and keep moving.',
    src: 'https://images.unsplash.com/photo-1574557399909-c6df4fde191a?q=80&w=1171&auto=format&fit=crop',
    alt: 'Alt 6',
  },
]

export function Carousel03() {
  const [api, setApi] = useState<CarouselApi>()
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }
    api.on('select', onSelect)
    api.on('reInit', onSelect)
    onSelect()

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <div className="flex w-full flex-col gap-8 md:gap-10">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-start justify-between gap-2 px-4">
        <h2 className="min-w-[200px] flex-1 text-2xl font-semibold sm:max-w-md md:text-3xl lg:max-w-lg">
          New blocks for modern UI building.
        </h2>
        <p className="text-muted-foreground w-full text-sm sm:w-auto sm:max-w-md md:text-base lg:max-w-lg">
          Fresh, reusable pieces for fast product work.
        </p>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
        }}
        className="w-full"
        aria-label="New blocks"
      >
        <CarouselContent className="mx-auto h-auto w-full max-w-6xl px-4 select-none first:!pl-0">
          {items.map((item) => (
            <CarouselItem
              key={item.title}
              className="basis-[80%] pl-4 md:basis-[45%] lg:basis-[36%]"
            >
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-[220px] w-full object-cover md:h-[300px] lg:h-[340px]"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mx-auto flex w-full max-w-6xl justify-end gap-3 px-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollPrev()}
          disabled={!canPrev}
          className="bg-muted/60 hover:bg-muted size-10 rounded-full border-none shadow-none"
        >
          <ChevronLeft />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollNext()}
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
