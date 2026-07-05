import type { Metadata } from 'next'
import type { ComponentType } from 'react'

import {
  ConceptGalleryCard,
  ConceptGalleryCardBadge,
  ConceptGalleryCardFooter,
  ConceptGalleryCardMedia,
  ConceptGalleryCardTitle,
} from '@/components/core/gallery/concept-gallery-card'
import { GalleryGridLink, GalleryGridUniform } from '@/components/core/gallery/gallery-grid'
import { Footer } from '@/components/core/footer'
import { FormsConcept } from '@/lib/patterns/pattern-concepts'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

type PatternListingItem = {
  slug: string
  name: string
  href: string
  preview: ComponentType
  hasNew?: boolean
}

const formsListingItem: PatternListingItem = {
  slug: 'forms',
  name: 'Forms',
  href: '/forms/react-hook-form',
  preview: FormsConcept,
  hasNew: true,
}

const sortedPatternItems: PatternListingItem[] = [
  ...patternCategories.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    href: `/patterns/${cat.slug}`,
    preview: cat.preview,
    hasNew: cat.hasNew,
  })),
  formsListingItem,
].toSorted((a, b) => a.name.localeCompare(b.name))

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Patterns'
const description =
  'Practical UI compositions built with shadcn/ui — copy, adapt, ship.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: 'summary_large_image', title, description },
}

export default function PatternsPage() {
  return (
    <main className="container-page min-w-0">
      <div className="container-page-inner">
        <div className="flex flex-col gap-10 px-3 py-10">
          <section className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              UI Patterns
            </h1>
            <p className="text-muted-foreground max-w-md text-balance">
              Patterns for everyday interfaces, built with shadcn/ui. Take the
              prompt or the code.{' '}
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>{' '}
            </p>
          </section>
          <section>
            <GalleryGridUniform className="md:grid-cols-3">
              {sortedPatternItems.map((item) => {
                const Concept = item.preview
                return (
                  <GalleryGridLink key={item.slug} href={item.href}>
                    <ConceptGalleryCard>
                      <ConceptGalleryCardMedia className="aspect-square">
                        {item.hasNew && <ConceptGalleryCardBadge />}
                        <Concept />
                      </ConceptGalleryCardMedia>
                      <ConceptGalleryCardFooter>
                        <ConceptGalleryCardTitle>
                          {item.name}
                        </ConceptGalleryCardTitle>
                      </ConceptGalleryCardFooter>
                    </ConceptGalleryCard>
                  </GalleryGridLink>
                )
              })}
            </GalleryGridUniform>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
