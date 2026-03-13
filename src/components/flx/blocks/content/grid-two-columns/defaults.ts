import type { GridTwoColumnsProps } from './grid-two-columns'

export const gridTwoColumnsDefaultProps = {
  title: 'Simple UI',
  description:
    'Build professional layouts quickly with minimal effort and maximum flexibility.',
  image: {
    src: 'https://images.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Grid Two Columns Image',
  },
  cta: {
    ctaEnabled: true,
    text: 'Get started',
    link: '/',
    variant: 'default',
  },
} satisfies GridTwoColumnsProps
