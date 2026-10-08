import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlockView } from '@/components/core/blocks/block-view'
import { Footer } from '@/components/core/footer'
import { categories } from '@/lib/blocks/block-catalog'
import { getRegistryItem } from '@/lib/registry-utils.server'

import { BlockBreadcrumb } from './components/block-breadcrumb'
import { BlockImplementation } from './components/block-implementation'
import { BlockMore } from './components/block-more'

export const dynamicParams = false

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.blocks.map((block) => ({
      category: category.slug,
      slug: block.slug,
    })),
  )
}

function findBlock(category: string, slug: string) {
  const cat = categories.find((c) => c.slug === category)
  const manifest = cat?.blocks.find((b) => b.slug === slug)
  return cat && manifest ? { cat, manifest } : undefined
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { category, slug } = await params
  const found = findBlock(category, slug)
  if (!found) return {}

  // "Hero 02" alone is not something people search for, so name the
  // category and the stack in the title.
  const title = `${found.manifest.name}: ${found.cat.category} block for shadcn/ui`
  const description = `${found.manifest.description} Copy and paste, or install with the shadcn CLI.`

  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function BlockPage({ params }: Readonly<Props>) {
  const { category, slug } = await params
  const found = findBlock(category, slug)
  if (!found) notFound()

  const item = getRegistryItem(slug)

  return (
    <div className="container-page flex flex-col px-6 pt-4">
      <BlockBreadcrumb
        category={category}
        slug={slug}
        title={found.manifest.name}
        className="mb-6"
      />
      <BlockView category={category} slug={slug} />
      <BlockImplementation category={category} slug={slug} item={item} />
      <BlockMore category={category} slug={slug} />
      <Footer />
    </div>
  )
}
