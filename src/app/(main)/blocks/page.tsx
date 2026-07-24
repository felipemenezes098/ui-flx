import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Footer } from '@/components/core/footer'

import { Blocks } from './components/blocks'
import { BlocksShell } from './components/blocks-shell'

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
    <main className="min-w-0">
      <Suspense>
        <BlocksShell>
          <Suspense fallback={<BlocksFallback />}>
            <Blocks />
          </Suspense>
          <Footer />
        </BlocksShell>
      </Suspense>
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
