import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'
import { siteConfig } from '@/config/site'

import { BlocksPreview } from './components/blocks-preview'
import { HeroSection } from './components/hero-section'
import { IllustrationsPreview } from './components/illustrations-preview'
import { PatternTeaser } from './components/pattern-teaser'
import { IntentShowcase } from './components/intent-showcase'
import { IntentList } from './components/intent-showcase/intent-list'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
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
                Blocks
              </span>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Sections, ready to ship
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Full page sections with live editing. Copy the code and ship.
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                href="/blocks"
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className: 'bg-background',
                  }),
                )}
              >
                View all
              </Link>
            </div>
          </div>

          <BlocksPreview />
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col justify-between md:flex-row md:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Illustrations
              </span>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                UI that feels alive
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Elegant visuals built with shadcn/ui and Motion. Copy and paste.
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                href="/illustrations"
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className: 'bg-background',
                  }),
                )}
              >
                View all
              </Link>
            </div>
          </div>

          <IllustrationsPreview />
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
              <p className="text-muted-foreground max-w-2xl">
                Describe what you want to build. Get the decision, the
                reasoning, and the code behind it.
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                href="/intents"
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className: 'bg-background',
                  }),
                )}
              >
                View all
              </Link>
            </div>
          </div>

          <IntentShowcase />

          <IntentList />
        </section>
      </div>
      <Footer />
    </main>
  )
}
