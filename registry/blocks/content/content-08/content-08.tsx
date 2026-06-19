import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta'
import { Cta } from '../../shared/cta'

export interface Content08Props {
  title: string
  description: string
  cta?: CtaProps
}

export function Content08({
  title,
  description,
  cta,
}: Readonly<Content08Props>) {
  return (
    <div className="bg-muted/50 flex min-h-120 items-center justify-center rounded-xl p-5">
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
