'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'

import { ScrollFadeEdges } from '../../../../../registry/blocks/shared/scroll-fade-edges'
import { blocks } from '@/lib/blocks-source'
import { cn } from '@/lib/utils'
import { getValidBlocksCategorySlug } from '../lib/blocks-category'

export function BlocksNavigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeTab = getValidBlocksCategorySlug(searchParams.get('category'))
  const { resolvedTheme } = useTheme()

  return (
    <ScrollFadeEdges
      direction="horizontal"
      className="w-full"
      scrollClassName="py-3 no-scrollbar"
      fadeWidth={50}
    >
      <div className="inline-flex h-auto w-max flex-nowrap gap-2 p-0">
        {blocks.map((block) => {
          const isActive = activeTab === block.slug
          const params = new URLSearchParams(searchParams.toString())
          params.set('category', block.slug)
          const href = `${pathname}?${params.toString()}`
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
                <div className="relative h-14 min-h-14 w-28 shrink-0 overflow-hidden rounded-md bg-white">
                  <Image
                    src={
                      resolvedTheme === 'dark'
                        ? block.image.dark
                        : block.image.light
                    }
                    alt=""
                    fill
                    className="object-contain object-center"
                    sizes="400px"
                  />
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
