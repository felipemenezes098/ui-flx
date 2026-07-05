import { BentoGrids01, type BentoGrids01Props } from './bento-grids-01'

export const values = {
  primary: {
    title: 'Build bento sections in minutes',
    description:
      'Create a bold primary feature with a CTA and media, then follow it with supporting image cards.',
    cta: {
      ctaEnabled: true,
      text: 'Explore blocks',
      link: '',
      variant: 'default' as const,
      size: 'sm' as const,
    },
    media: {
      title: 'Design',
      src: 'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  items: [
    {
      title: 'Dynamic cards',
      description: 'Swap images and copy without breaking layout or spacing.',
      media: {
        title: 'Components',
        src: 'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      title: 'Responsive by default',
      description:
        'Stacks on mobile and becomes a 3-column bento on larger screens.',
      media: {
        title: 'Developer Experience',
        src: 'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      title: 'Clean visual hierarchy',
      description:
        'Primary content stands out while the supporting cards stay readable.',
      media: {
        title: 'Customization',
        src: 'https://images.unsplash.com/photo-1683143726118-9abaed4e10f9?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      title: 'Extendable cards',
      description:
        'Add more cards, switch aspect ratios, and tune the spacing.',
      media: {
        title: 'Performance',
        src: 'https://images.unsplash.com/photo-1734552452335-e8b67797bad0?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  ],
} satisfies BentoGrids01Props

export function BentoGrids01Example() {
  return <BentoGrids01 primary={values.primary} items={values.items} />
}
