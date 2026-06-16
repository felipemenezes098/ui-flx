'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { AnimatedBackground } from '@/components/core/animated-background'
import { getFormLibraryBySlug } from '@/lib/forms/catalog'

import { useFormsFilter } from './forms-filter-context'
import { FormsTabs } from './forms-tabs'

function getLibrarySlugFromPathname(pathname: string) {
  return pathname.split('/').filter(Boolean)[1]
}

export function FormsToolbar() {
  const pathname = usePathname()
  const librarySlug = getLibrarySlugFromPathname(pathname)
  const library = librarySlug ? getFormLibraryBySlug(librarySlug) : undefined
  const { active, setActive } = useFormsFilter()

  useEffect(() => {
    const lib = librarySlug ? getFormLibraryBySlug(librarySlug) : undefined
    const slugs = lib?.categories.map((c) => c.slug) ?? []
    const hash = globalThis.location.hash.replace(/^#/, '')
    setActive(hash && slugs.includes(hash) ? hash : 'all')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const lib = librarySlug ? getFormLibraryBySlug(librarySlug) : undefined
    const slugs = lib?.categories.map((c) => c.slug) ?? []
    setActive((prev) => (slugs.includes(prev) ? prev : 'all'))
  }, [librarySlug, setActive])

  useEffect(() => {
    const url = active === 'all' ? pathname : `${pathname}#${active}`
    globalThis.history.replaceState(null, '', url)
  }, [active, pathname])

  if (!library) return <FormsTabs />

  const filters = [
    { slug: 'all', name: 'All' },
    ...library.categories.map((c) => ({ slug: c.slug, name: c.name })),
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <FormsTabs />
      <div className="bg-muted flex flex-wrap gap-1 rounded-full p-1">
        <AnimatedBackground
          value={active}
          className="bg-background rounded-full"
          transition={{ ease: 'easeInOut', duration: 0.2 }}
          onValueChange={(id) => id && setActive(id)}
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
    </div>
  )
}
