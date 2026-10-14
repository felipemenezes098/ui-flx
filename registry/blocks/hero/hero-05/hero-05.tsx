import Balancer from 'react-wrap-balancer'

export function Hero05() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-20 pb-10 sm:pt-28 sm:pb-12 lg:grid-cols-12 lg:pt-32">
        <div className="flex lg:col-span-4 lg:col-start-1 lg:items-end lg:self-stretch">
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed tracking-tight sm:text-base">
            <Balancer>
              Brand, product, and story for teams building something new
            </Balancer>
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:col-span-6 lg:col-start-7">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>
              A creative studio for founders who want their work to feel
              considered.
            </Balancer>
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
            <Balancer>
              We help early stage companies turn rough ideas into clear
              identities, thoughtful digital products, and messaging people
              remember. Strategy, design, and execution in one place.
            </Balancer>
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="relative overflow-hidden rounded-b-sm mask-t-from-80% mask-t-to-95%">
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
    </section>
  )
}
