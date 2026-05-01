import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { blocks } from '@/lib/catalog'

import { LiveEditor } from './components/live-editor'

export const dynamic = 'force-static'
export const revalidate = false
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

  const title = `${item.name} – Editor`
  const description =
    item.description ||
    `Edit and customize the ${item.name} block. ${siteConfig.description}`
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

export default async function BlockEditorPreviewPage({
  params,
}: Readonly<{
  params: Promise<{ category: string; slug: string }>
}>) {
  const { category: categorySlug, slug } = await params

  const category = blocks.find((c) => c.slug === categorySlug)
  if (!category) return notFound()

  const item = category.blocks.find((b) => b.slug === slug)
  if (!item) return notFound()

  return (
    <div className="container-page p-5">
      <LiveEditor item={item} category={categorySlug} />
    </div>
  )
}
