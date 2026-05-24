'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { ScrollFadeEdges } from 'registry/blocks/shared/scroll-fade-edges'
import { blockCategories } from '@/lib/catalog'
import { cn } from '@/lib/utils'
import { useBlocksNavCategorySlug } from '../lib/use-blocks-nav-category'

export function BlocksNavigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const navCategorySlug = useBlocksNavCategorySlug()

  return (
    <ScrollFadeEdges
      direction="horizontal"
      className="w-full"
      scrollClassName="py-3 no-scrollbar"
      fadeWidth={50}
    >
      <div className="inline-flex h-auto w-max flex-nowrap gap-2 p-0">
        {blockCategories.map((block) => {
          const isActive =
            navCategorySlug !== null && navCategorySlug === block.slug
          const params = new URLSearchParams(searchParams.toString())
          params.set('category', block.slug)
          const href = `${pathname}?${params.toString()}`
          const Concept = block.concept
          return (
            <Link
              key={block.slug}
              href={href}
              className={cn(
                'group flex shrink-0 flex-col items-center gap-1.5 rounded-xl border transition-colors',
                'border-border p-1',
                isActive ? 'border-primary' : 'hover:border-primary/40',
              )}
              aria-current={isActive ? 'true' : undefined}
              aria-label={block.category}
            >
              <div className="bg-muted group-hover:bg-accent-foreground/6 dark:group-hover:bg-accent-foreground/20 rounded-lg p-1.5">
                <div className="relative h-14 min-h-14 w-28 shrink-0">
                  <div className="relative h-full w-full overflow-hidden rounded-md bg-muted/40">
                    <div
                      className="absolute top-0 left-0 origin-top-left"
                      style={{
                        width: '467px',
                        height: '233px',
                        transform: 'scale(0.24)',
                      }}
                    >
                      <Concept />
                    </div>
                  </div>
                  {block.hasNew && (
                    <span className="ring-background absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2" />
                  )}
                </div>
              </div>
              <span className="px-2 text-xs font-medium">{block.category}</span>
            </Link>
          )
        })}
      </div>
    </ScrollFadeEdges>
  )
}
