import { CenteredText, type CenteredTextProps } from './centered-text'

export function CenteredTextExample() {
  const values = {
    title: 'Simple & Elegant',
    description: 'Display content in a minimal and visually appealing way.',
    cta: {
      ctaEnabled: true,
      text: 'Click here',
      link: '/',
      variant: 'default',
    },
  } satisfies CenteredTextProps

  return (
    <CenteredText
      title={values.title}
      description={values.description}
      cta={values.cta}
    />
  )
}
