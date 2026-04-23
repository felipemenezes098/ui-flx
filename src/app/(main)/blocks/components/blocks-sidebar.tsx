'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { ScrollFadeEdges } from '@/components/flx/blocks/shared/scroll-fade-edges'
import { getValidBlocksCategorySlug } from '@/app/(main)/blocks/lib/blocks-category'
import { blocks } from '@/lib/block-registry'
import { cn } from '@/lib/utils'

export function BlocksSidebar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeTab = getValidBlocksCategorySlug(searchParams.get('category'))

  return (
    <aside
      aria-label="Block categories"
      className={cn(
        'sticky top-[calc(var(--header-height)+var(--top-spacing)+0.375rem)] z-30 hidden h-[calc(100svh-var(--header-height)-var(--top-spacing)-2.5rem)] w-54 shrink-0 self-start lg:flex lg:flex-col',
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
          {blocks.map((block) => {
            const isActive = activeTab === block.slug
            const params = new URLSearchParams(searchParams.toString())
            params.set('category', block.slug)
            const href = `${pathname}?${params.toString()}`
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
                <div className="border-border relative h-9 w-9 shrink-0 overflow-hidden rounded-md border bg-white">
                  <Image
                    src={block.image}
                    alt=""
                    fill
                    className="object-contain p-0.5"
                    sizes="36px"
                  />
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
