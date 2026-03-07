import Balancer from 'react-wrap-balancer'

import { Cta } from '@/components/flx/blocks/shared/cta/cta'
import { cn } from '@/lib/utils'

import type { CenteredTextProps } from './types'

export function CenteredText({
  title,
  description,
  cta,
}: Readonly<CenteredTextProps>) {
  return (
    <div
      className={cn(
        'bg-muted/50 flex min-h-120 items-center justify-center rounded-xl p-5',
      )}
    >
      <div className="flex flex-col items-center space-y-4 self-center">
        <div className="space-y-2">
          {title && (
            <h2 className="text-center text-2xl font-bold md:max-w-200">
              <Balancer balance={0.5}>{title}</Balancer>
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground text-center whitespace-pre-line md:max-w-200">
              <Balancer balance={0.5}>{description}</Balancer>
            </p>
          )}
        </div>
        {cta && <Cta cta={cta} />}
      </div>
    </div>
  )
}
