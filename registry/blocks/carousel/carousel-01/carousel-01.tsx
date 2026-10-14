'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import { useEffect, useRef, useState } from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const items = [
  {
    title: 'Ship faster',
    src: 'https://images.unsplash.com/photo-1610611742876-97e4d834d077?q=80&w=1170&auto=format&fit=crop',
    alt: 'Alt 1',
    aspect: 'aspect-[17/9]',
  },
  {
    title: 'Performance first',
    src: 'https://images.unsplash.com/photo-1688327009265-3e47cdab9dc4?q=80&w=1169&auto=format&fit=crop',
    alt: 'Alt 2',
    aspect: 'aspect-[3/2]',
  },
  {
    title: 'Stay in control',
    src: 'https://images.unsplash.com/photo-1610210162763-6c4d6da47c8f?q=80&w=1170&auto=format&fit=crop',
    alt: 'Alt 3',
    aspect: 'aspect-[17/9]',
  },
  {
    title: 'Built together',
    src: 'https://images.unsplash.com/photo-1672917765736-c1c397a5d37f?q=80&w=1170&auto=format&fit=crop',
    alt: 'Alt 4',
    aspect: 'aspect-[3/2]',
  },
]

export function Carousel01() {
  const [api, setApi] = useState<CarouselApi>()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const hoverCountRef = useRef(0)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    api?.plugins()?.autoScroll?.play()
  }, [api])

  const handleItemEnter = (index: number) => {
    setHoveredIndex(index)
    hoverCountRef.current += 1
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
    api?.plugins()?.autoScroll?.stop()
  }

  const handleItemLeave = () => {
    setHoveredIndex(null)
    hoverCountRef.current = Math.max(0, hoverCountRef.current - 1)
    if (hoverCountRef.current === 0) {
      resumeTimeoutRef.current = setTimeout(() => {
        api?.plugins()?.autoScroll?.play()
        resumeTimeoutRef.current = null
      }, 50)
    }
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'center',
        loop: true,
        watchDrag: false,
      }}
      plugins={[
        AutoScroll({
          speed: 1,
          startDelay: 0,
          stopOnMouseEnter: false,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full"
      aria-label="Featured media"
    >
      <CarouselContent className="-ml-4">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index
          const isDimmed = hoveredIndex !== null && !isHovered

          return (
            <CarouselItem
              key={item.title}
              className="basis-full pl-4 md:basis-[36%]"
            >
              <button
                type="button"
                aria-label={item.title}
                className={cn(
                  'flex w-full cursor-default flex-col gap-1 border-0 bg-transparent p-0 text-left transition-opacity duration-300',
                  isDimmed && 'opacity-50',
                )}
                onMouseEnter={() => handleItemEnter(index)}
                onMouseLeave={handleItemLeave}
                onFocus={() => handleItemEnter(index)}
                onBlur={handleItemLeave}
              >
                <span
                  className={cn(
                    'text-foreground min-h-[20px] text-sm font-medium transition-[opacity,translate] duration-200 ease-in-out',
                    isHovered
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-1.5 opacity-0',
                  )}
                >
                  {item.title}
                </span>
                <span
                  className={cn(
                    'relative w-full overflow-hidden rounded-lg',
                    item.aspect,
                  )}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute inset-0 size-full object-cover"
                  />
                </span>
              </button>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
