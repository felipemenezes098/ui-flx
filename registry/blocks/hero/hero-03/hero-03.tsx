'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

import { Cta, type CtaProps } from '../../shared/cta'

export interface Hero03Props {
  title: string
  description: string
  portraitImage: string
  portraitAlt?: string
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'mx-auto max-w-lg text-sm sm:text-base leading-relaxed',
    header: 'gap-5',
    content: 'gap-14 sm:gap-20',
    portrait: 'max-w-3xl',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'mx-auto max-w-md text-sm leading-relaxed',
    header: 'gap-4',
    content: 'gap-10 sm:gap-14',
    portrait: 'max-w-2xl',
  },
} as const

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

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants?: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  )
}

export function Hero03({
  title,
  description,
  portraitImage,
  portraitAlt = '',
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  variant = 'standard',
}: Readonly<Hero03Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1
      className={cn(
        'text-foreground font-serif font-normal tracking-tight text-balance',
        vs.title,
      )}
    >
      <Balancer>{title}</Balancer>
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const ctasElement = (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'link' }}
        />
      )}
    </div>
  )

  const mediaElement = portraitImage && (
    <div className={cn('relative mx-auto w-full', vs.portrait)}>
      <div
        className={cn(
          'relative z-10 mx-auto w-full overflow-hidden',
          'mask-x-from-75% mask-x-to-100%',
          'mask-t-from-55% mask-t-to-100%',
          'mask-b-from-55% mask-b-to-100%',
          'mask-radial-[80%_70%] mask-radial-from-70% mask-radial-to-100% mask-radial-at-center',
          'dark:opacity-85 dark:mix-blend-darken',
        )}
      >
        <div
          aria-hidden
          className="bg-background/25 dark:bg-background/40 pointer-events-none absolute inset-0 mix-blend-overlay"
        />
        <img
          src={portraitImage}
          alt={portraitAlt}
          decoding="async"
          className="relative aspect-[5/4] w-full object-cover object-[center_15%] dark:mix-blend-lighten dark:brightness-[0.92] dark:contrast-[1.05] dark:saturate-[0.9]"
        />
      </div>
    </div>
  )

  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-6xl flex-col px-6',
          vs.section,
          vs.content,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal
          active={animate}
          className={cn(
            'mx-auto flex w-full max-w-2xl flex-col items-center text-center',
            vs.header,
          )}
        >
          {titleElement}
          {descriptionElement}
          {ctasElement}
        </Reveal>

        <Reveal active={animate} variants={mediaItem} className="w-full">
          {mediaElement}
        </Reveal>
      </motion.div>
    </section>
  )
}
