import { Content01, type Content01Props } from './content-01'

export const values = {
  variant: 'standard',
  animation: 'subtle',
  items: [
    {
      id: '1',
      title: 'Design',
      description:
        'Clean, accessible components that make your product feel modern and easy to use.',
      media: {
        src: 'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Design',
      },
    },
    {
      id: '2',
      title: 'Components',
      description:
        'Pre-built blocks you can drop into any layout. Customize once, reuse everywhere.',
      media: {
        src: 'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Components',
      },
    },
    {
      id: '3',
      title: 'Developer Experience',
      description:
        'Built with TypeScript, clear APIs, and documentation that gets you shipping faster.',
      media: {
        src: 'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Developer Experience',
      },
    },
    {
      id: '4',
      title: 'Customization',
      description:
        'Themes, variants, and overrides. Make it look and behave exactly how you need.',
      media: {
        src: 'https://images.unsplash.com/photo-1683143726118-9abaed4e10f9?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Customization',
      },
    },
    {
      id: '5',
      title: 'Performance',
      description:
        'Optimized for speed and accessibility. Less bundle size, smoother interactions.',
      media: {
        src: 'https://images.unsplash.com/photo-1734552452335-e8b67797bad0?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Performance',
      },
    },
  ],
} satisfies Content01Props

export function Content01Example() {
  return (
    <Content01
      items={values.items}
      variant={values.variant}
      animation={values.animation}
    />
  )
}
