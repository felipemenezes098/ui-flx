import type { Metadata } from 'next'
import Link from 'next/link'

import {
  CategoryPreviewCard,
  CategoryPreviewCardBadge,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardTitle,
} from '@/components/core/category-preview-card'
import { Footer } from '@/components/core/footer'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

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
        <div className="flex flex-col gap-10 px-3">
          <section className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
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
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {patternCategories
                .toSorted((a, b) => a.name.localeCompare(b.name))
                .map((category) => (
                  <Link
                    key={category.slug}
                    href={`/patterns/${category.slug}`}
                    className="group"
                  >
                    <CategoryPreviewCard>
                      <CategoryPreviewCardPreview className="aspect-square">
                        {category.hasNew && <CategoryPreviewCardBadge />}
                        <category.preview />
                      </CategoryPreviewCardPreview>
                      <CategoryPreviewCardFooter>
                        <CategoryPreviewCardTitle>
                          {category.name}
                        </CategoryPreviewCardTitle>
                      </CategoryPreviewCardFooter>
                    </CategoryPreviewCard>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
