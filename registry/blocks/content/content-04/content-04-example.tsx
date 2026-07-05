import { Content04, type Content04Props } from './content-04'

export const values = {
  title: 'Build with clarity',
  description:
    'Two focused stories, each with a headline, a short explanation, and a visual anchor.',
  variant: 'standard',
  animation: 'subtle',
  items: [
    {
      title: 'Design',
      description:
        'Clean, accessible components that make your product feel modern and easy to use.',
      media: {
        src: 'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'alt image',
      },
    },
    {
      title: 'Components',
      description:
        'Pre-built blocks you can drop into any layout. Customize once, reuse everywhere.',
      media: {
        src: 'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'alt image',
      },
    },
  ],
} satisfies Content04Props

export function Content04Example() {
  return (
    <Content04
      title={values.title}
      description={values.description}
      items={values.items}
      variant={values.variant}
      animation={values.animation}
    />
  )
}
