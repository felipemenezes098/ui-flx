import type { Metadata } from 'next'
import Image from 'next/image'
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {patternCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/patterns/${category.slug}`}
                className="group flex flex-col gap-2.5"
              >
                <div className="border-border bg-muted relative aspect-square overflow-hidden rounded-xl border">
                  <Image
                    src={category.image.light}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04] dark:hidden"
                  />
                  <Image
                    src={category.image.dark}
                    alt={category.name}
                    fill
                    className="hidden object-cover transition-transform duration-500 group-hover:scale-[1.04] dark:block"
                  />
                </div>
                <span className="text-foreground text-center text-sm font-medium group-hover:underline group-hover:underline-offset-4">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
