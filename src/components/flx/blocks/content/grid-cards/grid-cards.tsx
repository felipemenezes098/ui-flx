import Balancer from 'react-wrap-balancer'

import type { GridCardsProps } from './types'

export function GridCards({ title, items }: Readonly<GridCardsProps>) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col gap-8">
      {title && (
        <h2 className="text-center text-2xl font-bold">
          <Balancer balance={0.5}>{title}</Balancer>
        </h2>
      )}
      {items && items.length > 0 && (
        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="h-full">
              <article
                className="bg-secondary/60 h-full rounded-lg border-none p-6 shadow-none"
                aria-labelledby={`card-title-${index}`}
              >
                <div>
                  <h3
                    id={`card-title-${index}`}
                    className="mb-2 text-lg font-semibold"
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-muted-foreground text-base">
                      <Balancer balance={0.5}>{item.description}</Balancer>
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
