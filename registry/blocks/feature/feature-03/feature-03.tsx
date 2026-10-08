import Balancer from 'react-wrap-balancer'

const items = [
  {
    title: 'Block Library',
    description:
      'Browse hundreds of production-ready blocks across every category, filtered by preset, type, and layout.',
    image:
      'https://images.unsplash.com/photo-1750044656775-40fd937a2438?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Alt 1',
  },
  {
    title: 'Presets & Theming',
    description:
      'Switch presets and design tokens to match your brand, and preview every block across breakpoints and color modes.',
    image:
      'https://images.unsplash.com/photo-1441039995991-e5c1178e605a?q=80&w=2053&auto=format&fit=crop',
    imageAlt: 'Alt 2',
  },
  {
    title: 'Code Export',
    description:
      "Copy production-ready code or install it via the CLI, typed and documented so it's ready to ship today.",
    image:
      'https://images.unsplash.com/photo-1640535092659-7856bff6679d?q=80&w=2071&auto=format&fit=crop',
    imageAlt: 'Alt 3',
  },
]

export function Feature03() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <div className="flex flex-col gap-4 md:sticky md:top-24 md:self-start">
            <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              <Balancer>Three surfaces, one connected workflow.</Balancer>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              <Balancer>
                Flexnative brings block browsing, theming, and code export into
                a single environment, built around how teams actually ship UI.
              </Balancer>
            </p>
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                  <Balancer>{item.title}</Balancer>
                </h3>
                <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
                  <Balancer>{item.description}</Balancer>
                </p>
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl shadow-sm outline outline-black/10 dark:outline-white/10">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
