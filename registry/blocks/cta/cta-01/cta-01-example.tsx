import { Cta01, type Cta01Props } from './cta-01'

export const values = {
  title: 'Simple & Elegant',
  description: 'Display content in a minimal and visually appealing way.',
  cta: {
    ctaEnabled: true,
    text: 'Click here',
    link: '',
    variant: 'default',
  },
} satisfies Cta01Props

export function Cta01Example() {
  return (
    <Cta01
      title={values.title}
      description={values.description}
      cta={values.cta}
    />
  )
}
