import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

const articles = [
  {
    label: 'Objects',
    title: 'Choosing Pieces That Last',
    description: 'Simple vessels for everyday use.',
    image:
      'https://images.unsplash.com/photo-1554042861-0ad2fc2a8dc2?q=80&w=800&auto=format&fit=crop',
    alt: 'Alt 2',
    className: 'lg:col-span-4 lg:col-start-6 lg:row-start-2',
  },
  {
    label: 'Rooms',
    title: 'Space to Breathe',
    description: 'Leaving room around what you love.',
    image:
      'https://images.unsplash.com/photo-1567359755029-04f642e9a88f?q=80&w=800&auto=format&fit=crop',
    alt: 'Alt 3',
    className: 'lg:col-span-4 lg:col-start-6 lg:row-start-3',
  },
  {
    label: 'Behind the studio',
    title: 'Inside the Workshop',
    description: 'How each piece gets made.',
    image:
      'https://images.unsplash.com/photo-1588111948296-83a8e036e004?q=80&w=800&auto=format&fit=crop',
    alt: 'Alt 4',
    className: 'lg:col-span-4 lg:col-start-9 lg:row-start-4',
  },
]

export function Content19() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 px-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-y-8">
        <div className="flex flex-col gap-1 lg:col-span-7 lg:col-start-6">
          <p className="text-muted-foreground text-sm">Journal</p>
          <h2 className="text-foreground text-2xl font-normal tracking-tight sm:text-3xl">
            <Balancer>Living Slowly</Balancer>
          </h2>
        </div>

        <div className="bg-muted relative aspect-[4/5] w-full overflow-hidden outline outline-black/10 lg:col-span-5 lg:row-span-3 lg:row-start-2 dark:outline-white/10">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop"
            alt="Alt 1"
            decoding="async"
            className="size-full object-cover grayscale"
          />
        </div>

        {articles.map((article) => (
          <a
            key={article.title}
            href="#"
            className={cn(
              'group focus-visible:ring-ring/50 flex items-end gap-4 outline-none focus-visible:ring-3',
              article.className,
            )}
          >
            <div className="bg-muted relative aspect-[4/5] w-28 shrink-0 overflow-hidden outline outline-black/10 sm:w-40 dark:outline-white/10">
              <img
                src={article.image}
                alt={article.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover grayscale"
              />
            </div>
            <div className="flex flex-col gap-1.5 pb-1">
              <span className="text-muted-foreground text-xs">
                [ {article.label} ]
              </span>
              <h3 className="text-foreground text-sm font-medium sm:text-base">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {article.description}
              </p>
            </div>
          </a>
        ))}

        <div className="bg-muted relative aspect-[3/5] w-2/3 overflow-hidden outline outline-black/10 sm:w-1/2 lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-2 lg:w-full dark:outline-white/10">
          <img
            src="https://images.unsplash.com/photo-1624274333983-e0d8a0b8f47c?q=80&w=1000&auto=format&fit=crop"
            alt="Alt 5"
            loading="lazy"
            decoding="async"
            className="size-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  )
}
