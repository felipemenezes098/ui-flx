import { icons } from 'lucide-react'

import { Icon } from '../../shared/dynamic-icon/dynamic-icon'

export interface IconListProps {
  title: string
  items: {
    title: string
    icon: string
  }[]
}

export function IconList({ title, items }: Readonly<IconListProps>) {
  return (
    <div className="grid w-full">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div className="flex items-center gap-3" key={item.title + index}>
            <Icon
              name={item.icon as keyof typeof icons}
              className="text-primary size-4 flex-shrink-0"
            />
            <h3 className="text-base font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
