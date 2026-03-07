import type { Metadata } from 'next'

import { TabsMediaUsage } from '@/components/flx/blocks/content/tabs-media/tabs-media-usage'

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
    <div className="mx-auto max-w-6xl">
      <TabsMediaUsage />
    </div>
  )
}
