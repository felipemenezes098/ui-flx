'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { blocks } from '@/lib/blocks-source'

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
  const { resolvedTheme } = useTheme()

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
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {filteredBlocks.map((block) => (
          <Link
            key={block.slug}
            href={`/${basePath}/${block.categorySlug}/${block.slug}`}
            className="group border-border focus-visible:outline-ring relative mb-6 flex break-inside-avoid flex-col overflow-hidden rounded-xl border focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <div className="bg-muted group-hover:bg-accent-foreground/6 dark:group-hover:bg-accent-foreground/20 p-3">
              <div className="rounded-lg bg-white p-3">
                <Image
                  src={
                    resolvedTheme === 'dark' ? block.image.dark : block.image.light
                  }
                  alt={block.name}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
