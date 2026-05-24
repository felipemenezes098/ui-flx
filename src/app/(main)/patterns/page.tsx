import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '@/components/core/footer'
import { patternCategories } from '@/lib/patterns-catalog'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Patterns'
const description =
  'Practical UI compositions built with shadcn/ui — copy, adapt, ship.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: 'summary_large_image', title, description },
}

export default function PatternsPage() {
  return (
    <main className="container-page container-page-inner min-w-0">
      <div className="flex flex-col gap-16 px-3 py-14 md:py-20">
        <section className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            UI Patterns
          </h1>
          <p className="text-muted-foreground max-w-md text-balance">
            Reusable patterns for everyday interfaces, built with shadcn/ui.{' '}
            {''}
            <span className="text-foreground font-medium">Copy and paste.</span>
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {patternCategories
              .toSorted((a, b) => a.name.localeCompare(b.name))
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/patterns/${category.slug}`}
                  className="group"
                >
                  <div className="bg-card/50 border-border flex flex-col gap-3 rounded-xl border p-3">
                    <div className="border-border bg-muted/40 relative aspect-square overflow-hidden rounded-lg border transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                      <category.preview />
                    </div>
                    <span className="text-foreground px-0.5 text-center text-sm font-medium group-hover:underline group-hover:underline-offset-4">
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
