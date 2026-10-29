import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { JsonLd } from '@/components/core/json-ld'
import { blocks } from '@/lib/blocks/block-catalog'
import {
  getBlockCategoryDescription,
  getBlockCategoryTitle,
} from '@/lib/blocks/block-category-seo'
import { createPageMetadata } from '@/lib/metadata'
import { getBreadcrumbStructuredData } from '@/lib/structured-data'

import { BlocksCatalog } from '../components/blocks-catalog'

type Props = {
  params: Promise<{ category: string }>
}

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return blocks.map((category) => ({ category: category.slug }))
}

function findCategory(slug: string) {
  return blocks.find((category) => category.slug === slug)
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const category = findCategory((await params).category)
  if (!category) return {}

  return createPageMetadata({
    title: getBlockCategoryTitle(category),
    description: getBlockCategoryDescription(category),
    path: `/blocks/${category.slug}`,
    imageTitle: category.category,
  })
}

export default async function BlockCategoryPage({ params }: Readonly<Props>) {
  const category = findCategory((await params).category)
  if (!category) notFound()

  return (
    <>
      <JsonLd
        data={getBreadcrumbStructuredData([
          { name: 'Blocks', path: '/blocks' },
          { name: category.category, path: `/blocks/${category.slug}` },
        ])}
      />
      <BlocksCatalog
        title={getBlockCategoryTitle(category)}
        description={getBlockCategoryDescription(category)}
      />
    </>
  )
}
