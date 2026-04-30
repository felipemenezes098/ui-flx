import Balancer from 'react-wrap-balancer'

import { Badge } from '@/components/ui/badge'

export interface BadgeListProps {
  title: string
  description?: string
  items: string[]
}

export function BadgeList({
  title,
  description,
  items,
}: Readonly<BadgeListProps>) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex w-full flex-col items-center space-y-8">
        <div className="flex flex-col gap-2 text-center">
          {title && (
            <h2 className="text-2xl font-bold">
              <Balancer balance={0.5}>{title}</Balancer>
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground">
              <Balancer balance={0.5}>{description}</Balancer>
            </p>
          )}
        </div>
        {items && items.length > 0 && (
          <ul className="m-0 flex w-full list-none flex-wrap items-center justify-center gap-3 p-0">
            {items.map((item, index) => (
              <li key={`${item}-${index}`}>
                <Badge
                  variant="secondary"
                  className="max-w-full p-3 text-sm wrap-break-word whitespace-normal md:max-w-none md:whitespace-nowrap"
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
