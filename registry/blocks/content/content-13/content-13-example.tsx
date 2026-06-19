import { Content13, type Content13Props } from './content-13'

export const values = {
  title: 'Topics',
  description: 'Explore by category or focus area.',
  items: ['Design', 'Code', 'Ship', 'Scale', 'Open source', 'Docs'],
} satisfies Content13Props

export function Content13Example() {
  return (
    <Content13
      title={values.title}
      description={values.description}
      items={values.items}
    />
  )
}
