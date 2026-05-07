'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import type { BlockCategory, BlockItem } from '@/lib/catalog'
import { blocks } from '@/lib/catalog'
import { cn } from '@/lib/utils'

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

function BlockImage({
  src,
  alt,
}: {
  src: { light: string; dark: string }
  alt: string
}) {
  const [loaded, setLoaded] = useState(false)
  const { resolvedTheme } = useTheme()
  const imageSrc = resolvedTheme === 'dark' ? src.dark : src.light
  return (
    <div
      className={cn(
        'min-h-[80px] rounded-lg bg-white p-3',
        !loaded && 'animate-pulse',
      )}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 33vw"
        className={cn(
          'h-auto w-full transition-opacity duration-300',
          loaded ? 'opacity-100' : 'opacity-0',
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export function BlocksPreview() {
  const allBlocks = getAllBlocks()

  return (
    <div className="flex flex-col gap-10">
      <div className="columns-1 gap-6 p-1 sm:columns-2 lg:columns-3">
        {allBlocks.map((block) => (
          <Link
            key={`${block.categorySlug}-${block.slug}`}
            href={`/blocks?category=${block.categorySlug}#${block.categorySlug}-${block.slug}`}
            className="group focus-visible:outline-ring relative mb-6 flex break-inside-avoid flex-col overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <div className="bg-muted/80 group-hover:bg-accent-foreground/6 dark:group-hover:bg-accent-foreground/20 p-2">
              <BlockImage src={block.image} alt={block.name} />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="secondary" size="sm" className="rounded-xl">
          <Link href="/blocks">Preview all</Link>
        </Button>
      </div>
    </div>
  )
}
