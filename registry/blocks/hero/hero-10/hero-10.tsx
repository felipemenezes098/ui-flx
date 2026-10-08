import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fan = [
  {
    src: 'https://images.unsplash.com/photo-1685013640715-8701bbaa2207?q=80&w=900&auto=format&fit=crop',
    alt: 'Alt 1',
    className: 'z-10 -mr-8 w-[38%] translate-y-6 -rotate-6',
  },
  {
    src: 'https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=900&auto=format&fit=crop',
    alt: 'Alt 2',
    className: 'z-20 w-[42%] -translate-y-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=900&auto=format&fit=crop',
    alt: 'Alt 3',
    className: 'z-10 -ml-8 w-[38%] translate-y-6 rotate-6',
  },
]

export function Hero10() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center sm:gap-10 sm:py-28">
        <div className="flex w-full max-w-2xl flex-col items-center gap-5">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>Build faster interfaces</Balancer>
            <br />
            <Balancer>
              with <span className="text-primary">Ready-Made Blocks</span>
            </Balancer>
          </h1>
          <p className="text-muted-foreground max-w-lg text-sm sm:text-base">
            <Balancer>
              Compose beautiful products from accessible, production-ready UI
              blocks that drop straight into your codebase.
            </Balancer>
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <Button
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="w-fit rounded-full px-4"
              nativeButton={false}
              render={<a href="#" />}
            >
              How it works
            </Button>
          </div>
          <p className="text-muted-foreground text-xs font-medium">
            Trusted by 2k+ product teams
          </p>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <div className="relative flex w-full items-center justify-center">
            {fan.map((card) => (
              <div
                key={card.src}
                className={cn(
                  'relative aspect-4/5 shrink-0 overflow-hidden rounded-xl shadow-xl outline outline-black/10 dark:outline-white/10',
                  card.className,
                )}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
