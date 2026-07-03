'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta'
import { Cta } from '../../shared/cta'
import { Spot01 } from '../../../illustrations/spot/spot-01'

export interface Hero06Props {
  title: string
  highlight?: string
  description: string
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  logos?: string[]
  logosLabel?: string
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  className,
  children,
}: Readonly<{
  active: boolean
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

export function Hero06({
  title,
  highlight,
  description,
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  logos,
  logosLabel,
}: Readonly<Hero06Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce

  const titleElement = title && (
    <h1 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
      <Balancer>{title}</Balancer>
      {highlight && (
        <>
          {' '}
          <span className="text-muted-foreground">{highlight}</span>
        </>
      )}
    </h1>
  )

  const descriptionElement = description && (
    <p className="text-muted-foreground max-w-md text-base sm:text-lg">
      <Balancer>{description}</Balancer>
    </p>
  )

  const ctasElement = (primaryCTA || secondaryCTA) && (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      {primaryCTA && <Cta cta={primaryCTA} className="w-full sm:w-fit" />}
      {secondaryCTA && <Cta cta={secondaryCTA} className="w-full sm:w-fit" />}
    </div>
  )

  const logosElement = logos && logos.length > 0 && (
    <div className="flex flex-col gap-3">
      {logosLabel && (
        <p className="text-muted-foreground/80 text-xs tracking-wide uppercase">
          {logosLabel}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-muted-foreground/60 text-sm font-semibold tracking-tight"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <section className="bg-background relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 75% 25%, black 30%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 75% 25%, black 30%, transparent 72%)',
        }}
      />

      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16"
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="flex flex-col items-start gap-8">
          <Reveal active={animate} className="flex flex-col items-start gap-5">
            {titleElement}
            {descriptionElement}
          </Reveal>

          {ctasElement && <Reveal active={animate}>{ctasElement}</Reveal>}

          {logosElement && <Reveal active={animate}>{logosElement}</Reveal>}
        </div>

        <Reveal active={animate} className="w-full">
          <Spot01 size="lg" />
        </Reveal>
      </motion.div>
    </section>
  )
}
