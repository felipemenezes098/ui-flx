'use client'

import Link from 'next/link'

import { getConceptBySlug } from '@/lib/concepts/concepts-catalog'

import { conceptRegistry } from '@/app/(main)/concepts/components/concept-registry'
import { Button } from '@/components/ui/button'

const CATEGORY = 'dashboard'
const CONCEPT = 'dashboard-01'

export function ConceptSpotlight() {
  const Concept = conceptRegistry[CONCEPT]
  const meta = getConceptBySlug(CATEGORY, CONCEPT)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="flex max-w-2xl flex-col gap-2">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Concepts
          </span>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Where patterns come together
          </h2>
          <p className="text-muted-foreground">
            The same patterns, composed into a complete interface. A dashboard.
            A chat. Anything.
          </p>
        </div>
        <Button asChild variant="link" size="sm" className="bg-background">
          <Link href="/concepts">Browse concepts</Link>
        </Button>
      </div>

      {Concept && (
        <div
          aria-label={meta?.name ?? CONCEPT}
          className="relative block max-h-[650px] overflow-hidden"
        >
          <Concept />
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-1.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-background pointer-events-auto"
            >
              <Link href="/concepts">View all</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
