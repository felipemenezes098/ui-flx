import { ArrowRight } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Hero11Studio } from './hero-11-studio'

export function Hero11() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-20 pb-0 sm:gap-10 sm:pt-28">
        <div className="flex w-full flex-col gap-4 sm:gap-5">
          <h1 className="text-foreground max-w-xl font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            <Balancer>The interface system for teams and agents.</Balancer>
          </h1>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed sm:text-base">
              <Balancer>
                Purpose-built blocks for planning and shipping product UI.
                Designed for the AI era.
              </Balancer>
            </p>
            <a
              href="#"
              className="text-foreground group inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-[opacity,transform] hover:opacity-80 active:scale-[0.96]"
            >
              <span>Compositions</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="relative w-full overflow-hidden mask-r-from-90% mask-r-to-100%">
            <Hero11Studio />
          </div>
        </div>
      </div>
    </section>
  )
}
