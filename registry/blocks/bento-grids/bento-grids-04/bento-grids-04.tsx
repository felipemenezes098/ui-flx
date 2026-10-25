import { ArrowRight } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const callouts = [
  {
    title: 'Solid beech frame',
    description: 'Steam-bent and joined by hand for decades of daily use.',
    className: 'lg:top-[24%] lg:left-[5%] lg:w-[22%]',
    line: 'left-full',
  },
  {
    title: 'Moulded seat',
    description: 'Shaped to support long meals without needing a cushion.',
    className: 'lg:top-[12%] lg:right-[5%] lg:w-[22%]',
    line: 'right-full',
  },
  {
    title: 'Stackable by design',
    description: 'Sits flush, so four chairs fit in the space of one.',
    className: 'lg:right-[5%] lg:bottom-[14%] lg:w-[22%]',
    line: 'right-full',
  },
]

export function BentoGrids04() {
  return (
    <section className="bg-muted/50 dark:bg-background w-full">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-6 py-20 sm:py-28 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <article className="bg-card dark:bg-muted/40 relative isolate flex min-h-[24rem] flex-col gap-10 overflow-hidden rounded-3xl p-8 shadow-sm sm:p-10">
            <div
              aria-hidden
              className="bg-muted absolute -right-20 -bottom-28 -z-10 size-96 rounded-full"
            />
            <div
              aria-hidden
              className="bg-muted/60 absolute right-24 -bottom-16 -z-10 size-56 rounded-full"
            />
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <span
                aria-hidden
                className="bg-foreground size-1.5 rounded-full"
              />
              About
            </p>
            <h2 className="text-foreground text-3xl leading-tight font-normal tracking-tight sm:text-4xl">
              <Balancer>
                Furniture for everyday rooms,{' '}
                <span className="text-muted-foreground">
                  simple to live with, honest in its making and built to last.
                </span>
              </Balancer>
            </h2>
          </article>

          <article className="bg-card dark:bg-muted/40 flex flex-col items-start gap-8 rounded-3xl p-8 shadow-sm sm:p-10">
            <p className="text-foreground text-base leading-relaxed">
              At Fieldhouse we believe good furniture should be quiet, durable
              and easy to own. We work with small workshops to make a short
              range of chairs, tables and shelves, and we repair every piece we
              sell.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-3 rounded-full pr-1.5 pl-6"
              nativeButton={false}
              render={<a href="#" />}
            >
              Explore the range
              <span className="bg-foreground text-background flex size-9 items-center justify-center rounded-full">
                <ArrowRight className="size-4" />
              </span>
            </Button>
          </article>
        </div>

        <article className="bg-card dark:bg-muted/40 relative isolate flex flex-col items-center gap-8 overflow-hidden rounded-3xl p-6 shadow-sm lg:min-h-[44rem] lg:p-0">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] mask-radial-from-30% mask-radial-to-75% bg-[size:3rem_3rem]"
          />

          <div className="bg-muted relative aspect-[4/5] w-[min(75%,22rem)] overflow-hidden rounded-2xl outline outline-black/10 lg:absolute lg:top-1/2 lg:left-1/2 lg:w-[40%] lg:-translate-x-1/2 lg:-translate-y-1/2 dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1750306956117-460a9fd3f1b8?q=80&w=1200&auto=format&fit=crop"
              alt="Alt"
              decoding="async"
              className="size-full object-cover"
            />
          </div>

          <ul className="flex w-full flex-col gap-6 lg:contents">
            {callouts.map((callout) => (
              <li
                key={callout.title}
                className={cn(
                  'relative flex flex-col gap-1.5 lg:absolute',
                  callout.className,
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'bg-foreground/30 absolute top-3 hidden h-px w-10 lg:block',
                    callout.line,
                  )}
                />
                <h3 className="text-foreground text-lg font-normal tracking-tight">
                  {callout.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {callout.description}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
