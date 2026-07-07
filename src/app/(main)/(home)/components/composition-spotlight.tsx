'use client'

import Link from 'next/link'

import { getCompositionBySlug } from '@/lib/compositions/compositions-catalog'

import { compositionRegistry } from '@/lib/compositions/composition-registry'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CATEGORY = 'dashboard'
const COMPOSITION = 'dashboard-01'

export function CompositionSpotlight() {
  const Composition = compositionRegistry[COMPOSITION]
  const meta = getCompositionBySlug(CATEGORY, COMPOSITION)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="flex max-w-2xl flex-col gap-2">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Compositions
          </span>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Where patterns come together
          </h2>
          <p className="text-muted-foreground">
            The same patterns, composed into a complete interface. A dashboard.
            A chat. Anything.
          </p>
        </div>
        <Link
          href="/compositions"
          className={cn(
            buttonVariants({
              variant: 'link',
              size: 'sm',
              className: 'bg-background',
            }),
          )}
        >
          Browse compositions
        </Link>
      </div>

      {Composition && (
        <div
          aria-label={meta?.name ?? COMPOSITION}
          className="relative block max-h-[650px] overflow-hidden"
        >
          <Composition />
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-1.5">
            <Link
              href="/compositions"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                  className: 'bg-background pointer-events-auto',
                }),
              )}
            >
              View all
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
