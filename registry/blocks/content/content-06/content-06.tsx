import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

export function Content06() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid w-full grid-cols-1 gap-10 overflow-x-hidden md:grid-cols-2 md:items-center md:gap-14">
          <div className="flex w-full min-w-0 flex-col gap-8 self-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl">
                <Balancer>Ship with confidence</Balancer>
              </h2>
              <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
                <Balancer>
                  Built with TypeScript, clear APIs, and documentation that gets
                  you moving faster.
                </Balancer>
              </p>
            </div>
            <Button
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              Get started
            </Button>
          </div>

          <div className="relative flex md:h-full md:items-center">
            <div className="group/image relative min-h-80 w-full overflow-hidden rounded-lg outline outline-black/10 md:min-h-[420px] dark:outline-white/10">
              <img
                src="https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop"
                alt="Alt"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
