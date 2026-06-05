import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCategoryBySlug, patternCategories } from '@/lib/patterns-catalog'
import { getPatternByName } from '@/lib/patterns-utils'

import { PatternCard } from '../components/pattern-card'
import { PatternActions } from '../components/pattern-actions'
import {
  PatternGrid,
  patternGridItemVariants,
} from '../components/pattern-grid'
import { PatternRenderer } from '../components/pattern-renderer'

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

  const columns = category.grid?.columns ?? 3

  return (
    <PatternGrid columns={columns}>
      {category.items.map((catalogItem) => {
        const item = getPatternByName(catalogItem.slug)
        if (!item) return null

        return (
          <PatternCard
            key={item.name}
            item={item}
            className={patternGridItemVariants({
              span: catalogItem.span ?? 'default',
              columns,
            })}
            actions={<PatternActions item={item} categorySlug={slug} />}
          >
            <PatternRenderer name={item.name} />
          </PatternCard>
        )
      })}
    </PatternGrid>
  )
}
