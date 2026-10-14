'use client'

import { Search } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Hero09() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 sm:gap-14 sm:py-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 text-center">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>Find the perfect</Balancer>
            <br />
            <Balancer>block for your app.</Balancer>
          </h1>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base">
            <Balancer>
              Production-ready UI blocks built with React, Tailwind, and shadcn.
            </Balancer>
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-card focus-within:ring-ring/40 mx-auto flex w-full max-w-lg items-center gap-2 rounded-full border p-1.5 shadow-sm transition focus-within:ring-2"
          >
            <div className="text-muted-foreground pl-3">
              <Search className="size-4" />
            </div>
            <Input
              aria-label="Search blocks and components"
              placeholder="Search blocks and components"
              className="h-9 flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0 dark:bg-transparent"
            />
            <Button type="submit" className="shrink-0 rounded-full px-5">
              Search
            </Button>
          </form>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="relative mx-auto w-full overflow-hidden mask-t-from-35% mask-t-to-95% mask-x-from-80% mask-x-to-100% mask-b-from-55% mask-b-to-100% mask-radial-[95%_85%] mask-radial-from-60% mask-radial-to-100% mask-radial-at-center dark:opacity-85">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
              alt="Alt"
              decoding="async"
              className="aspect-16/10 w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
          <h2 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
            <Balancer>Blocks</Balancer>
            <br />
            <Balancer>crafted with purpose.</Balancer>
          </h2>
          <p className="text-muted-foreground max-w-xs text-sm lg:justify-self-end">
            <Balancer>
              A curated library where clean design, accessibility, and
              copy-paste code come together.
            </Balancer>
          </p>
        </div>
      </div>
    </section>
  )
}
