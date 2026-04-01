'use client'

import Balancer from 'react-wrap-balancer'

import type { LogoMarqueeItem } from '@/components/flx/blocks/logos/logo-marquee/logo-marquee'
import { LogoMarquee } from '@/components/flx/blocks/logos/logo-marquee/logo-marquee'
import type { CtaProps } from '@/components/flx/blocks/shared/cta/cta'
import { Cta } from '@/components/flx/blocks/shared/cta/cta'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export interface HeroLogosCarouselCarouselItem {
  title: string
  image: string
}

export interface HeroLogosCarouselProps {
  title: string
  description: string
  logosInfo: string
  primaryCTA?: CtaProps
  secondaryCTA?: CtaProps
  logos: LogoMarqueeItem[]
  carouselItems: HeroLogosCarouselCarouselItem[]
  className?: string
}

export function HeroLogosCarousel({
  title,
  description,
  logosInfo,
  primaryCTA,
  secondaryCTA,
  logos,
  carouselItems,
  className,
}: Readonly<HeroLogosCarouselProps>) {
  const containerWidthClassName = cn('w-full max-w-6xl mx-auto px-4', className)

  return (
    <section className="space-y-15">
      <div
        className={cn(
          'flex min-h-70 max-w-2xl flex-col justify-center gap-4',
          containerWidthClassName,
        )}
      >
        {title ? (
          <h1 className="text-2xl font-medium tracking-tight md:text-4xl">
            <Balancer balance={0.5}>{title}</Balancer>
          </h1>
        ) : null}
        {description ? (
          <p className="text-muted-foreground max-w-2xl text-base whitespace-pre-line">
            <Balancer balance={0.5}>{description}</Balancer>
          </p>
        ) : null}
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          {primaryCTA ? (
            <Cta cta={primaryCTA} className="w-full sm:w-fit" />
          ) : null}
          {secondaryCTA ? (
            <Cta cta={secondaryCTA} className="w-full sm:w-fit" />
          ) : null}
        </div>
      </div>

      {logos?.length || carouselItems?.length ? (
        <div className="flex flex-col gap-10">
          <div className={containerWidthClassName}>
            <div className="flex flex-col gap-4 overflow-hidden sm:flex-row sm:items-center sm:justify-center">
              <p className="text-muted-foreground text-center text-sm sm:max-w-45 sm:text-left">
                {logosInfo}
              </p>
              <div className="w-full min-w-0 flex-1 sm:w-auto">
                <LogoMarquee items={logos} />
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <Carousel
              opts={{
                align: 'center',
                loop: false,
                startIndex: Math.floor(carouselItems.length / 2),
              }}
              className="w-full"
              aria-label="Image carousel"
            >
              <CarouselContent
                className={cn(
                  'h-auto select-none first:!pl-0',
                  containerWidthClassName,
                )}
              >
                {carouselItems.map((item, index) => (
                  <CarouselItem
                    key={`${item.title}-${index}`}
                    className="basis-full pl-4 md:basis-1/2 lg:basis-2/3"
                  >
                    <div className="bg-muted rounded-lg p-4">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 size-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      ) : null}
    </section>
  )
}
