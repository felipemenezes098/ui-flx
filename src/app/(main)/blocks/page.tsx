import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

import { BlocksCatalog } from './components/blocks-catalog'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'shadcn/ui Blocks'
const description =
  'Landing page sections built with shadcn/ui. Copy the prompt or add any of them with the CLI.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: '/blocks',
})

export default function BlocksPage() {
  return <BlocksCatalog title={title} description={description} />
}
