import { notFound } from 'next/navigation'

import { blocks, getBlockDefaultsFromRegistry } from '@/lib/block-registry'

import registry from '../../../../../registry.json'

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
  const registryItem = registry.items.find((i) => i.name === slug)

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <PreviewReceiver
        slug={slug}
        initialProps={initialProps}
        componentClassName={registryItem?.meta?.componentClassName}
        containerClassName={registryItem?.meta?.containerClassName}
      />
    </div>
  )
}
