import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { Cta } from '@/components/flx/blocks/shared/cta/cta'
import { cn } from '@/lib/utils'

import type { GridTwoColumnsProps } from './types'

export function GridTwoColumns({
  title,
  description,
  image,
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
          'order-1 flex w-full min-w-0 flex-col space-y-8 self-center overflow-x-hidden',
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
      {image && (
        <div className={cn('relative order-2 flex md:h-full md:items-center')}>
          <div className="group/image relative min-h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={title ?? 'Grid Two Columns Image'}
              className="h-full w-full rounded-lg object-cover transition-all duration-200 group-hover/image:scale-105"
              fill
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  )
}
