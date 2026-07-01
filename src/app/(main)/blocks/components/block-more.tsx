import Link from 'next/link'

import { blocks } from '@/lib/blocks/block-catalog'

import {
  BlockPreviewCard,
  BlockPreviewCardBadge,
  BlockPreviewCardFooter,
  BlockPreviewCardImage,
  BlockPreviewCardPreview,
  BlockPreviewCardTitle,
} from './block-preview-card'

interface BlockMoreProps {
  category: string
  slug: string
}

export function BlockMore({ category, slug }: Readonly<BlockMoreProps>) {
  const cat = blocks.find((c) => c.slug === category)
  const related = cat?.blocks.filter((b) => b.slug !== slug) ?? []

  if (!cat || related.length === 0) return null

  return (
    <section className="mt-10">
      <div className="mb-6 flex flex-col">
        <h2 className="text-xl font-semibold tracking-tight">More</h2>
        <p className="text-muted-foreground text-sm">
          Other blocks in {cat.category}.
        </p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {related.map((subBlock) => (
          <Link
            key={subBlock.slug}
            href={`/blocks/${category}/${subBlock.slug}`}
            className="group relative mb-4 block w-full min-w-0 break-inside-avoid"
          >
            <BlockPreviewCard>
              <BlockPreviewCardPreview className="flex min-h-30 items-center justify-center">
                {subBlock.hasNew && <BlockPreviewCardBadge />}
                <BlockPreviewCardImage
                  image={subBlock.image}
                  alt={subBlock.name}
                />
              </BlockPreviewCardPreview>
              <BlockPreviewCardFooter>
                <BlockPreviewCardTitle>{subBlock.name}</BlockPreviewCardTitle>
              </BlockPreviewCardFooter>
            </BlockPreviewCard>
          </Link>
        ))}
      </div>
    </section>
  )
}
