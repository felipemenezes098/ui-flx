import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

import { Hero14BlockBuilder } from './hero-14-block-builder'

const logos = ['Northwind', 'Vertex Labs', 'Solstice', 'Anchorpoint', 'Lumen']

export function Hero14() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 sm:gap-14 sm:py-28">
        <div className="flex w-full max-w-2xl flex-col items-center gap-5 sm:gap-6">
          <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
            <h1 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              <Balancer>Describe the screen. Ship the block.</Balancer>
            </h1>
            <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
              <Balancer>
                Turn a plain-language brief into a production-ready block you
                can copy into your app.
              </Balancer>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              How It Works
            </Button>
            <Button
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              Browse Blocks
            </Button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl outline outline-black/10 dark:outline-white/10">
          <img
            src="https://images.unsplash.com/photo-1673271044466-b23ea152130f?q=80&w=2070&auto=format&fit=crop"
            alt="Alt"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5"
          />
          <div className="relative flex items-center justify-center px-6 py-10 sm:px-12 sm:py-16">
            <Hero14BlockBuilder />
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t pt-8 sm:pt-10">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-muted-foreground/70 text-sm font-semibold tracking-tight"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
