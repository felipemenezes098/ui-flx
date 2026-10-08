import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PresetScope } from '@/components/core/preset/preset-scope'
import { siteConfig } from '@/config/site'
import { blocks, getBlockBySlug } from '@/lib/blocks/block-catalog'
import { cn } from '@/lib/utils'

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

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ category: string; slug: string }>
}>): Promise<Metadata> {
  const { category: categorySlug, slug } = await params
  const category = blocks.find((c) => c.slug === categorySlug)

  if (!category) return { title: 'Block not found' }
  const item = category.blocks.find((b) => b.slug === slug)

  if (!item) return { title: 'Block not found' }

  const title = `${item.name} Preview`
  const description =
    item.description ||
    `Preview of the ${item.name} block. ${siteConfig.description}`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function BlockPreviewPage({
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
  if (!manifest) return notFound()

  const Comp = manifest.component

  return (
    <PresetScope
      preset={manifest.preset}
      className="bg-background flex min-h-screen w-full items-center justify-center"
    >
      <div
        data-block-preview
        className={cn(
          'mx-auto h-full w-full max-w-7xl p-5',
          manifest.meta?.containerClassName,
        )}
      >
        <Comp />
      </div>
    </PresetScope>
  )
}
