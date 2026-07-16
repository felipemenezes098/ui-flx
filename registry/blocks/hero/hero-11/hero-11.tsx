'use client'

import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

import { StudioDemo } from './studio-demo'

export interface Hero11Props {
  title: string
  description: string
  featureText?: string
  featureHref?: string
  animation?: 'none' | 'subtle'
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'pt-20 pb-0 sm:pt-28',
    title: 'text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]',
    description: 'text-sm sm:text-base leading-relaxed',
    header: 'gap-4 sm:gap-5',
    content: 'gap-8 sm:gap-10',
    studio: 'max-w-7xl',
  },
  compact: {
    section: 'pt-14 pb-0 sm:pt-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'text-sm leading-relaxed',
    header: 'gap-3 sm:gap-4',
    content: 'gap-6 sm:gap-8',
    studio: 'max-w-6xl',
  },
} as const

const easeOut = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  visible: {},
}

const titleItem: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: easeOut },
  },
}

const descriptionItem: Variants = {
  hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, delay: 0.2, ease: easeOut },
  },
}

const studioItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, delay: 0.55, ease: easeOut },
  },
}

const featureItem: Variants = {
  hidden: { opacity: 0, y: 6, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, delay: 1.05, ease: easeOut },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

export function Hero11({
  title,
  description,
  featureText,
  featureHref = '#',
  animation = 'none',
  variant = 'standard',
}: Readonly<Hero11Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1
      className={cn(
        'text-foreground max-w-xl font-serif font-normal tracking-tight text-balance',
        vs.title,
      )}
    >
      <Balancer>{title}</Balancer>
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground max-w-md', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const featureElement = featureText && (
    <a
      href={featureHref}
      className="text-foreground group inline-flex items-center gap-2 text-sm font-medium transition-[opacity,transform] hover:opacity-80 active:scale-[0.96]"
    >
      <span>{featureText}</span>
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
    </a>
  )

  const studioElement = (
    <div className={cn('relative mx-auto w-full', vs.studio)}>
      <div
        className={cn(
          'relative w-full overflow-hidden',
          'mask-r-from-90% mask-r-to-100%',
        )}
      >
        <StudioDemo />
      </div>
    </div>
  )

  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-7xl flex-col px-6',
          vs.section,
          vs.content,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className={cn('flex w-full flex-col', vs.header)}>
          <Reveal active={animate} variants={titleItem}>
            {titleElement}
          </Reveal>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <Reveal active={animate} variants={descriptionItem}>
              {descriptionElement}
            </Reveal>
            <Reveal
              active={animate}
              variants={featureItem}
              className="shrink-0"
            >
              {featureElement}
            </Reveal>
          </div>
        </div>

        <Reveal active={animate} variants={studioItem} className="w-full">
          {studioElement}
        </Reveal>
      </motion.div>
    </section>
  )
}
