'use client'

import * as React from 'react'
import { Rocket, Sparkles, Wand2, Zap } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

import { Cta, type CtaProps } from '../../shared/cta'
import { BlockBuilderDemo } from './block-builder-demo'

export interface Hero14Props {
  title: string
  description: string
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  image: string
  imageAlt?: string
  logos?: string[]
  animation?: 'none' | 'subtle'
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'max-w-xl text-sm sm:text-base',
    header: 'gap-3 sm:gap-4',
    copy: 'gap-5 sm:gap-6',
    content: 'gap-10 sm:gap-14',
    mediaPadding: 'px-6 py-10 sm:px-12 sm:py-16',
    logos: 'gap-x-10 gap-y-4 pt-8 sm:pt-10',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'max-w-lg text-sm',
    header: 'gap-2.5 sm:gap-3',
    copy: 'gap-4 sm:gap-5',
    content: 'gap-8 sm:gap-10',
    mediaPadding: 'px-5 py-8 sm:px-10 sm:py-12',
    logos: 'gap-x-8 gap-y-3 pt-6 sm:pt-8',
  },
} as const

const logoIcons = [Zap, Sparkles, Wand2, Rocket, Zap, Sparkles]

const easeOut = [0.22, 1, 0.36, 1] as const

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
    transition: { duration: 0.5, ease: easeOut },
  },
}

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: 0.15, ease: easeOut },
  },
}

const logosItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.35, ease: easeOut },
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

export function Hero14({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt = '',
  logos = [],
  animation = 'none',
  variant = 'standard',
}: Readonly<Hero14Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1
      className={cn(
        'text-foreground font-semibold tracking-tight text-balance',
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
    <div className="flex flex-wrap items-center justify-center gap-3">
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'outline' }}
        />
      )}
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
    </div>
  )

  const mediaElement = image && (
    <div className="relative w-full overflow-hidden rounded-2xl outline outline-black/10 dark:outline-white/10">
      <img
        src={image}
        alt={imageAlt}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5"
      />
      <div
        className={cn(
          'relative flex items-center justify-center',
          vs.mediaPadding,
        )}
      >
        <BlockBuilderDemo />
      </div>
    </div>
  )

  const logosElement = logos.length > 0 && (
    <div
      className={cn(
        'flex w-full flex-wrap items-center justify-center border-t',
        vs.logos,
      )}
    >
      {logos.map((logo, index) => {
        const Icon = logoIcons[index % logoIcons.length]
        return (
          <span
            key={`${logo}-${index}`}
            className="text-muted-foreground/70 inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight"
          >
            <Icon className="size-3.5" />
            {logo}
          </span>
        )
      })}
    </div>
  )

  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6',
          vs.section,
          vs.content,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div
          className={cn(
            'flex w-full max-w-2xl flex-col items-center',
            vs.copy,
          )}
        >
          <Reveal
            active={animate}
            className={cn(
              'flex flex-col items-center text-center',
              vs.header,
            )}
          >
            {titleElement}
            {descriptionElement}
          </Reveal>

          <Reveal active={animate}>{ctasElement}</Reveal>
        </div>

        <Reveal active={animate} variants={mediaItem} className="w-full">
          {mediaElement}
        </Reveal>

        <Reveal active={animate} variants={logosItem} className="w-full">
          {logosElement}
        </Reveal>
      </motion.div>
    </section>
  )
}
