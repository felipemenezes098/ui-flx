import type { Metadata } from 'next'
import { Footer } from '@/components/core/footer'
import { siteConfig } from '@/config/site'

import { BlockShowcase } from './components/block-showcase'
import { BlocksPreview } from './components/blocks-preview'
import { HeroSection } from './components/hero-section'

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
          <HeroSection />
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
