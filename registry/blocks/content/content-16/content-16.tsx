import Balancer from 'react-wrap-balancer'

const guides = ['left-1/2 top-[14%]', 'left-1/2 top-1/2', 'left-1/2 top-[86%]']

export function Content16() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:py-28 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10">
        <div className="order-1 flex flex-col gap-4 lg:order-3 lg:col-span-3">
          <p className="text-muted-foreground text-sm">Spatial design</p>
          <h2 className="text-foreground text-2xl font-normal tracking-tight sm:text-3xl">
            <Balancer>
              Every room was drawn to lead the eye from one space to the next.
            </Balancer>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            Clear sightlines and generous gaps between pieces let people move
            through the house without being told where to go.
          </p>
        </div>

        <div className="relative order-2 aspect-square w-full overflow-hidden outline outline-black/10 lg:col-span-6 dark:outline-white/10">
          <img
            src="https://images.unsplash.com/photo-1566883497053-3666f2141bec?q=80&w=1400&auto=format&fit=crop"
            alt="Alt 1"
            decoding="async"
            className="size-full object-cover grayscale"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="absolute inset-0 m-auto aspect-square h-full rounded-full border border-white/50" />
            <span className="absolute inset-y-0 left-1/2 w-px bg-white/50" />
            <span className="absolute inset-x-0 top-1/2 h-px bg-white/50" />
            {guides.map((position) => (
              <span
                key={position}
                className={`absolute size-2 -translate-x-1/2 -translate-y-1/2 bg-white ${position}`}
              />
            ))}
          </div>
        </div>

        <div className="relative order-3 aspect-[4/5] w-2/3 self-start overflow-hidden outline outline-black/10 sm:w-1/2 lg:order-1 lg:col-span-3 lg:w-full lg:self-end dark:outline-white/10">
          <img
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=900&auto=format&fit=crop"
            alt="Alt 2"
            loading="lazy"
            decoding="async"
            className="size-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  )
}
