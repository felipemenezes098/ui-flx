import { ArrowRight } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const collections = [
  {
    title: 'Peripherals',
    description:
      'Quiet, precise tools that keep your desk calm and your hands moving.',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop',
    alt: 'Alt 1',
    className: 'md:col-span-1',
  },
  {
    title: 'Immersive',
    description:
      'Spatial headsets built for focus, play and long sessions in comfort.',
    image:
      'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1600&auto=format&fit=crop',
    alt: 'Alt 2',
    className: 'md:col-span-2',
  },
  {
    title: 'Audio',
    description:
      'Balanced sound for deep work, slow mornings and every commute.',
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop',
    alt: 'Alt 3',
    className: 'md:col-span-1',
  },
]

export function BentoGrids02() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 py-20 sm:py-28 md:grid-cols-4">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className={cn(
              'bg-muted relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-3xl p-8 sm:min-h-[32rem]',
              collection.className,
            )}
          >
            <div className="absolute inset-x-0 top-0 -z-10 h-[62%] mask-b-from-60% mask-b-to-100% mix-blend-multiply dark:opacity-80 dark:mix-blend-normal">
              <img
                src={collection.image}
                alt={collection.alt}
                decoding="async"
                className="size-full object-cover grayscale"
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <h2 className="text-foreground text-2xl font-medium tracking-tight sm:text-3xl">
                {collection.title}
              </h2>
              <p className="text-muted-foreground max-w-xs text-sm sm:text-base">
                <Balancer>{collection.description}</Balancer>
              </p>
              <Button
                variant="link"
                className="text-foreground mt-2 h-10 gap-2 px-0"
                nativeButton={false}
                render={<a href="#" />}
              >
                Explore collection
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
