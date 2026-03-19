import type { Metadata } from 'next'

import { PrimaryItemGrid } from '@/components/flx/blocks/bento-grids/primary-item-grid/primary-item-grid'

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
    <div className="mx-auto px-3 py-8 md:max-w-5xl md:py-16 lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[90rem]">
      <PrimaryItemGrid
        primary={{
          title: 'Build bento sections in minutes',
          description:
            'Create a bold primary feature with a CTA and media, then follow it with supporting image cards—clean, responsive, and easy to customize.',
          cta: {
            ctaEnabled: true,
            text: 'Explore blocks',
            link: '/blocks',
            variant: 'default',
          },
          media: {
            title: 'Bento section preview',
            url: 'https://images.unsplash.com/photo-1624888726831-f06836b69e55?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        }}
        items={[
          {
            title: 'Dynamic cards',
            description:
              'Swap images and copy without breaking layout or spacing.',
            media: {
              title: 'Reusable cards media',
              url: 'https://images.unsplash.com/photo-1611310424006-42cf1e064288?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            title: 'Responsive by default',
            description:
              'Stacks on mobile and becomes a 3-column bento on larger screens.',
            media: {
              title: 'Responsive cards media',
              url: 'https://images.unsplash.com/photo-1712068944624-395e0948a71d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            title: 'Clean visual hierarchy',
            description:
              'Primary content stands out while the supporting cards stay readable.',
            media: {
              title: 'Visual hierarchy media',
              url: 'https://images.unsplash.com/photo-1617020329399-a1fe5d8646d5?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            title: 'Extendable cards',
            description:
              'Add more cards, switch aspect ratios, and tune the spacing.',
            media: {
              title: 'Extendable cards media',
              url: 'https://images.unsplash.com/photo-1678567668518-fc22c9c76f1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
        ]}
      />
    </div>
  )
}
