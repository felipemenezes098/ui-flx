import { ArrowUpRight } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

export function Content18() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:gap-14 sm:py-28">
        <h2 className="text-foreground mx-auto max-w-3xl text-center text-3xl font-medium tracking-tight sm:text-5xl">
          <Balancer>More Than a Vase, a Habit of Slowing Down</Balancer>
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
          <div className="relative overflow-hidden outline outline-black/10 lg:col-span-8 dark:outline-white/10">
            <div className="bg-muted aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1608732122584-76c5d0b89ff2?q=80&w=1600&auto=format&fit=crop"
                alt="Alt 1"
                decoding="async"
                className="size-full object-cover object-[50%_40%]"
              />
            </div>
            <div className="bg-background flex flex-col items-start gap-4 p-6 sm:absolute sm:bottom-0 sm:left-0 sm:w-[60%] sm:max-w-md">
              <p className="text-foreground text-sm leading-relaxed sm:text-base">
                Each vase is thrown by hand and left unglazed on the outside, so
                it feels like stone and ages like it too.
              </p>
              <a
                href="#"
                className="text-foreground border-foreground hover:border-foreground/50 flex h-10 items-end gap-1.5 border-b pb-1 text-sm font-medium transition-colors"
              >
                All vessels
                <ArrowUpRight aria-hidden className="mb-0.5 size-3.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4">
            <p className="text-foreground text-sm leading-relaxed sm:text-base">
              Made in small batches for tables, shelves and windowsills, in
              shapes that hold a single branch as well as a full bunch.
            </p>
            <div className="bg-muted relative aspect-[4/5] w-full overflow-hidden outline outline-black/10 lg:flex-1 dark:outline-white/10">
              <img
                src="https://images.unsplash.com/photo-1591625591034-75d303d2e1a4?q=80&w=1200&auto=format&fit=crop"
                alt="Alt 2"
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
