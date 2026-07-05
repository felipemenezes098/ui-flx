import type { IllustrationCategory } from '@/lib/illustrations/illustration-types'

export const spotCategory: IllustrationCategory = {
  slug: 'spot',
  name: 'Spot',
  description: 'Small, elegant UI elements for marketing and empty states.',
  hasNew: true,
  items: [
    {
      slug: 'spot-01',
      name: 'Metrics',
      description:
        'A stat card with trend and sparkline, layered over a second.',
      span: 2,
      isNew: true,
    },
    {
      slug: 'spot-02',
      name: 'Notifications',
      description: 'A fanned stack of notification cards.',
      span: 1,
      isNew: true,
    },
    {
      slug: 'spot-03',
      name: 'Media card',
      description: 'An image card with a soft gradient fade and caption.',
      span: 1,
      isNew: true,
    },
    {
      slug: 'spot-04',
      name: 'Analytics',
      description: 'A card with a gradient area chart.',
      span: 2,
      isNew: true,
    },
  ],
}
