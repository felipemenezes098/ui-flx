import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

const studios = [
  {
    name: 'Halden',
    wordmark: (
      <span className="font-serif text-3xl leading-none tracking-tight italic">
        Halden
      </span>
    ),
    description:
      'An independent product studio of 40 designers and engineers building calm, durable software for teams in health and finance.',
    image:
      'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Northfield',
    wordmark: (
      <span className="text-lg leading-none font-medium tracking-[0.24em] uppercase">
        Northfield
      </span>
    ),
    description:
      'Northfield partners with early-stage founders to shape brand, interface, and launch strategy in focused six-week sprints.',
    image:
      'https://images.unsplash.com/photo-1719513709219-1d6e405ea017?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Formworks',
    wordmark: (
      <span className="text-xl leading-[0.9] font-black tracking-tight">
        Form—
        <br />
        works
      </span>
    ),
    description:
      'A small collective pairing industrial design with careful frontend engineering for consumer hardware brands worldwide.',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop',
  },
]

export function Hero15() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-14 px-6 py-20 sm:gap-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h1 className="text-foreground text-4xl font-medium tracking-tight text-balance sm:text-5xl">
            Studio Directory
          </h1>

          <div className="flex flex-col gap-6 lg:pt-2">
            <p className="text-muted-foreground max-w-lg text-base sm:text-lg">
              <Balancer>
                Meet independent teams that turn rough ideas into polished,
                well-built products.
              </Balancer>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="w-fit rounded-full px-5"
                nativeButton={false}
                render={<a href="#" />}
              >
                Browse studios
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-fit rounded-full px-5"
                nativeButton={false}
                render={<a href="#" />}
              >
                List your studio
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {studios.map((studio) => (
            <a
              key={studio.name}
              href="#"
              aria-label={studio.name}
              className="group bg-card text-card-foreground focus-visible:ring-ring/50 flex flex-col gap-6 rounded-sm p-6 outline-none focus-visible:ring-3 sm:p-8"
            >
              <div className="flex h-10 items-end">{studio.wordmark}</div>
              <p className="text-muted-foreground line-clamp-2 text-sm sm:text-base">
                {studio.description}
              </p>
              <div className="relative mt-auto aspect-16/9 overflow-hidden rounded-sm outline outline-black/5 dark:outline-white/10">
                <img
                  src={studio.image}
                  alt="Alt"
                  decoding="async"
                  className="size-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
