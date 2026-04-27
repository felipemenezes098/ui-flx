import type { Metadata } from 'next'

import { StickyScroll } from './component'

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

const items = [
  {
    title: 'Build faster',
    description: 'Create interfaces quickly using reusable blocks.',
    media:
      'https://images.unsplash.com/photo-1486092642310-0c4e84309adb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Customize easily',
    description: 'Adapt everything to your design system.',
    media:
      'https://images.unsplash.com/photo-1479707406242-e8929e87e734?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Stay consistent',
    description: 'Keep layouts balanced with a clear visual rhythm.',
    media:
      'https://images.unsplash.com/photo-1628880689946-f4a0533ac5fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Guide attention',
    description: 'Highlight the right content without adding noise.',
    media:
      'https://images.unsplash.com/photo-1571495653425-621ba3cb7ac1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Scale calmly',
    description: 'Expand your pages with patterns that stay elegant.',
    media:
      'https://images.unsplash.com/photo-1561990306-7462bfe923b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function NewPage() {
  return (
    <main className="mx-auto p-4 md:max-w-5xl lg:max-w-6xl 2xl:max-w-360">
      <StickyScroll items={items} />
      <div className="h-100" />
    </main>
  )
}
