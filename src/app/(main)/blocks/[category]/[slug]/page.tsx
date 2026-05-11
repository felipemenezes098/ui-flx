import { BlockLivePageNavProvider } from '@/components/core/editor/block-live-breadcrumb'
import { Footer } from '@/components/core/footer'
import { useMDXComponents } from '@/mdx-components'
import { Metadata } from 'next'

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

  const components = useMDXComponents({})
  const blockTitle =
    typeof blockMeta?.title === 'string' ? blockMeta.title : undefined

  return (
    <BlockLivePageNavProvider value={{ category, slug, blockTitle }}>
      <div className="container-page flex flex-col gap-10 px-6">
        <Content components={components} />
        <Footer />
      </div>
    </BlockLivePageNavProvider>
  )
}
