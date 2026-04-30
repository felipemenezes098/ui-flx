import {
  GridWithMediaTop,
  type GridWithMediaTopProps,
} from './grid-with-media-top'

export const values = {
  media: {
    url: 'https://images.unsplash.com/photo-1765871319901-0aaafe3f1a2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Section hero image',
  },
  items: [
    {
      title: 'Lightweight',
      description: 'Only what you need. No bloat, no lock-in.',
    },
    {
      title: 'Customizable',
      description: 'Copy, tweak, and own. Built to fit your design system.',
    },
    {
      title: 'Ready to ship',
      description: 'Stable, accessible, and ready for production.',
    },
  ],
} satisfies GridWithMediaTopProps

export function GridWithMediaTopExample() {
  return <GridWithMediaTop media={values.media} items={values.items} />
}
