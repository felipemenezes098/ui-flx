'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export interface LogoMarqueeItem {
  title: string
  url: string
}

export interface LogoMarqueeProps {
  items: LogoMarqueeItem[]
  className?: string
}

export function LogoMarquee({ items, className }: Readonly<LogoMarqueeProps>) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    api.plugins()?.autoScroll?.play()
  }, [api])

  const normalizedItems =
    items.length < 8 ? [...items, ...items, ...items] : items

  const containerWidthClassName = cn('w-full max-w-6xl mx-auto px-4', className)

  if (!normalizedItems.length) return null

  return (
    <div className={cn('relative w-full', className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 0.5,
            startDelay: 1,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
        aria-label="Carrossel de logos"
      >
        <CarouselContent
          className={cn('flex items-center', containerWidthClassName)}
        >
          {normalizedItems.map((item, index) => (
            <CarouselItem
              key={`${item.title}-${index}`}
              className="basis-auto pl-15"
            >
              <div className="flex h-12 items-center">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={120}
                  height={32}
                  unoptimized
                  className="h-8 w-auto object-contain opacity-60 grayscale transition-[opacity,filter] duration-300 ease-out hover:opacity-100 hover:grayscale-0 dark:invert"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent" />
    </div>
  )
}
