import { blocks } from '@/lib/blocks/block-catalog'

import { BlockPreviewGrid } from '../../../components/block-preview-grid'

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

      <BlockPreviewGrid
        lgColumns={3}
        items={related.map((subBlock) => ({
          key: subBlock.slug,
          categorySlug: category,
          subBlock,
        }))}
      />
    </section>
  )
}
