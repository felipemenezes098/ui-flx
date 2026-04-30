import { icons } from 'lucide-react'
import { Icon } from '../../shared/dynamic-icon/dynamic-icon'
import { cn } from '@/lib/utils'

export interface GridMediaCardsProps {
  title: string
  items: {
    title: string
    description: string
    icon: string
    invert?: boolean
    media: {
      src: string
      alt: string
      overlay?: boolean
    }
  }[]
}

export function GridMediaCards({
  title,
  items,
}: Readonly<GridMediaCardsProps>) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items?.map((item, index) => (
          <div
            key={item.title + index}
            className="relative h-96 overflow-hidden rounded-lg"
          >
            <img
              src={item.media.src}
              alt={item.media.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            {item.media.overlay && (
              <div className="absolute inset-0 bg-black/50" />
            )}
            <div
              className={cn(
                'absolute inset-0 flex flex-col justify-end p-6',
                item.invert && 'text-white',
              )}
            >
              {item.icon && (
                <Icon
                  name={item.icon as keyof typeof icons}
                  className="mb-2 size-5"
                />
              )}
              <h3 className="mb-1 text-lg font-medium">{item.title}</h3>
              {item.description && (
                <p className="text-sm">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
