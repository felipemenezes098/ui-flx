import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'

import { IllustrationsGallery } from './illustrations-gallery'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Illustrations'
const description =
  'UI illustrations and motion components that make interfaces feel alive, built with shadcn/ui and Motion. Copy and paste.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: 'summary_large_image', title, description },
}

const railClass =
  'pointer-events-none absolute inset-y-0 hidden w-px [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] [background:repeating-linear-gradient(to_bottom,var(--border)_0_5px,transparent_5px_12px)] lg:block'

export default function IllustrationsPage() {
  return (
    <main className="container-page relative min-w-0">
      <div aria-hidden className={`${railClass} left-0`} />
      <div aria-hidden className={`${railClass} right-0`} />

      <div className="container-page-inner">
        <div className="flex flex-col items-center gap-8 px-3 py-10">
          <section className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Illustrations
            </h1>
            <p className="text-muted-foreground max-w-2xl text-balance">
              Elegant UI visuals built with shadcn/ui and Motion.
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>
            </p>
          </section>

          <IllustrationsGallery />
        </div>
      </div>
      <Footer />
    </main>
  )
}
