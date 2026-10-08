'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import { useEffect, useState } from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const logos = [
  {
    name: 'Supabase',
    src: 'https://cdn.brandfetch.io/idsSceG8fK/w/800/h/156/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
  },
  {
    name: 'Google',
    src: 'https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
  },
  {
    name: 'Shopify',
    src: 'https://cdn.brandfetch.io/idAgPm7IvG/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
  },
  {
    name: 'Mongo',
    src: 'https://cdn.brandfetch.io/ideyyfT0Lp/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
  },
  {
    name: 'LottieFiles',
    src: 'https://cdn.brandfetch.io/idEExqEvR9/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
  },
]

// Repeat the list so the loop always has enough slides to scroll through.
const items = [...logos, ...logos, ...logos]

export function Logos01() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    api.plugins()?.autoScroll?.play()
  }, [api])

  return (
    <div className="relative w-full">
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
        aria-label="Customer logos"
      >
        <CarouselContent className="mx-auto flex w-full max-w-6xl items-center px-4">
          {items.map((logo, index) => (
            <CarouselItem
              key={`${logo.name}-${index}`}
              className="basis-auto pl-15"
            >
              <div className="flex h-12 items-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-auto object-contain opacity-60 grayscale transition-[opacity,filter] duration-300 ease-out hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert"
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
