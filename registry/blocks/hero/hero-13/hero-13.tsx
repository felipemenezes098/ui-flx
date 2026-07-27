'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export interface Hero13Props {
  title: string
  titleLine2?: string
  meta?: string
  eyebrow?: string
  description?: string
  primaryImage: {
    src: string
    alt: string
  }
  secondaryImage: {
    src: string
    alt: string
  }
  variant?: 'standard' | 'compact'
  animation?: 'none' | 'subtle'
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28',
    columns: 'gap-12 lg:gap-16',
    left: 'gap-10 lg:gap-16',
    right: 'gap-8 lg:gap-12',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    meta: 'text-xs tracking-[0.22em]',
    eyebrow: 'text-xs tracking-[0.18em]',
    description: 'max-w-sm text-sm sm:text-base leading-relaxed',
    primaryMedia: 'aspect-4/3',
    secondaryMedia: 'aspect-3/4 max-w-md lg:max-w-none',
  },
  compact: {
    section: 'py-14 sm:py-20',
    columns: 'gap-10 lg:gap-12',
    left: 'gap-8 lg:gap-12',
    right: 'gap-6 lg:gap-10',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    meta: 'text-[11px] tracking-[0.2em]',
    eyebrow: 'text-[11px] tracking-[0.16em]',
    description: 'max-w-sm text-sm leading-relaxed',
    primaryMedia: 'aspect-4/3',
    secondaryMedia: 'aspect-3/4 max-w-sm lg:max-w-none',
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

export function Hero13({
  title,
  titleLine2,
  meta,
  eyebrow,
  description,
  primaryImage,
  secondaryImage,
  variant = 'standard',
  animation = 'none',
}: Readonly<Hero13Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const primaryMediaElement = primaryImage?.src && (
    <div className="relative max-w-lg">
      <div
        aria-hidden
        className="border-foreground/15 pointer-events-none absolute -right-3 -bottom-3 size-16 border sm:size-20"
      />
      <div
        className={cn(
          'relative overflow-hidden rounded-md outline outline-black/10 dark:outline-white/10',
          vs.primaryMedia,
        )}
      >
        <img
          src={primaryImage.src}
          alt={primaryImage.alt}
          className="size-full object-cover"
        />
      </div>
    </div>
  )

  const titleElement = title && (
    <h1
      className={cn(
        'text-foreground font-serif font-normal tracking-tight text-balance uppercase',
        vs.title,
      )}
    >
      <Balancer>
        {title}
        {titleLine2 ? (
          <>
            <br />
            {titleLine2}
          </>
        ) : null}
      </Balancer>
    </h1>
  )

  const metaElement = meta && (
    <p className={cn('text-muted-foreground font-medium uppercase', vs.meta)}>
      {meta}
    </p>
  )

  const eyebrowElement = eyebrow && (
    <p className={cn('text-foreground font-semibold uppercase', vs.eyebrow)}>
      {eyebrow}
    </p>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground text-pretty', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const secondaryMediaElement = secondaryImage?.src && (
    <div className="relative ml-auto w-full max-w-md lg:mr-4">
      <div
        aria-hidden
        className="border-foreground/15 pointer-events-none absolute top-[18%] -left-7 size-24 rounded-full border sm:-left-9 sm:size-28"
      />
      <div
        className={cn(
          'relative overflow-hidden rounded-md outline outline-black/10 dark:outline-white/10',
          vs.secondaryMedia,
        )}
      >
        <img
          src={secondaryImage.src}
          alt={secondaryImage.alt}
          className="size-full object-cover"
        />
      </div>
    </div>
  )

  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <motion.div
        className={cn(
          'relative z-10 mx-auto grid max-w-6xl px-6 lg:grid-cols-2 lg:items-start',
          vs.section,
          vs.columns,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        animate={animate ? 'visible' : undefined}
      >
        <div className={cn('order-2 flex flex-col lg:order-1', vs.left)}>
          <Reveal active={animate} variants={mediaItem}>
            {primaryMediaElement}
          </Reveal>
          <Reveal active={animate} className="flex flex-col gap-3 lg:max-w-sm">
            {eyebrowElement}
            {descriptionElement}
          </Reveal>
        </div>

        <div className={cn('order-1 flex flex-col lg:order-2', vs.right)}>
          <Reveal active={animate} className="flex flex-col gap-3 lg:pt-2">
            {titleElement}
            {metaElement}
          </Reveal>
          <Reveal active={animate} variants={mediaItem}>
            {secondaryMediaElement}
          </Reveal>
        </div>
      </motion.div>
    </section>
  )
}
