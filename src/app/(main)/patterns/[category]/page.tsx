import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCategoryBySlug, patternCategories } from '@/lib/patterns-catalog'
import { getPatternsByNames } from '@/lib/patterns-utils'

import { PatternCard } from '../components/pattern-card'
import { PatternCategoryNav } from '../components/pattern-category-nav'
import { PatternDetails } from '../components/pattern-details'
import { PatternGrid } from '../components/pattern-grid'
import { PatternRenderer } from '../components/pattern-renderer'
import { Footer } from '@/components/core/footer'

export const dynamic = 'force-static'
export const revalidate = false

export function generateStaticParams() {
  return patternCategories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  return { title: category.name, description: category.description }
}

export default async function PatternCategoryPage({
  params,
}: Readonly<{
  params: Promise<{ category: string }>
}>) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const items = getPatternsByNames(category.items.map((i) => i.slug))

  return (
    <div>
      <main className="container-page container-page-inner min-w-0">
        <div className="flex flex-col gap-8 px-3 py-10">
          <section className="max-w-xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {category.name}
            </h1>
            <p className="text-muted-foreground mt-2">{category.description}</p>
          </section>

          <PatternCategoryNav />
          <PatternGrid>
            {items.map((item) => (
              <PatternCard
                key={item.name}
                item={item}
                actions={<PatternDetails item={item} />}
              >
                <PatternRenderer name={item.name} />
              </PatternCard>
            ))}
          </PatternGrid>
        </div>
      </main>
      <Footer />
    </div>
  )
}
