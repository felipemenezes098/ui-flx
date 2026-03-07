import Image from 'next/image'

import type { GridWithMediaTopProps } from './types'

export function GridWithMediaTop({
  media,
  items,
}: Readonly<GridWithMediaTopProps>) {
  return (
    <div className="space-y-8">
      {media && (
        <div className="relative max-h-140 min-h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={media.url}
            alt={media.alt ?? 'Grid With Media Top'}
            className="h-full w-full object-cover"
            fill
            unoptimized
          />
        </div>
      )}

      {items && items.length > 0 && (
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="flex flex-col gap-2">
              {item.title && (
                <h3 className="text-lg font-medium">{item.title}</h3>
              )}
              {item.description && (
                <p className="text-muted-foreground max-w-md text-sm">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
