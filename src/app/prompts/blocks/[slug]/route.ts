import { categories } from '@/lib/blocks/block-catalog'
import { buildBlockPrompt } from '@/lib/blocks/blocks-utils'
import { toRegistryCodeFiles } from '@/lib/registry-source'
import { getRegistryItem } from '@/lib/registry-utils.server'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.blocks.map((block) => ({ slug: block.slug })),
  )
}

export async function GET(
  _request: Request,
  { params }: Readonly<{ params: Promise<{ slug: string }> }>,
) {
  const { slug } = await params
  const category = categories.find((c) =>
    c.blocks.some((block) => block.slug === slug),
  )
  const item = getRegistryItem(slug)

  if (!category || !item) {
    return new Response('Not found', { status: 404 })
  }

  const prompt = buildBlockPrompt(
    item,
    category.slug,
    toRegistryCodeFiles(item),
  )

  return new Response(prompt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
