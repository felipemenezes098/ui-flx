import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'
import { allCompositions } from '@/lib/compositions/compositions-catalog'
import { buildCompositionPrompt } from '@/lib/compositions/compositions-utils'
import { toRegistryCodeFiles } from '@/lib/registry-source'
import { getRegistryItem } from '@/lib/registry-utils.server'

import { CompositionsGallery } from './compositions-gallery'
import type { CompositionPreviewData } from './compositions-gallery'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Compositions'
const description =
  'Full UI compositions for complete screens, built with shadcn/ui. Dashboards, chat, and more. Copy and paste.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: 'summary_large_image', title, description },
}

const previewData: Record<string, CompositionPreviewData> = Object.fromEntries(
  allCompositions.map((composition) => {
    const item = getRegistryItem(composition.slug)
    const codeFiles = toRegistryCodeFiles(item)
    const prompt = item
      ? buildCompositionPrompt(item, composition.categorySlug, codeFiles)
      : ''
    return [composition.slug, { codeFiles, prompt }]
  }),
)

export default function CompositionsPage() {
  return (
    <main className="container-page min-w-0">
      <div className="container-page-inner">
        <div className="flex flex-col items-center gap-8 px-3 py-10">
          <section className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Compositions
            </h1>
            <p className="text-muted-foreground max-w-md text-balance">
              Full UI compositions for complete screens, built with shadcn/ui.
              Dashboards, chat, and more.{' '}
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>
            </p>
          </section>

          <CompositionsGallery previewData={previewData} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
