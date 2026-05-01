import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { siteConfig } from '@/config/site'
import {
  blocks,
  getBlockBySlug,
  getBlockComponent,
  getBlockDefaultsFromRegistry,
  getBlockExample,
  getBlockVariationExample,
  getBlockVariationNames,
} from '@/lib/blocks-source'
import { cn } from '@/lib/utils'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return blocks.flatMap((category) =>
    category.blocks.flatMap((block) => {
      const variations = getBlockVariationNames(block.slug)
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

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ category: string; slug: string; variation?: string[] }>
}>): Promise<Metadata> {
  const { category: categorySlug, slug, variation } = await params
  const category = blocks.find((c) => c.slug === categorySlug)

  if (!category) return { title: 'Block not found' }
  const item = category.blocks.find((b) => b.slug === slug)

  if (!item) return { title: 'Block not found' }

  const variationName = variation?.[0]
  const title = variationName
    ? `${item.name} (${variationName}) Preview`
    : `${item.name} Preview`
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
  params: Promise<{ category: string; slug: string; variation?: string[] }>
}>) {
  const { category: categorySlug, slug, variation } = await params
  const variationName = variation?.[0]
  const category = blocks.find((c) => c.slug === categorySlug)
  if (!category) return notFound()

  const item = category.blocks.find((b) => b.slug === slug)
  if (!item) return notFound()

  const VariationExample = variationName
    ? getBlockVariationExample(slug, variationName)
    : null
  const Example = VariationExample || getBlockExample(slug)
  const Comp = Example || getBlockComponent(slug)
  if (!Comp) return notFound()

  const defaults = getBlockDefaultsFromRegistry(slug, variationName)
  const manifest = getBlockBySlug(slug)

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div
        className={cn(
          'mx-auto h-full w-full max-w-6xl p-10',
          manifest?.meta?.containerClassName,
        )}
      >
        {Example ? (
          <Comp />
        ) : (
          <Comp
            {...defaults}
            className={manifest?.meta?.componentClassName}
            imageProps={{
              unoptimized: true,
            }}
          />
        )}
      </div>
    </div>
  )
}
