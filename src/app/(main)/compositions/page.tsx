import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'

import { CompositionsGallery } from './compositions-gallery'

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

          <CompositionsGallery />
        </div>
      </div>
      <Footer />
    </main>
  )
}
