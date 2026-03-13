import type { Metadata } from 'next'

import { MediaGridInteractiveExample } from '@/components/flx/blocks/content/media-grid-interactive/media-grid-interactive-example'

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
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-10">
      <MediaGridInteractiveExample />
    </div>
  )
}
