import type { Metadata } from 'next'

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
    <div className="mx-auto px-3 py-8 md:max-w-5xl md:py-16 lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[90rem]"></div>
  )
}
