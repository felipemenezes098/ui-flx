import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'
import { cn } from '@/lib/utils'

export interface GridTwoColumnsProps {
  title: string
  description: string
  media: {
    src: string
    alt: string
  }
  cta?: CtaProps
}

export function GridTwoColumns({
  title,
  description,
  media,
  cta,
}: Readonly<GridTwoColumnsProps>) {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 gap-10 overflow-x-hidden md:grid-cols-2 md:items-stretch',
      )}
    >
      <div
        className={cn(
          'order-1 flex w-full min-w-0 flex-col space-y-8 self-center',
        )}
      >
        <div className="space-y-6">
          {title && (
            <h2 className={cn('max-w-full text-2xl font-bold md:max-w-sm')}>
              <Balancer balance={0.5}>{title}</Balancer>
            </h2>
          )}
          {description && (
            <p
              className={cn(
                'text-muted-foreground max-w-full whitespace-pre-line md:max-w-sm',
              )}
            >
              <Balancer balance={0.5}>{description}</Balancer>
            </p>
          )}
        </div>
        {cta && <Cta cta={cta} />}
      </div>
      {media && (
        <div className={cn('relative order-2 flex md:h-full md:items-center')}>
          <div className="group/image relative min-h-80 w-full overflow-hidden rounded-lg">
            <img
              src={media.src}
              alt={title ?? 'Grid Two Columns Image'}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full rounded-lg object-cover transition-all duration-200 group-hover/image:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  )
}
