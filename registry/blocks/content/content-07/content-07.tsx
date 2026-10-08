import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

const items = [
  {
    title: 'Design',
    content:
      'Clean, accessible components that make your product feel modern and easy to use.',
    image:
      'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop',
    cta: 'Learn more',
  },
  {
    title: 'Developer Experience',
    content:
      'Built with TypeScript, clear APIs, and documentation that gets you shipping faster.',
    image:
      'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop',
    cta: 'Get started',
  },
]

export function Content07() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:gap-12 sm:py-16">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl">
            <Balancer>Two ways to move faster</Balancer>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            <Balancer>
              Pair a strong visual with clear copy and an optional action — side
              by side.
            </Balancer>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col gap-5">
              <div className="group/image relative h-64 w-full overflow-hidden rounded-lg outline outline-black/10 dark:outline-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  <Balancer>{item.content}</Balancer>
                </p>
              </div>
              <Button
                variant="outline"
                className="w-fit rounded-full px-4"
                nativeButton={false}
                render={<a href="#" />}
              >
                {item.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
