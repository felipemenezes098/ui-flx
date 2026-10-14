import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

export function Hero03() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 sm:gap-20 sm:py-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 text-center">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>Ideas worth sharing with the world.</Balancer>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed sm:text-base">
            <Balancer>
              Turn rough notes into polished stories. Write, refine, and publish
              from one calm workspace built for focus.
            </Balancer>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Button
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              Get started
            </Button>
            <Button
              variant="link"
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="relative z-10 mx-auto w-full overflow-hidden mask-t-from-55% mask-t-to-100% mask-x-from-75% mask-x-to-100% mask-b-from-55% mask-b-to-100% mask-radial-[80%_70%] mask-radial-from-70% mask-radial-to-100% mask-radial-at-center dark:opacity-85 dark:mix-blend-darken">
            <div
              aria-hidden
              className="bg-background/25 dark:bg-background/40 pointer-events-none absolute inset-0 mix-blend-overlay"
            />
            <img
              src="https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop"
              alt="Alt"
              decoding="async"
              className="relative aspect-[5/4] w-full object-cover object-[center_15%] dark:mix-blend-lighten dark:brightness-[0.92] dark:contrast-[1.05] dark:saturate-[0.9]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
