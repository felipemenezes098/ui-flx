import { IconList, type IconListProps } from './icon-list'

export function IconListExample() {
  const values = {
    title: 'Principles',
    items: [
      { title: 'Simple', icon: 'Zap' },
      { title: 'Clear', icon: 'Shield' },
      { title: 'Fast', icon: 'Code' },
      { title: 'Stable', icon: 'Users' },
      { title: 'Open', icon: 'Accessibility' },
      { title: 'Inclusive', icon: 'Smartphone' },
    ],
  } satisfies IconListProps

  return <IconList title={values.title} items={values.items} />
}
