import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '@/components/core/footer'
import { Logo } from '@/components/core/logo'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

import { BlockShowcase } from './components/block-showcase'
import { BlocksPreview } from './components/blocks-preview'
import { ButtonGithub } from './components/button-github'
import { NewsBanner } from './components/news-banner'

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
    <main className="mx-auto md:max-w-5xl lg:max-w-6xl xl:max-w-6xl 2xl:max-w-360">
      <div className="flex flex-col gap-10 px-3 py-8 md:gap-20 md:py-16">
        <section className="flex flex-col items-center gap-8 text-center">
          <NewsBanner />
          <div className="flex flex-col items-center gap-4">
            <h1 className="max-w-6xl text-2xl font-bold md:text-3xl">
              {siteConfig.title}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button className="rounded-xl" asChild>
              <Link href="/blocks">Explore Blocks</Link>
            </Button>
            <ButtonGithub />
          </div>
        </section>
        <section>
          <BlockShowcase />
        </section>
        <section className="mt-10 flex flex-col gap-4">
          <h2 className="text-foreground text-center text-2xl font-bold">
            Blocks
          </h2>
          <BlocksPreview />
        </section>
      </div>
      <Footer />
    </main>
  )
}
