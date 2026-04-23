import type { Metadata } from 'next'

import { GridContentCardsExample } from '@/components/flx/blocks/content/grid-content-cards/grid-content-cards-example'

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
    <main className="mx-auto p-4 md:max-w-5xl lg:max-w-6xl 2xl:max-w-360">
      <GridContentCardsExample />
    </main>
  )
}
