import { BlockBreadcrumb } from '@/components/core/editor/live/block-breadcrumb'
import { Footer } from '@/components/core/footer'
import { useMDXComponents } from '@/mdx-components'
import { Metadata } from 'next'

import { BlockMore } from '../../components/block-more'

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { category, slug } = await params
  const { metadata } = await import(
    `@/app/content/blocks/${category}/${slug}.mdx`
  )
  return metadata ?? {}
}

export default async function BlockPage({ params }: Readonly<Props>) {
  const { category, slug } = await params

  const mod = await import(`@/app/content/blocks/${category}/${slug}.mdx`)
  const Content = mod.default
  const blockMeta = mod.metadata as { title?: string } | undefined
  const title =
    typeof blockMeta?.title === 'string' ? blockMeta.title : undefined

  const components = useMDXComponents({})

  return (
    <div className="container-page flex flex-col px-6 pt-4">
      <BlockBreadcrumb
        category={category}
        slug={slug}
        title={title}
        className="mb-6"
      />
      <Content components={components} />
      <BlockMore category={category} slug={slug} />
      <Footer />
    </div>
  )
}
