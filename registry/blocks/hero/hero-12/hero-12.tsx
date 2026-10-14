import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

export function Hero12() {
  return (
    <section className="bg-background relative isolate flex min-h-[560px] w-full flex-col justify-end overflow-hidden sm:min-h-[600px]">
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1758855313518-f7c9602026a0?q=80&w=2070&auto=format&fit=crop"
          alt=""
          decoding="async"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
      </div>

      <div className="relative z-10 flex w-full flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:py-12">
        <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl">
              <Balancer>Aspen Ridge</Balancer>
            </h1>
            <span className="text-xs font-medium tracking-widest text-white/70 uppercase sm:text-sm">
              Est. 2019
            </span>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
            <Balancer>
              A secluded mountain retreat set among the aspens, with
              floor-to-ceiling windows framing uninterrupted views of the
              Rockies. Wake to still water, quiet forest, and nothing on the
              schedule.
            </Balancer>
          </p>
        </div>

        <Button
          variant="secondary"
          className="w-fit shrink-0 rounded-full border-transparent bg-white px-4 text-zinc-900 hover:bg-zinc-100"
          nativeButton={false}
          render={<a href="#" />}
        >
          Reserve a Stay
        </Button>
      </div>
    </section>
  )
}
