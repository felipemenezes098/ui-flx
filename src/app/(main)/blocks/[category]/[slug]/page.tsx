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

  const { default: Content } = await import(
    `@/app/content/blocks/${category}/${slug}.mdx`
  )

  const components = useMDXComponents({})

  return (
    <div className="container-page flex flex-col gap-10 px-6">
      <Content components={components} />
      <Footer />
    </div>
  )
}
