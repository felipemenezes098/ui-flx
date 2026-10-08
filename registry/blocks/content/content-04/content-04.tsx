import Balancer from 'react-wrap-balancer'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const items = [
  {
    title: 'Design',
    description:
      'Clean, accessible components that make your product feel modern and easy to use.',
    image:
      'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop',
  },
  {
    title: 'Components',
    description:
      'Pre-built blocks you can drop into any layout. Customize once, reuse everywhere.',
    image:
      'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop',
  },
]

export function Content04() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:gap-12 sm:py-16">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl">
            <Balancer>Build with clarity</Balancer>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            <Balancer>
              Two focused stories, each with a headline, a short explanation,
              and a visual anchor.
            </Balancer>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item) => (
            <Card
              key={item.title}
              className="h-full overflow-hidden pt-0 shadow-sm"
            >
              <CardHeader className="pt-6">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0 pb-0">
                <div className="group/image relative aspect-video min-h-64 w-full overflow-hidden rounded-lg outline outline-black/10 dark:outline-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:scale-[1.03]"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
