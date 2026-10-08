import { Code, Layers, Palette } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

const items = [
  {
    title: 'Design',
    description:
      'Clean, accessible components that make your product feel modern and easy to use.',
    icon: Palette,
    image:
      'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop',
  },
  {
    title: 'Components',
    description:
      'Pre-built blocks you can drop into any layout. Customize once, reuse everywhere.',
    icon: Layers,
    image:
      'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop',
  },
  {
    title: 'Developer Experience',
    description:
      'Built with TypeScript, clear APIs, and documentation that gets you shipping faster.',
    icon: Code,
    image:
      'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop',
  },
]

export function Content02() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:gap-12 sm:py-16">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl">
            <Balancer>Everything you need to ship</Balancer>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            <Balancer>
              Design, build, and iterate with blocks made for clarity, not
              clutter.
            </Balancer>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg outline outline-black/10 dark:outline-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <item.icon className="text-muted-foreground size-4 shrink-0" />
                  <h3 className="text-base font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
