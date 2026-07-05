import { Content02, type Content02Props } from './content-02'

export const values = {
  title: 'Everything you need to ship',
  description:
    'Design, build, and iterate with blocks made for clarity, not clutter.',
  variant: 'standard',
  animation: 'subtle',
  items: [
    {
      title: 'Design',
      description:
        'Clean, accessible components that make your product feel modern and easy to use.',
      icon: 'Palette',
      media: {
        src: 'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Design',
      },
    },
    {
      title: 'Components',
      description:
        'Pre-built blocks you can drop into any layout. Customize once, reuse everywhere.',
      icon: 'Layers',
      media: {
        src: 'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Components',
      },
    },
    {
      title: 'Developer Experience',
      description:
        'Built with TypeScript, clear APIs, and documentation that gets you shipping faster.',
      icon: 'Code',
      media: {
        src: 'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Developer Experience',
      },
    },
  ],
} satisfies Content02Props

export function Content02Example() {
  return (
    <Content02
      title={values.title}
      description={values.description}
      items={values.items}
      variant={values.variant}
      animation={values.animation}
    />
  )
}
