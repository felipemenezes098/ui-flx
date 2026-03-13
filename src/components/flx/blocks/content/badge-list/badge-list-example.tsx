import { BadgeList, type BadgeListProps } from './badge-list'

export function BadgeListExample() {
  const values = {
    title: 'Topics',
    description: 'Explore by category or focus area.',
    items: ['Design', 'Code', 'Ship', 'Scale', 'Open source', 'Docs'],
  } satisfies BadgeListProps

  return (
    <BadgeList
      title={values.title}
      description={values.description}
      items={values.items}
    />
  )
}
