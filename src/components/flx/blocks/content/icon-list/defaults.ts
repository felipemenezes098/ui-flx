import type { IconListProps } from './icon-list'

export const iconListDefaultProps = {
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
