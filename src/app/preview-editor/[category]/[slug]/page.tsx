import { notFound } from 'next/navigation'

import { blocks, getBlockBySlug } from '@/lib/catalog'

import { PreviewReceiver } from './components/preview-receiver'

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

export default async function PreviewEditorPage({
  params,
}: Readonly<{
  params: Promise<{ category: string; slug: string }>
}>) {
  const { category: categorySlug, slug } = await params

  const category = blocks.find((c) => c.slug === categorySlug)
  if (!category) return notFound()

  const item = category.blocks.find((b) => b.slug === slug)
  if (!item) return notFound()

  const manifest = getBlockBySlug(slug)
  const initialProps = manifest?.defaults ?? {}

  return (
    <div className="no-scrollbar flex min-h-screen w-full items-center justify-center">
      <PreviewReceiver
        slug={slug}
        initialProps={initialProps}
        componentClassName={manifest?.meta?.componentClassName}
        containerClassName={manifest?.meta?.containerClassName}
      />
    </div>
  )
}
