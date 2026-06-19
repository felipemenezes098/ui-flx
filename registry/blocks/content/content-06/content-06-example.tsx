import { Content06, type Content06Props } from './content-06'

export const values = {
  title: 'Simple UI',
  description:
    'Build professional layouts quickly with minimal effort and maximum flexibility.',
  media: {
    src: 'https://images.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Content 06 Image',
  },
  cta: {
    ctaEnabled: true,
    text: 'Get started',
    link: '',
    variant: 'default',
  },
} satisfies Content06Props

export function Content06Example() {
  return (
    <Content06
      title={values.title}
      description={values.description}
      media={values.media}
      cta={values.cta}
    />
  )
}
