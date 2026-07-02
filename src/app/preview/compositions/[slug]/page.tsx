import { notFound } from 'next/navigation'

import { allCompositions } from '@/lib/compositions/compositions-catalog'

import { CompositionPreview } from './composition-preview'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return allCompositions.map((composition) => ({ slug: composition.slug }))
}

export default async function CompositionPreviewPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const composition = allCompositions.find((c) => c.slug === slug)
  if (!composition) return notFound()

  return <CompositionPreview slug={slug} />
}
