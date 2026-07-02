import { notFound } from 'next/navigation'

import { PreviewEditor } from '@/app/block-editor/components/preview-editor'
import { blocks, getBlockBySlug } from '@/lib/blocks/block-catalog'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return blocks.flatMap((category) =>
    category.blocks.flatMap((block) => {
      const manifest = getBlockBySlug(block.slug)
      const variations = Object.keys(manifest?.variations ?? {})
      const base = { category: category.slug, slug: block.slug }
      const defaultPath = { ...base, variation: undefined }
      const variationPaths = variations.map((v) => ({
        ...base,
        variation: [v] as string[],
      }))
      return [defaultPath, ...variationPaths]
    }),
  )
}

export default async function PreviewEditorPage({
  params,
}: Readonly<{
  params: Promise<{ category: string; slug: string; variation?: string[] }>
}>) {
  const { category: categorySlug, slug, variation } = await params
  const category = blocks.find((c) => c.slug === categorySlug)
  if (!category) return notFound()

  const item = category.blocks.find((b) => b.slug === slug)
  if (!item) return notFound()

  return (
    <PreviewEditor
      category={categorySlug}
      slug={slug}
      variation={variation?.[0]}
    />
  )
}
