'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { AnimatedBackground } from '@/components/core/animated-background'
import { patternGridItemVariants } from '@/components/core/patterns/pattern-grid'
import { compositionCategories } from '@/lib/compositions/compositions-catalog'
import type {
  CompositionGridColumns,
  CompositionItem,
} from '@/lib/compositions/composition-types'
import type { RegistryCodeFile } from '@/lib/registry-source'
import { cn } from '@/lib/utils'

import { CompositionViewTabs } from './components/composition-view-tabs'

const filters = [
  { slug: 'all', name: 'All' },
  ...compositionCategories.map((c) => ({ slug: c.slug, name: c.name })),
]

const PREVIEW_HEIGHT = 480

export interface CompositionPreviewData {
  codeFiles: RegistryCodeFile[]
  prompt: string
}

interface CompositionsGalleryProps {
  previewData: Record<string, CompositionPreviewData>
}

export function CompositionsGallery({
  previewData,
}: Readonly<CompositionsGalleryProps>) {
  const [active, setActive] = useState('all')
  const pathname = usePathname()

  useEffect(() => {
    const slugs = new Set(compositionCategories.map((c) => c.slug))
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
    globalThis.history.replaceState(
      null,
      '',
      id === 'all' ? base : `${base}#${id}`,
    )
  }

  const categories =
    active === 'all'
      ? compositionCategories
      : compositionCategories.filter((category) => category.slug === active)

  function renderItem(
    catalogItem: CompositionItem,
    columns: CompositionGridColumns,
  ) {
    const data = previewData[catalogItem.slug]

    return (
      <div
        key={catalogItem.slug}
        id={catalogItem.slug}
        className={cn(
          'flex scroll-mt-24 flex-col gap-2',
          patternGridItemVariants({
            span: catalogItem.span ?? 'default',
            columns,
          }),
        )}
      >
        <CompositionViewTabs
          src={`/preview/compositions/${catalogItem.slug}`}
          registryName={catalogItem.slug}
          codeFiles={data?.codeFiles ?? []}
          prompt={data?.prompt ?? ''}
          iframeHeight={PREVIEW_HEIGHT}
        />
      </div>
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
              {category.items.map((catalogItem) =>
                renderItem(catalogItem, columns),
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
