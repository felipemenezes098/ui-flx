'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { useBlocksNavCategorySlug } from '../lib/use-blocks-nav-category'
import { blockCategories } from '@/lib/catalog'
import { cn } from '@/lib/utils'

import { ScrollFadeEdges } from 'registry/blocks/shared/scroll-fade-edges'

export function BlocksSidebar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const navCategorySlug = useBlocksNavCategorySlug()

  return (
    <aside
      aria-label="Block categories"
      className={cn(
        'sticky top-20 z-30 hidden h-[calc(100svh-80px)] w-54 shrink-0 self-start lg:flex lg:flex-col',
      )}
    >
      <ScrollFadeEdges
        className="min-h-0 flex-1"
        scrollClassName="no-scrollbar py-1 pr-2 pl-0.5"
        direction="vertical"
        gradientFrom="from-background"
        fadeHeight={44}
        topThreshold={4}
        bottomThreshold={4}
      >
        <nav className="flex flex-col gap-0.5 pb-2">
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
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'text-foreground flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium',
                  'hover:bg-muted/70',
                  isActive && 'bg-muted',
                )}
              >
                <div className="relative h-9 w-12 shrink-0">
                  <div className="bg-muted/40 dark:bg-background relative h-full w-full overflow-hidden rounded-md border">
                    <div
                      className="absolute top-0 left-0 origin-top-left"
                      style={{
                        width: '200px',
                        height: '150px',
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
                <span className="truncate">{block.category}</span>
              </Link>
            )
          })}
        </nav>
      </ScrollFadeEdges>
    </aside>
  )
}
