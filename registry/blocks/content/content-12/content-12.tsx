import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop',
    alt: 'Alt 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1400&auto=format&fit=crop',
    alt: 'Alt 2',
  },
]

export function Content12() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 sm:gap-16 sm:py-28">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-foreground text-3xl font-medium tracking-tight sm:text-5xl">
            <Balancer>Made slowly, built to stay</Balancer>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            <Balancer>
              Every piece starts with honest materials and ends with hours of
              small refinements, so it feels right on day one and years later.
            </Balancer>
          </p>
          <Button
            size="lg"
            className="w-fit rounded-full px-6"
            nativeButton={false}
            render={<a href="#" />}
          >
            See how we work
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {images.map((image) => (
            <div
              key={image.alt}
              className="bg-muted relative aspect-[4/3] overflow-hidden rounded-3xl outline outline-black/10 dark:outline-white/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                decoding="async"
                className="size-full object-cover grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
