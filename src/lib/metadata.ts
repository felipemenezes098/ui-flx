import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'

type OgImageOptions = {
  title: string
  description: string
}

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  imageTitle?: string
  type?: 'website' | 'article'
}

export function createOgImageUrl({ title, description }: OgImageOptions) {
  const params = new URLSearchParams({ title, description })
  return `/og?${params.toString()}`
}

export function createPageMetadata({
  title,
  description,
  path,
  imageTitle,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const alt = imageTitle ?? title
  const image = createOgImageUrl({ title: alt, description })

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: 'en_US',
      siteName: siteConfig.name,
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@fmenezes_',
      title,
      description,
      images: [image],
    },
  }
}
