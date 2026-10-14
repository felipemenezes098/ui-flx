import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

import { Spot01 } from '@/components/flx/illustrations/spot/spot-01'

const logos = ['Acme', 'Globex', 'Initech', 'Umbrella']

export function Hero06() {
  return (
    <section className="bg-background relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 75% 25%, black 30%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 75% 25%, black 30%, transparent 72%)',
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
              <Balancer>Ship your best work,</Balancer>{' '}
              <span className="text-muted-foreground">
                without the busywork.
              </span>
            </h1>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              <Balancer>
                One workspace to plan, build, and launch. No context switching,
                no clutter.
              </Balancer>
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              className="w-full rounded-full px-4 sm:w-fit"
              nativeButton={false}
              render={<a href="#" />}
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full px-4 sm:w-fit"
              nativeButton={false}
              render={<a href="#" />}
            >
              Book a demo
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground/80 text-xs tracking-wide uppercase">
              Trusted by fast-moving teams
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="text-muted-foreground/60 text-sm font-semibold tracking-tight"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <Spot01 size="lg" />
        </div>
      </div>
    </section>
  )
}
