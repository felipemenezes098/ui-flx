import type { Metadata } from 'next'
import { Footer } from '@/components/core/footer'
import { siteConfig } from '@/config/site'

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
    <main className="container-page container-page-inner">
      <div className="flex flex-col gap-20 px-3 py-8 md:py-16">
        <section className="flex flex-col items-center gap-8 text-center">
          <HeroSection />
        </section>
        <section>
          <BlocksPreview />
        </section>
      </div>
      <Footer />
    </main>
  )
}
