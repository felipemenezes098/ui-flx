import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Footer } from '@/components/core/footer'

import { Blocks } from './components/blocks'
import { BlocksSidebar } from './components/blocks-sidebar'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Blocks'
const description = 'All Blocks are ready to copy and paste into your websites.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function BlocksPage() {
  return (
    <main className="container-page container-page-inner flex min-w-0 items-start gap-6">
      <Suspense>
        <BlocksSidebar />
      </Suspense>
      <div className="min-w-0 flex-1">
        <div className="space-y-4 pt-1 pb-6">
          <section>
            <div className="flex flex-col justify-center">
              <h1 className="font-semi mb-1 text-2xl">Blocks</h1>
              <p className="text-muted-foreground mb-4 text-balance">
                All Blocks are ready to copy and paste into your websites.
              </p>
            </div>
          </section>
          <Suspense fallback={<BlocksFallback />}>
            <Blocks />
          </Suspense>
        </div>
        <Footer />
      </div>
    </main>
  )
}

function BlocksFallback() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="border-border bg-muted h-40 animate-pulse rounded-xl border" />
      <div className="border-border bg-muted h-40 animate-pulse rounded-xl border" />
      <div className="border-border bg-muted h-40 animate-pulse rounded-xl border" />
      <div className="border-border bg-muted h-40 animate-pulse rounded-xl border" />
    </section>
  )
}
