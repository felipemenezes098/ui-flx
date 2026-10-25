import Balancer from 'react-wrap-balancer'

export function Content17() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:gap-14 sm:py-28">
        <h2 className="text-foreground max-w-xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          <Balancer>
            The pieces we keep coming back to, quiet and simple.
          </Balancer>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-x-6">
          <div className="bg-muted relative aspect-[3/2] w-full overflow-hidden outline outline-black/10 md:col-span-6 dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1523263889714-d345f8119047?q=80&w=1400&auto=format&fit=crop"
              alt="Alt 1"
              decoding="async"
              className="size-full object-cover grayscale"
            />
          </div>

          <div className="bg-muted relative aspect-[4/5] w-3/4 self-end overflow-hidden outline outline-black/10 md:col-span-5 md:col-start-8 md:mt-40 md:w-full dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1603388114329-551db7e76df7?q=80&w=1200&auto=format&fit=crop"
              alt="Alt 2"
              loading="lazy"
              decoding="async"
              className="size-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
