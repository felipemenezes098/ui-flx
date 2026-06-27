import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'

import { SketchesGallery } from './sketches-gallery'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Sketches'
const description =
  'Low-fidelity wireframes of full screens — dashboards, chat, and more. Block out layout before the detail.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: 'summary_large_image', title, description },
}

export default function SketchesPage() {
  return (
    <main className="container-page min-w-0">
      <div className="container-page-inner">
        <div className="flex flex-col items-center gap-8 px-3 py-10">
          <section className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Sketches
            </h1>
            <p className="text-muted-foreground max-w-md text-balance">
              Low-fidelity wireframes of full screens — block out the layout
              before the detail.{' '}
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>
            </p>
          </section>

          <SketchesGallery />
        </div>
      </div>
      <Footer />
    </main>
  )
}
