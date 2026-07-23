'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

import { Cta, type CtaProps } from '../../shared/cta'

export interface Hero12Props {
  title: string
  established?: string
  description: string
  backgroundImage: string
  backgroundAlt?: string
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'min-h-[560px] sm:min-h-[600px]',
    padding: 'px-6 py-10 sm:px-10 sm:py-12',
    title: 'text-4xl sm:text-5xl md:text-6xl',
    established: 'text-xs sm:text-sm',
    description: 'max-w-lg text-sm sm:text-base',
    copy: 'gap-5 sm:gap-6',
  },
  compact: {
    section: 'min-h-[440px] sm:min-h-[480px]',
    padding: 'px-6 py-8 sm:px-8 sm:py-10',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    established: 'text-[0.65rem] sm:text-xs',
    description: 'max-w-md text-sm',
    copy: 'gap-4 sm:gap-5',
  },
} as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const media: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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

export function Hero12({
  title,
  established,
  description,
  backgroundImage,
  backgroundAlt = '',
  animation = 'none',
  primaryCTA,
  variant = 'standard',
}: Readonly<Hero12Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const backgroundElement = backgroundImage && (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
      <motion.img
        src={backgroundImage}
        alt={backgroundAlt}
        decoding="async"
        className="size-full object-cover"
        variants={animate ? media : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
    </div>
  )

  const titleElement = title && (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <h1
        className={cn(
          'font-normal tracking-tight text-white',
          vs.title,
        )}
      >
        <Balancer>{title}</Balancer>
      </h1>
      {established && (
        <span
          className={cn(
            'font-medium tracking-widest text-white/70 uppercase',
            vs.established,
          )}
        >
          {established}
        </span>
      )}
    </div>
  )

  const descriptionElement = description && (
    <p className={cn('leading-relaxed text-white/80', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const copyElement = (
    <div className={cn('flex flex-col', vs.copy)}>
      {titleElement}
      {descriptionElement}
    </div>
  )

  const ctaElement = primaryCTA?.ctaEnabled && (
    <Cta cta={primaryCTA} invert className="shrink-0" />
  )

  return (
    <section
      className={cn(
        'bg-background relative isolate flex w-full flex-col justify-end overflow-hidden',
        vs.section,
      )}
    >
      {backgroundElement}

      <motion.div
        className={cn(
          'relative z-10 flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between',
          vs.padding,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal active={animate} className="min-w-0">
          {copyElement}
        </Reveal>

        {ctaElement && <Reveal active={animate}>{ctaElement}</Reveal>}
      </motion.div>
    </section>
  )
}
