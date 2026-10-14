import Balancer from 'react-wrap-balancer'

export function Hero13() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="order-2 flex flex-col gap-10 lg:order-1 lg:gap-16">
          <div className="relative max-w-lg">
            <div
              aria-hidden
              className="border-foreground/15 pointer-events-none absolute -right-3 -bottom-3 size-16 border sm:size-20"
            />
            <div className="relative aspect-4/3 overflow-hidden rounded-md outline outline-black/10 dark:outline-white/10">
              <img
                src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop"
                alt="Alt 1"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:max-w-sm">
            <p className="text-foreground text-xs font-semibold tracking-[0.18em] uppercase">
              Craft &amp; quiet
            </p>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed text-pretty sm:text-base">
              <Balancer>
                We shape residential and commercial interiors into calm rooms
                where light, material, and proportion do the quiet work.
              </Balancer>
            </p>
          </div>
        </div>

        <div className="order-1 flex flex-col gap-8 lg:order-2 lg:gap-12">
          <div className="flex flex-col gap-3 lg:pt-2">
            <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance uppercase sm:text-4xl md:text-5xl">
              <Balancer>
                Haven
                <br />
                Studio.
              </Balancer>
            </h1>
            <p className="text-muted-foreground text-xs font-medium tracking-[0.22em] uppercase">
              Portland — 2019
            </p>
          </div>
          <div className="relative ml-auto w-full max-w-md lg:mr-4">
            <div
              aria-hidden
              className="border-foreground/15 pointer-events-none absolute top-[18%] -left-7 size-24 rounded-full border sm:-left-9 sm:size-28"
            />
            <div className="relative aspect-3/4 max-w-md overflow-hidden rounded-md outline outline-black/10 lg:max-w-none dark:outline-white/10">
              <img
                src="https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop"
                alt="Alt 2"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
