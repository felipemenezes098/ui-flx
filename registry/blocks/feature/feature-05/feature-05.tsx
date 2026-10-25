import { ArrowRight, Feather, Leaf, Ruler } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

const features = [
  {
    title: 'Comfort',
    description:
      'Layered foam and a sprung seat that holds its shape through years of reading.',
    icon: Feather,
  },
  {
    title: 'Materials',
    description:
      'Solid beech legs and a washable linen cover, finished with natural oils.',
    icon: Leaf,
  },
  {
    title: 'Proportion',
    description:
      'A low, generous seat sized for small rooms without feeling small itself.',
    icon: Ruler,
  },
]

const finishes = [
  { name: 'Chalk', className: 'bg-background' },
  { name: 'Stone', className: 'bg-muted' },
  { name: 'Graphite', className: 'bg-muted-foreground' },
  { name: 'Ink', className: 'bg-foreground' },
]

export function Feature05() {
  return (
    <section className="bg-background w-full overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 sm:gap-16 sm:py-28">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-foreground text-3xl font-normal tracking-[0.04em] uppercase sm:text-5xl">
            <Balancer>The Reading Chair</Balancer>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            <Balancer>A quiet seat for long afternoons and slow books</Balancer>
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,1.3fr)_1fr] lg:gap-10">
          <div className="bg-muted relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl outline outline-black/10 md:col-span-2 lg:order-2 lg:col-span-1 lg:max-w-none dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1652204075348-e367c1bde65a?q=80&w=1200&auto=format&fit=crop"
              alt="Alt"
              decoding="async"
              className="size-full object-cover object-center grayscale"
            />
          </div>

          <ul className="flex flex-col gap-8 lg:order-1">
            {features.map((feature) => (
              <li key={feature.title} className="flex flex-col gap-2">
                <h3 className="text-foreground flex items-center gap-3 text-base font-medium tracking-[0.06em] uppercase">
                  <feature.icon
                    aria-hidden
                    className="text-muted-foreground size-5"
                  />
                  {feature.title}
                </h3>
                <p className="text-muted-foreground max-w-xs text-sm leading-relaxed sm:text-base">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-6 lg:order-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-medium tracking-[0.04em] uppercase">
                Atelier Lounge Chair
              </h3>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed sm:text-base">
                A deep, tufted seat built by hand in small batches, ready to
                ship in four finishes.
              </p>
            </div>

            <ul className="flex items-center gap-2">
              {finishes.map((finish) => (
                <li key={finish.name}>
                  <span
                    title={finish.name}
                    className={`${finish.className} border-border block size-6 rounded-full border`}
                  />
                  <span className="sr-only">{finish.name}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-fit gap-2 rounded-full px-6"
              nativeButton={false}
              render={<a href="#" />}
            >
              View details
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
