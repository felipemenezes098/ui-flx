import { notFound } from 'next/navigation'

import { PreviewEditorFrame } from '@/app/preview-editor/components/preview-editor-frame'
import { blocks } from '@/lib/blocks/block-catalog'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return blocks.flatMap((category) =>
    category.blocks.map((block) => ({
      category: category.slug,
      slug: block.slug,
    })),
  )
}

export default async function PreviewEditorFramePage({
  params,
}: Readonly<{
  params: Promise<{ category: string; slug: string }>
}>) {
  const { category: categorySlug, slug } = await params
  const category = blocks.find((c) => c.slug === categorySlug)
  if (!category) return notFound()

  const item = category.blocks.find((b) => b.slug === slug)
  if (!item) return notFound()

  return <PreviewEditorFrame slug={slug} />
}
