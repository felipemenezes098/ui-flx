import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

import { siteConfig } from '@/config/site'

import { BlocksCatalog } from '../blocks/components/blocks-catalog'

export const dynamic = 'force-static'
export const revalidate = false

const title = siteConfig.title
const description =
  'Copy a prompt into your AI agent, or add it with the shadcn CLI. The code is yours.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: '/',
})

export default function HomePage() {
  return <BlocksCatalog title={title} description={description} />
}
