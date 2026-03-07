import Balancer from 'react-wrap-balancer'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

import type { BadgeListProps } from './types'

export function BadgeList({
  title,
  description,
  items,
}: Readonly<BadgeListProps>) {
  return (
    <div className={cn('flex flex-col justify-center')}>
      <div className="flex w-full flex-col space-y-8">
        <div className={cn('flex flex-col gap-2')}>
          {title && (
            <h2 className={cn('text-2xl font-bold')}>
              <Balancer balance={0.5}>{title}</Balancer>
            </h2>
          )}
          {description && (
            <p className={cn('text-muted-foreground')}>
              <Balancer balance={0.5}>{description}</Balancer>
            </p>
          )}
        </div>
        {items && items.length > 0 && (
          <ul className={cn('m-0 flex w-full list-none flex-wrap gap-3 p-0')}>
            {items.map((item, index) => (
              <li key={`${item}-${index}`}>
                <Badge
                  variant="secondary"
                  className="max-w-full px-4 py-2 text-sm wrap-break-word whitespace-normal md:max-w-none md:whitespace-nowrap"
                >
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
