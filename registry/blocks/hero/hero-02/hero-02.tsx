import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

import { Hero02Dashboard } from './hero-02-dashboard'

export function Hero02() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 sm:gap-20 sm:py-28">
        <div className="flex max-w-2xl flex-col items-start gap-5">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>Every metric that matters,</Balancer>
            <br />
            <Balancer>in one clear view.</Balancer>
          </h1>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base">
            <Balancer>
              Track revenue, users, and activity in real time, with no setup and
              no spreadsheets.
            </Balancer>
          </p>
          <Button
            className="w-fit rounded-full px-4"
            nativeButton={false}
            render={<a href="#" />}
          >
            Start free
          </Button>
        </div>

        <div className="relative w-full overflow-hidden rounded-md outline outline-black/10 dark:outline-white/10">
          <img
            src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover"
          />
          <div className="from-background/30 via-background/10 to-background/40 absolute inset-0 bg-gradient-to-b" />
          <div className="relative flex items-center justify-center px-6 py-12 sm:px-12 sm:py-16">
            <Hero02Dashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
