import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { allCompositions } from '@/lib/compositions/compositions-catalog'

import { CompositionPreview } from './composition-preview'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return allCompositions.map((composition) => ({ slug: composition.slug }))
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>): Promise<Metadata> {
  const { slug } = await params
  const composition = allCompositions.find((c) => c.slug === slug)
  if (!composition) return { title: 'Composition not found' }

  const title = `${composition.name}`
  const description =
    composition.description ||
    `Preview of the ${composition.name} composition. ${siteConfig.description}`

  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function CompositionPreviewPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const composition = allCompositions.find((c) => c.slug === slug)
  if (!composition) return notFound()

  return (
    <CompositionPreview
      slug={slug}
      containerClassName={composition.meta?.containerClassName}
    />
  )
}
