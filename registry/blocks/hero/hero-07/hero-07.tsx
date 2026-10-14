import Balancer from 'react-wrap-balancer'

export function Hero07() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="relative overflow-hidden rounded-t-sm mask-b-from-80% mask-b-to-95%">
          <div
            aria-hidden
            className="bg-background/15 dark:bg-background/30 pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
          />
          <img
            src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop"
            alt="Alt"
            decoding="async"
            className="aspect-[2/1] w-full object-cover object-center outline outline-black/10 sm:aspect-[9/4] dark:outline-white/10 dark:brightness-[0.97] dark:saturate-[0.92]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-10 pb-20 sm:pt-12 sm:pb-28 lg:grid-cols-12 lg:pb-32">
        <div className="flex lg:col-span-4 lg:col-start-1 lg:items-start lg:self-stretch">
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed tracking-tight sm:text-base">
            <Balancer>
              Architecture, interiors, and spaces built to last
            </Balancer>
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:col-span-6 lg:col-start-7">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>
              Design-led homes for people who care how a place feels.
            </Balancer>
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
            <Balancer>
              From first sketch to final detail, we shape residential projects
              that balance light, material, and daily life. Thoughtful planning,
              refined finishes, and a calm build process.
            </Balancer>
          </p>
        </div>
      </div>
    </section>
  )
}
