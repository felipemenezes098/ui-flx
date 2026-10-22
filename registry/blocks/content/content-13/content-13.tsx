import Balancer from 'react-wrap-balancer'

const imageClassName =
  'relative overflow-hidden outline outline-black/10 dark:outline-white/10'

export function Content13() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:gap-14 sm:py-28 lg:grid lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
        <div className="contents lg:col-span-7 lg:flex lg:flex-col lg:gap-16">
          <div className={`${imageClassName} order-2 aspect-[3/2] w-full`}>
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
              alt="Alt 1"
              decoding="async"
              className="size-full object-cover grayscale"
            />
          </div>
          <div
            className={`${imageClassName} order-4 aspect-[2/3] w-3/5 self-end sm:w-2/5 lg:w-[38%]`}
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop"
              alt="Alt 2"
              loading="lazy"
              decoding="async"
              className="size-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="contents lg:col-span-5 lg:flex lg:flex-col lg:gap-14 lg:pt-24">
          <div className="order-1 flex max-w-md flex-col gap-4">
            <h2 className="text-foreground text-2xl font-medium tracking-tight sm:text-3xl">
              <Balancer>Rooms that let you breathe</Balancer>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              Open plans, soft daylight and honest materials. Every space is
              arranged around one idea: leave enough room for the people who use
              it, and nothing more.
            </p>
          </div>
          <div
            className={`${imageClassName} order-3 aspect-[16/15] w-5/6 sm:w-3/5 lg:w-[85%]`}
          >
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1200&auto=format&fit=crop"
              alt="Alt 3"
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
