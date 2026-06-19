import { Content12, type Content12Props } from './content-12'

export const values = {
  title: 'Principles',
  items: [
    { title: 'Simple', icon: 'Zap' },
    { title: 'Clear', icon: 'Shield' },
    { title: 'Fast', icon: 'Code' },
    { title: 'Stable', icon: 'Users' },
    { title: 'Open', icon: 'Accessibility' },
    { title: 'Inclusive', icon: 'Smartphone' },
  ],
} satisfies Content12Props

export function Content12Example() {
  return <Content12 title={values.title} items={values.items} />
}
