import { useMDXComponents } from '@/mdx-components'

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export default async function BlockPage({ params }: Readonly<Props>) {
  const { category, slug } = await params

  const { default: Content } = await import(
    `../../../../content/blocks/${category}/${slug}.mdx`
  )

  const components = useMDXComponents({})

  return <Content components={components} />
}
