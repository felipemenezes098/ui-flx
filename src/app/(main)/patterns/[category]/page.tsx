import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { RegistryItem } from 'shadcn/schema'

import {
  getCategoryBySlug,
  patternCategories,
} from '@/lib/patterns/patterns-catalog'

import { PatternActions } from '@/components/core/patterns/pattern-actions'
import { PatternCard } from '@/components/core/patterns/pattern-card'
import {
  PatternGrid,
  patternGridItemVariants,
} from '@/components/core/patterns/pattern-grid'
import { PatternRenderer } from '@/components/core/patterns/pattern-renderer'

import { patternRegistry } from '@/lib/patterns/pattern-registry'

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
        const item = {
          name: catalogItem.slug,
          title: catalogItem.name,
          description: catalogItem.description,
          type: 'registry:block',
        } as RegistryItem

        return (
          <PatternCard
            key={catalogItem.slug}
            item={item}
            className={patternGridItemVariants({
              span: catalogItem.span ?? 'default',
              columns,
            })}
            actions={<PatternActions item={item} categorySlug={slug} />}
          >
            <PatternRenderer
              name={catalogItem.slug}
              registry={patternRegistry}
            />
          </PatternCard>
        )
      })}
    </PatternGrid>
  )
}
