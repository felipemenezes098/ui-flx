import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'
import { siteConfig } from '@/config/site'

import { BlocksPreview } from './components/blocks-preview'
import { HeroSection } from './components/hero-section'
import { PatternTeaser } from './components/pattern-teaser'
import { IntentShowcase } from './components/intent-showcase'
import { IntentList } from './components/intent-showcase/intent-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = false

const title = siteConfig.title
const description = siteConfig.description

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

export default function HomePage() {
  return (
    <main className="container-page container-page-inner pb-0!">
      <div className="flex flex-col gap-20 px-3 py-8 md:py-16">
        <section className="flex flex-col items-center gap-8 text-center">
          <HeroSection />
        </section>

        <section>
          <PatternTeaser />
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col justify-between md:flex-row md:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Intents
              </span>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                From problem to decision
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Describe what you want to build. Get the decision, the
                reasoning, and the code behind it.
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                asChild
                variant="link"
                size="sm"
                className="bg-background"
              >
                <Link href="/intents">View all</Link>
              </Button>
            </div>
          </div>

          <IntentShowcase />

          <IntentList />
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col justify-between md:flex-row md:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Blocks
              </span>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Sections, ready to ship
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Full page sections assembled from the primitives. Drop one in,
                wire your data, and move on.
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                asChild
                variant="link"
                size="sm"
                className="bg-background"
              >
                <Link href="/blocks">View all</Link>
              </Button>
            </div>
          </div>

          <BlocksPreview />
        </section>
      </div>
      <Footer />
    </main>
  )
}
