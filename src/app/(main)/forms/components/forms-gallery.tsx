'use client'

import { notFound } from 'next/navigation'
import type { RegistryItem } from 'shadcn/schema'

import { PatternActions } from '@/components/core/patterns/pattern-actions'
import { PatternCard } from '@/components/core/patterns/pattern-card'
import {
  PatternGrid,
  patternGridItemVariants,
} from '@/components/core/patterns/pattern-grid'
import { PatternRenderer } from '@/components/core/patterns/pattern-renderer'
import { getFormLibraryBySlug } from '@/lib/forms/catalog'
import type {
  PatternGridColumns,
  PatternItem,
} from '@/lib/patterns/pattern-types'

import { useFormsFilter } from '../forms-filter-context'
import { formsRegistry } from '@/lib/forms/forms-registry'

export function FormsGallery({ librarySlug }: { librarySlug: string }) {
  const { active } = useFormsFilter()

  const library = getFormLibraryBySlug(librarySlug)
  if (!library) notFound()

  function renderCard(catalogItem: PatternItem, columns: PatternGridColumns) {
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
        previewClassName="2xl:p-20 xl:p-16 lg:p-10 md:p-10 sm:p-8 p-6"
        className={patternGridItemVariants({
          span: catalogItem.span ?? 'default',
          columns,
        })}
        actions={<PatternActions item={item} categorySlug={library!.slug} />}
      >
        <PatternRenderer name={catalogItem.slug} registry={formsRegistry} />
      </PatternCard>
    )
  }

  const categories =
    active === 'all'
      ? library.categories
      : library.categories.filter((category) => category.slug === active)

  return (
    <div className="flex flex-col gap-16">
      {categories.map((category) => {
        const columns = category.grid?.columns ?? 2

        return (
          <section
            key={category.slug}
            id={category.slug}
            className="flex scroll-mt-28 flex-col gap-6"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold tracking-tight">
                {category.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </div>
            <PatternGrid columns={columns}>
              {category.items.map((catalogItem) =>
                renderCard(catalogItem, columns),
              )}
            </PatternGrid>
          </section>
        )
      })}
    </div>
  )
}
