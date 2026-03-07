import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Footer } from '@/components/core/footer'

import { Blocks } from './components/blocks'

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

export default function Home() {
  return (
    <main className="container-page mx-auto grid grid-cols-1 px-5">
      <div className="py-6">
        <section>
          <div className="flex flex-col justify-center">
            <h1 className="mb-1 text-3xl font-bold">Blocks</h1>
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
    </main>
  )
}

function BlocksFallback() {
  return (
    <section className="grid grid-cols-1 gap-6">
      <div className="bg-background sticky top-[55px] z-40 w-full">
        <div className="flex gap-2 py-3">
          <div className="border-border bg-muted h-20 w-28 animate-pulse rounded-xl border" />
          <div className="border-border bg-muted h-20 w-28 animate-pulse rounded-xl border" />
          <div className="border-border bg-muted h-20 w-28 animate-pulse rounded-xl border" />
        </div>
      </div>
      <div className="border-border bg-muted h-64 animate-pulse rounded-xl border" />
    </section>
  )
}
