'use client'

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

const items = [
  {
    title: 'Ship faster',
    description: 'Less setup, more shipping.',
    src: 'https://images.unsplash.com/photo-1596308501201-1d81619d907a?q=80&w=1170&auto=format&fit=crop',
    alt: 'Alt 1',
  },
  {
    title: 'Stay in control',
    description: 'Your code, your design system.',
    src: 'https://images.unsplash.com/photo-1747370273882-20aefaa41dac?q=80&w=1074&auto=format&fit=crop',
    alt: 'Alt 2',
  },
  {
    title: 'Built together',
    description: 'Open by default, improved by the community.',
    src: 'https://images.unsplash.com/photo-1740073067432-0fd060f2ecde?q=80&w=1171&auto=format&fit=crop',
    alt: 'Alt 3',
  },
  {
    title: 'Performance first',
    description: 'Fast by default, without the tradeoffs.',
    src: 'https://images.unsplash.com/photo-1567354440819-667147e4d12d?q=80&w=1167&auto=format&fit=crop',
    alt: 'Alt 4',
  },
]

export function Carousel02() {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
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
    <div className="flex flex-col gap-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 px-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold md:max-w-200">
            <Balancer balance={0.5}>In focus</Balancer>
          </h2>
          <p className="text-muted-foreground md:max-w-200">
            <Balancer balance={0.5}>
              Key themes in a compact, browsable format.
            </Balancer>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            size="icon"
            className="bg-muted/60 hover:bg-muted h-10 w-10 rounded-full border-none shadow-none"
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            size="icon"
            className="bg-muted/60 hover:bg-muted h-10 w-10 rounded-full border-none shadow-none"
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          dragFree: true,
        }}
        className="w-full"
        aria-label="In focus"
      >
        <CarouselContent className="mx-auto h-auto w-full max-w-6xl px-4 select-none first:!pl-0">
          {items.map((item) => (
            <CarouselItem
              key={item.title}
              className="h-full basis-5/5 last:!pr-5 md:basis-2/5"
            >
              <div className="relative w-full overflow-hidden rounded-xl">
                <div className="relative h-full min-h-64 w-full md:min-h-96">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
                  <div className="max-w-2xl space-y-2 text-center text-white">
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
