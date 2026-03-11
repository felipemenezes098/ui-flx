import type { Metadata } from 'next'

import { HeroContentMediaUsage } from '@/components/flx/blocks/hero/hero-content-media/hero-content-media-usage'

export const metadata: Metadata = {
  title: 'New',
  description:
    'New blocks and components. Explore the latest UI blocks ready to use in your project.',
  openGraph: {
    title: 'New',
    description:
      'New blocks and components. Explore the latest UI blocks ready to use in your project.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New',
    description:
      'New blocks and components. Explore the latest UI blocks ready to use in your project.',
  },
}

export default function NewPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 py-10">
      <HeroContentMediaUsage />
    </div>
  )
}
