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
    <main className="min-w-0 px-5 pt-12 pb-8 md:px-12 md:pt-32">
      <div className="mx-auto w-full max-w-[880px]">
        <div className="flex flex-col gap-4 md:gap-12">
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
            <GalleryGridUniform className="gap-x-6 gap-y-8 lg:grid-cols-3 2xl:grid-cols-3">
              {sortedPatternItems.map((item) => {
                const Concept = item.preview
                return (
                  <GalleryGridLink key={item.slug} href={item.href}>
                    <ConceptGalleryCard>
                      <ConceptGalleryCardMedia>
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
