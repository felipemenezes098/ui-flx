import { Button } from '@/components/ui/button'

const items = [
  {
    title: 'Dynamic cards',
    description: 'Swap images and copy without breaking layout or spacing.',
    image: {
      src: 'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop',
      alt: 'Alt 1',
    },
  },
  {
    title: 'Responsive by default',
    description:
      'Stacks on mobile and becomes a 3-column bento on larger screens.',
    image: {
      src: 'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop',
      alt: 'Alt 2',
    },
  },
  {
    title: 'Clean visual hierarchy',
    description:
      'Primary content stands out while the supporting cards stay readable.',
    image: {
      src: 'https://images.unsplash.com/photo-1683143726118-9abaed4e10f9?q=80&w=1062&auto=format&fit=crop',
      alt: 'Alt 3',
    },
  },
  {
    title: 'Extendable cards',
    description: 'Add more cards, switch aspect ratios, and tune the spacing.',
    image: {
      src: 'https://images.unsplash.com/photo-1734552452335-e8b67797bad0?q=80&w=1212&auto=format&fit=crop',
      alt: 'Alt 4',
    },
  },
]

export function BentoGrids01() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="bg-card col-span-1 overflow-hidden rounded-md p-4 md:col-span-2">
            <div className="grid h-full grid-cols-1 items-stretch gap-6 md:grid-cols-2">
              <div className="flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                    Build bento sections in minutes
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Create a bold primary feature with a CTA and media, then
                    follow it with supporting image cards.
                  </p>
                </div>

                <div className="flex">
                  <Button
                    className="w-fit rounded-full px-4"
                    variant="outline"
                    size="sm"
                    nativeButton={false}
                    render={<a href="#" />}
                  >
                    Explore blocks
                  </Button>
                </div>
              </div>

              <div className="bg-muted relative min-h-64 w-full overflow-hidden rounded-md md:min-h-0">
                <img
                  src="https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop"
                  alt="Alt 5"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </div>
          </article>

          {items.map((item) => (
            <article
              key={item.title}
              className="bg-card col-span-1 overflow-hidden rounded-md p-4"
            >
              <div className="flex h-full flex-col gap-6">
                <div className="bg-muted relative aspect-[4/3] overflow-hidden rounded-md">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
