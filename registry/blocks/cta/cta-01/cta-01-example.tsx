import { Content08, type Content08Props } from './content-08'

export const values = {
  title: 'Simple & Elegant',
  description: 'Display content in a minimal and visually appealing way.',
  cta: {
    ctaEnabled: true,
    text: 'Click here',
    link: '',
    variant: 'default',
  },
} satisfies Content08Props

export function Content08Example() {
  return (
    <Content08
      title={values.title}
      description={values.description}
      cta={values.cta}
    />
  )
}
