'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { RegistryItem } from 'shadcn/schema'

import { AnimatedBackground } from '@/components/core/animated-background'
import { PatternActions } from '@/components/core/patterns/pattern-actions'
import { PatternCard } from '@/components/core/patterns/pattern-card'
import {
  PatternGrid,
  patternGridItemVariants,
} from '@/components/core/patterns/pattern-grid'
import { PatternRenderer } from '@/components/core/patterns/pattern-renderer'
import { sketchCategories } from '@/lib/sketches/sketches-catalog'
import { buildSketchPrompt } from '@/lib/sketches/sketches-utils'
import type { SketchGridColumns, SketchItem } from '@/lib/sketches/sketch-types'

import { sketchRegistry } from '@/lib/sketches/sketch-registry'

const filters = [
  { slug: 'all', name: 'All' },
  ...sketchCategories.map((c) => ({ slug: c.slug, name: c.name })),
]

export function SketchesGallery() {
  const [active, setActive] = useState('all')
  const pathname = usePathname()

  useEffect(() => {
    const slugs = new Set(sketchCategories.map((c) => c.slug))
    const apply = () => {
      const hash = globalThis.location.hash.replace(/^#/, '')
      setActive(hash && slugs.has(hash) ? hash : 'all')
    }
    apply()
    globalThis.addEventListener('hashchange', apply)
    return () => globalThis.removeEventListener('hashchange', apply)
  }, [pathname])

  const select = (id: string | null) => {
    if (!id) return
    setActive(id)
    const base = globalThis.location.pathname + globalThis.location.search
    globalThis.history.replaceState(null, '', id === 'all' ? base : `${base}#${id}`)
  }

  const categories =
    active === 'all'
      ? sketchCategories
      : sketchCategories.filter((category) => category.slug === active)

  function renderCard(
    catalogItem: SketchItem,
    categorySlug: string,
    columns: SketchGridColumns,
  ) {
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
        previewClassName="p-4 sm:p-6 lg:p-8"
        className={patternGridItemVariants({
          span: catalogItem.span ?? 'default',
          columns,
        })}
        actions={
          <PatternActions
            item={item}
            categorySlug={categorySlug}
            buildPrompt={buildSketchPrompt}
          />
        }
      >
        <PatternRenderer name={catalogItem.slug} registry={sketchRegistry} />
      </PatternCard>
    )
  }

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="bg-muted flex flex-wrap justify-center gap-1 rounded-full p-1">
        <AnimatedBackground
          value={active}
          className="bg-background rounded-full"
          transition={{ ease: 'easeInOut', duration: 0.2 }}
          onValueChange={select}
        >
          {filters.map((filter) => (
            <button
              key={filter.slug}
              data-id={filter.slug}
              type="button"
              className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-center text-sm font-medium transition-transform active:scale-[0.98]"
            >
              {filter.name}
            </button>
          ))}
        </AnimatedBackground>
      </div>

      <div className="flex w-full flex-col gap-16">
        {categories.map((category) => {
          const columns = category.grid?.columns ?? 2

          return (
            <section key={category.slug} className="flex flex-col gap-6">
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
                  renderCard(catalogItem, category.slug, columns),
                )}
              </PatternGrid>
            </section>
          )
        })}
      </div>
    </div>
  )
}
