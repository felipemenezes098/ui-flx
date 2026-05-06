'use client'

import { motion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'
import { cn } from '@/lib/utils'

export interface HeroContentMediaProps {
  title: string
  description: string
  variant?: 'standard' | 'compact' | 'prominent'
  animation?: 'none' | 'subtle' | 'emphasis'
  media: {
    src: string
    alt?: string
  }
  primaryCTA?: CtaProps
  secondaryCTA?: CtaProps
}

const variantStyles = {
  standard: {
    container: 'gap-10 md:min-h-112',
    title: 'text-3xl font-bold md:text-4xl',
    description: 'text-base',
    spacing: 'space-y-6',
  },
  compact: {
    container: 'gap-6 md:min-h-88',
    title: 'text-2xl font-bold md:text-3xl',
    description: 'text-sm',
    spacing: 'space-y-4',
  },
  prominent: {
    container: 'gap-12 md:min-h-144',
    title: 'text-4xl font-bold md:text-5xl',
    description: 'text-lg',
    spacing: 'space-y-8',
  },
} as const

const emphasisMedia: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const emphasisContent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const emphasisItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const subtleEnter = {
  initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const

export function HeroContentMedia({
  title,
  description,
  variant = 'standard',
  animation = 'none',
  media,
  primaryCTA,
  secondaryCTA,
}: Readonly<HeroContentMediaProps>) {
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1 className={cn('max-w-full tracking-tight md:max-w-lg', vs.title)}>
      <Balancer balance={0.5}>{title}</Balancer>
    </h1>
  )

  const descriptionElement = description && (
    <p
      className={cn(
        'text-muted-foreground max-w-full whitespace-pre-line md:max-w-md',
        vs.description,
      )}
    >
      <Balancer balance={0.5}>{description}</Balancer>
    </p>
  )

  const ctasElement = (
    <div className="flex flex-col gap-3 sm:flex-row">
      {primaryCTA && <Cta cta={primaryCTA} className="w-full sm:w-fit" />}
      {secondaryCTA && <Cta cta={secondaryCTA} className="w-full sm:w-fit" />}
    </div>
  )

  const mediaElement = media && (
    <div
      className={cn(
        'relative order-2 flex md:h-full md:items-end md:justify-end',
      )}
    >
      <div className="group/image relative min-h-80 w-full overflow-hidden rounded-lg md:min-h-120">
        <img
          src={media.src}
          alt={media.alt ?? title ?? 'Hero media'}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full rounded-lg object-cover object-bottom transition-all duration-200 group-hover/image:scale-[1.02]"
        />
      </div>
    </div>
  )

  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 overflow-hidden md:grid-cols-2',
        vs.container,
      )}
    >
      {animation === 'emphasis' && (
        <>
          <motion.div
            className={cn(
              'order-1 flex w-full min-w-0 flex-col justify-end overflow-hidden pb-2',
              vs.spacing,
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={emphasisContent}
          >
            <motion.div variants={emphasisItem} className="space-y-4">
              {titleElement}
              {descriptionElement}
            </motion.div>

            {(primaryCTA || secondaryCTA) && (
              <motion.div variants={emphasisItem}>{ctasElement}</motion.div>
            )}
          </motion.div>

          <motion.div
            className="order-2 overflow-hidden"
            variants={emphasisMedia}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {mediaElement}
          </motion.div>
        </>
      )}

      {animation === 'subtle' && (
        <>
          <motion.div
            className={cn(
              'order-1 flex w-full min-w-0 flex-col justify-end overflow-hidden pb-2',
              vs.spacing,
            )}
            initial={subtleEnter.initial}
            whileInView={subtleEnter.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={subtleEnter.transition}
          >
            <div className="space-y-4">
              {titleElement}
              {descriptionElement}
            </div>
            {ctasElement}
          </motion.div>

          <motion.div
            className="order-2 overflow-hidden"
            initial={subtleEnter.initial}
            whileInView={subtleEnter.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={subtleEnter.transition}
          >
            {mediaElement}
          </motion.div>
        </>
      )}

      {animation === 'none' && (
        <>
          <div
            className={cn(
              'order-1 flex w-full min-w-0 flex-col justify-end overflow-x-hidden pb-2',
              vs.spacing,
            )}
          >
            <div className="space-y-4">
              {titleElement}
              {descriptionElement}
            </div>
            {ctasElement}
          </div>

          {mediaElement}
        </>
      )}
    </div>
  )
}
