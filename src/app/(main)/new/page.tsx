import type { Metadata } from 'next'

import { SingleTestimonial } from '@/components/flx/blocks/testimonials/single-testimonial/single-testimonial'

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
    <div className="mx-auto px-3 py-16 md:max-w-5xl lg:max-w-6xl 2xl:max-w-[90rem]">
      <SingleTestimonial
        quote="Switching to these blocks gave our team a cleaner system and helped us launch polished pages in a fraction of the time."
        author={{
          name: 'Sophie Carter',
          role: 'Product Design Lead at Northstar',
          avatar: {
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
            alt: 'Sophie Carter',
            fallback: 'SC',
          },
        }}
      />
    </div>
  )
}
