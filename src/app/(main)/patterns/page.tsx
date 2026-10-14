import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import type { ComponentType } from 'react'

import {
  ConceptGalleryCard,
  ConceptGalleryCardBadge,
  ConceptGalleryCardFooter,
  ConceptGalleryCardMedia,
  ConceptGalleryCardTitle,
} from '@/components/core/gallery/concept-gallery-card'
import {
  GalleryGridLink,
  GalleryGridUniform,
} from '@/components/core/gallery/gallery-grid'
import { PageHeader } from '@/components/core/page-header/page-header'
import { PageHeaderDescription } from '@/components/core/page-header/page-header-description'
import { PageHeaderTitle } from '@/components/core/page-header/page-header-title'
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

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: '/patterns',
})

export default function PatternsPage() {
  return (
    <main className="container-page min-w-0">
      <div className="container-page-inner">
        <div className="flex flex-col gap-12 px-3 pt-7 pb-10 md:pt-27">
          <PageHeader>
            <PageHeaderTitle>UI Patterns</PageHeaderTitle>
            <PageHeaderDescription>
              Patterns for everyday interfaces, built with shadcn/ui. Take the
              prompt or the code.{' '}
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>
            </PageHeaderDescription>
          </PageHeader>
          <section>
            <GalleryGridUniform className="lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
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
    </main>
  )
}
