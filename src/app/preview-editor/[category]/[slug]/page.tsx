import { notFound } from 'next/navigation'

import {
  blocks,
  getBlockBySlug,
  getBlockDefaultsFromRegistry,
} from '@/lib/blocks-source'

import { PreviewReceiver } from './components/preview-receiver'

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

  const initialProps = getBlockDefaultsFromRegistry(slug)
  const manifest = getBlockBySlug(slug)

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <PreviewReceiver
        slug={slug}
        initialProps={initialProps}
        componentClassName={manifest?.meta?.componentClassName}
        containerClassName={manifest?.meta?.containerClassName}
      />
    </div>
  )
}
