import type { Metadata } from 'next'

import { HeroHeadlinePreviewExample } from '@/components/flx/blocks/hero/hero-headline-preview/hero-headline-preview-example'

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
    <main className="mx-auto md:max-w-5xl lg:max-w-6xl 2xl:max-w-[90rem]">
      <HeroHeadlinePreviewExample />
    </main>
  )
}
