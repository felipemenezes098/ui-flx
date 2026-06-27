import { Check } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta'
import { Cta } from '../../shared/cta'

export interface Hero06Preview {
  src: string
  alt: string
}

export interface Hero06Props {
  title: string
  highlight?: string
  description: string
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  highlights?: string[]
  preview: Hero06Preview
  logos?: string[]
  logosLabel?: string
}

export function Hero06({
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
  highlights,
  preview,
  logos,
  logosLabel,
}: Readonly<Hero06Props>) {
  return (
    <section className="bg-background relative w-full overflow-hidden">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 pb-0 text-center sm:pt-24">
        <h1 className="text-foreground max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          <Balancer>
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-muted-foreground">{highlight}</span>
              </>
            )}
          </Balancer>
        </h1>

        <p className="text-muted-foreground mt-6 max-w-xl text-base sm:text-lg">
          <Balancer>{description}</Balancer>
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          {primaryCTA && <Cta cta={primaryCTA} className="w-full px-6 sm:w-fit" />}
          {secondaryCTA && (
            <Cta cta={secondaryCTA} className="w-full px-6 sm:w-fit" />
          )}
        </div>

        {highlights && highlights.length > 0 && (
          <ul className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="text-foreground/60 size-4" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="relative mt-16 w-full">
          <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-sm">
            <img
              src={preview.src}
              alt={preview.alt}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="from-background pointer-events-none absolute inset-x-0 -bottom-px h-24 bg-gradient-to-t to-transparent" />
        </div>

        {logos && logos.length > 0 && (
          <div className="border-border/60 mt-4 w-full border-t pt-10 pb-16">
            {logosLabel && (
              <p className="text-muted-foreground text-xs tracking-wide uppercase">
                {logosLabel}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="text-muted-foreground/70 text-lg font-semibold tracking-tight"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
