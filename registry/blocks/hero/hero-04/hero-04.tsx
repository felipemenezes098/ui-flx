import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

import { Hero04ArtCollage } from './hero-04-art-collage'

export function Hero04() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 aspect-2/3 mask-radial-[75%_100%] mask-radial-from-45% mask-radial-to-75% mask-radial-at-top opacity-75 blur-xl md:aspect-square lg:aspect-video dark:opacity-5"
      >
        <img
          src="https://images.unsplash.com/photo-1685013640715-8701bbaa2207?q=80&w=2198&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>A gallery for the work</Balancer>
            <br />
            <Balancer>you are proud of.</Balancer>
          </h1>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base">
            <Balancer>
              Collect, arrange, and publish your art in a space that feels like
              a studio, not a spreadsheet.
            </Balancer>
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-3">
            <Button
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              Start your gallery
            </Button>
            <Button
              variant="link"
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              See examples
            </Button>
          </div>
        </div>

        <div className="w-full">
          <Hero04ArtCollage
            primaryImage="https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop"
            secondaryImage="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop"
            primaryAlt="Alt 1"
            secondaryAlt="Alt 2"
          />
        </div>
      </div>
    </section>
  )
}
