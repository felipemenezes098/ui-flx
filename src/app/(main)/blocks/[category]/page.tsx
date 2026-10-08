import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/core/footer'
import { categories } from '@/lib/blocks/block-catalog'

import { BlockPreviewGrid } from '../components/block-preview-grid'
import { BlockBreadcrumb } from './[slug]/components/block-breadcrumb'

export const dynamicParams = false

type Props = {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }))
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { category: slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return {}

  const title = `${category.category} blocks for shadcn/ui`
  const description = `${category.description} Copy and paste, or install with the shadcn CLI.`

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function BlockCategoryPage({ params }: Readonly<Props>) {
  const { category: slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const others = categories.filter((c) => c.slug !== slug)

  return (
    <div className="container-page flex flex-col px-6 pt-4">
      <BlockBreadcrumb category={slug} className="mb-6" />

      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {category.category} blocks
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          {category.description}
        </p>
      </header>

      <BlockPreviewGrid
        lgColumns={3}
        items={category.blocks.map((subBlock) => ({
          key: subBlock.slug,
          categorySlug: slug,
          subBlock,
        }))}
      />

      <section className="mt-12">
        <h2 className="mb-3 text-xl font-semibold tracking-tight">
          More categories
        </h2>
        <ul className="flex flex-wrap gap-2">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/blocks/${other.slug}`}
                className="text-muted-foreground hover:text-foreground border-border rounded-full border px-3 py-1 text-sm transition-colors"
              >
                {other.category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  )
}
