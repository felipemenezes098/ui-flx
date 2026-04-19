'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { ScrollFadeEdges } from '@/components/flx/blocks/shared/scroll-fade-edges'
import { blocks } from '@/lib/block-registry'
import { cn } from '@/lib/utils'

interface BlocksNavigationProps {
  readonly activeTab: string
}

export function BlocksNavigation({ activeTab }: BlocksNavigationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

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
                'flex shrink-0 flex-col items-center gap-1.5 rounded-xl border transition-all',
                'border-border hover:border-primary p-1',
                isActive && 'border-primary',
              )}
              aria-current={isActive ? 'true' : undefined}
              aria-label={block.category}
            >
              <div className="rounded-t-lg bg-white p-1">
                <div className="relative h-14 min-h-14 w-28 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={block.image}
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
