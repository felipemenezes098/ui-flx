'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { blocks } from '@/lib/block-registry'
import { cn } from '@/lib/utils'

const imageHeights = ['h-38', 'h-42', 'h-44', 'h-48', 'h-44', 'h-48'] as const

const allBlocks = blocks.flatMap((category) =>
  category.blocks.map((block) => ({
    ...block,
    categorySlug: category.slug,
    categoryName: category.category,
  })),
)

interface BlocksMasonryProps {
  basePath: 'docs' | 'cms'
}

export function BlocksMasonry({ basePath }: Readonly<BlocksMasonryProps>) {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<
    string | null
  >(null)

  const filteredBlocks =
    selectedCategorySlug == null
      ? allBlocks
      : allBlocks.filter((block) => block.categorySlug === selectedCategorySlug)

  const handleCategoryClick = (slug: string | null) => {
    setSelectedCategorySlug((current) => (current === slug ? null : slug))
  }

  return (
    <div className="space-y-6">
      <div className="bg-background sticky top-14 z-10 py-3">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategorySlug === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleCategoryClick(null)}
            className="rounded-lg"
          >
            All
          </Button>
          {blocks.map((category) => {
            const isSelected = selectedCategorySlug === category.slug
            return (
              <Button
                key={category.slug}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryClick(category.slug)}
                className="rounded-lg"
              >
                {category.category}
              </Button>
            )
          })}
        </div>
      </div>
      <div
        className="columns-1 gap-4 space-y-4 md:columns-2 lg:gap-5 lg:space-y-5"
        style={{ columnFill: 'balance' }}
      >
        {filteredBlocks.map((block, index) => (
          <Link
            key={block.slug}
            href={`/${basePath}/${block.categorySlug}/${block.slug}`}
            className="group hover:border-muted-foreground block break-inside-avoid overflow-hidden rounded-lg border"
          >
            <article>
              <div className="bg-white p-2">
                <div
                  className={cn(
                    'relative',
                    imageHeights[index % imageHeights.length],
                  )}
                >
                  <Image
                    src={block.image}
                    alt={block.name}
                    fill
                    className="object-contain object-top transition-transform duration-200 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 50vw, 50vw"
                  />
                </div>
              </div>
              <div className="border-t p-3 pt-2">
                <span className="text-muted-foreground text-xs">
                  {block.categoryName}
                </span>
                <h3 className="mt-0.5 font-medium tracking-tight">
                  {block.name}
                </h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
