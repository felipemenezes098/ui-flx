'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import type { BlockCategory, BlockItem } from '@/lib/block-registry'
import { blocks } from '@/lib/block-registry'
import { cn } from '@/lib/utils'

const imageHeight = 200
const displayLimit = 9

type BlockWithCategory = BlockItem & {
  categorySlug: string
  categoryName: string
}

function getAllBlocks(): BlockWithCategory[] {
  return blocks.flatMap((cat: BlockCategory) =>
    cat.blocks.map((b) => ({
      ...b,
      categorySlug: cat.slug,
      categoryName: cat.category,
    })),
  )
}

export function BlocksPreview() {
  const allBlocks = getAllBlocks()
  const displayedBlocks = allBlocks.slice(0, displayLimit)

  return (
    <div>
      <div className="relative max-h-[800px] overflow-hidden">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedBlocks.map((block) => (
            <Link
              key={`${block.categorySlug}-${block.slug}`}
              href={`/blocks?category=${block.categorySlug}#${block.categorySlug}-${block.slug}`}
              className={cn(
                'group border-border relative flex flex-col overflow-hidden rounded-xl border',
                'hover:border-muted-foreground/20 hover:bg-muted/20',
                'focus-visible:outline-ring hover:border-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2',
              )}
            >
              <div className="bg-white p-3">
                <div className="relative" style={{ height: imageHeight }}>
                  <Image
                    src={block.image}
                    alt={block.name}
                    fill
                    className="object-contain object-center transition-transform duration-200 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-0.5 border-t p-4">
                <h2 className="text-foreground font-medium tracking-tight">
                  {block.name}
                </h2>
                <p className="text-muted-foreground text-xs">
                  {block.categoryName}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div
          className="from-background via-background/70 pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex justify-center py-4">
        <Button asChild variant="secondary" size="sm" className="rounded-xl">
          <Link href="/blocks">View all</Link>
        </Button>
      </div>
    </div>
  )
}
