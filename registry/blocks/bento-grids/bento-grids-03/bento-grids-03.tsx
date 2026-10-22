import Balancer from 'react-wrap-balancer'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const products = [
  {
    name: 'Everyday Smartwatch',
    price: '$ 189.00 USD',
    tag: 'Wearables',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop',
    alt: 'Alt 1',
  },
  {
    name: 'Studio Floor Lamp',
    price: '$ 149.00 USD',
    tag: 'Home',
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Alt 2',
    featured: true,
  },
  {
    name: 'Instant Film Camera',
    price: '$ 119.00 USD',
    tag: 'Photo',
    image:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Alt 3',
  },
  {
    name: 'Over-Ear Headphones',
    price: '$ 229.00 USD',
    tag: 'Audio',
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop',
    alt: 'Alt 4',
  },
  {
    name: 'Compact Earbuds',
    price: '$ 59.00 USD',
    tag: 'Audio',
    image:
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=1000&auto=format&fit=crop',
    alt: 'Alt 5',
  },
]

export function BentoGrids03() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:gap-12 sm:py-28">
        <h2 className="text-foreground text-3xl font-medium tracking-tight sm:text-4xl">
          <Balancer>New this season</Balancer>
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href="#"
              className={cn(
                'group focus-visible:ring-ring/50 flex flex-col gap-4 rounded-3xl outline-none focus-visible:ring-3',
                product.featured && 'sm:col-span-2 lg:col-span-1 lg:row-span-2',
              )}
            >
              <div
                className={cn(
                  'bg-muted relative aspect-square overflow-hidden rounded-3xl outline outline-black/5 dark:outline-white/10',
                  product.featured && 'lg:aspect-auto lg:flex-1',
                )}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <Badge
                  variant="outline"
                  className="bg-background text-muted-foreground absolute right-4 bottom-4 h-8 rounded-lg border-transparent px-3 text-sm font-normal"
                >
                  {product.tag}
                </Badge>
              </div>

              <div
                className={cn(
                  'flex flex-col gap-1',
                  product.featured && 'lg:items-center lg:text-center',
                )}
              >
                <p className="text-muted-foreground text-sm tabular-nums">
                  {product.price}
                </p>
                <h3 className="text-foreground text-lg font-medium">
                  {product.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
