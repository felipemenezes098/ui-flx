import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const products = [
  {
    name: 'Open Oak Side Table',
    image:
      'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=900&auto=format&fit=crop',
    alt: 'Alt 1',
    position: 'object-center',
  },
  {
    name: 'Linen Dining Chair',
    image:
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=900&auto=format&fit=crop',
    alt: 'Alt 2',
    position: 'object-center',
  },
  {
    name: 'Rounded Lounge Chair',
    image:
      'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=900&auto=format&fit=crop',
    alt: 'Alt 3',
    position: 'object-[22%_center]',
  },
]

export function Content15() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-8 px-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10">
        <p className="text-muted-foreground flex items-center gap-2 text-sm lg:col-span-3">
          <span aria-hidden className="bg-foreground size-1.5 rounded-full" />
          New collection
        </p>

        <h2 className="text-foreground max-w-2xl text-2xl font-normal tracking-tight sm:text-3xl lg:col-span-9 lg:text-[2rem] lg:leading-tight">
          <Balancer>
            Simple furniture in oak, linen and wool, made to be lived with for
            decades.
          </Balancer>
        </h2>

        <hr className="border-border lg:col-span-12" />

        <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 lg:col-span-9 lg:col-start-4 lg:row-start-3">
          {products.map((product) => (
            <li key={product.name}>
              <a
                href="#"
                className="group focus-visible:ring-ring/50 flex flex-col gap-3 outline-none focus-visible:ring-3"
              >
                <div className="bg-muted relative aspect-[4/5] overflow-hidden outline outline-black/10 dark:outline-white/10">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      'size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]',
                      product.position,
                    )}
                  />
                </div>
                <h3 className="text-foreground text-sm font-medium">
                  {product.name}
                </h3>
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:col-span-3 lg:row-start-3 lg:flex lg:items-end lg:pb-8">
          <Button
            size="lg"
            className="w-fit rounded-full px-6"
            nativeButton={false}
            render={<a href="#" />}
          >
            Shop the collection
          </Button>
        </div>

        <hr className="border-border lg:col-span-12" />
      </div>
    </section>
  )
}
