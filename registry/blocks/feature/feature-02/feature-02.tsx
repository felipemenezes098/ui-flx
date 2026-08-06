'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export interface Feature02Step {
  number: string
  title: string
  description: string
}

export interface Feature02Props {
  title: string
  description: string
  image: string
  imageAlt?: string
  steps: Feature02Step[]
  animation?: 'none' | 'subtle'
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'max-w-sm text-sm sm:text-base leading-relaxed',
    header: 'gap-8 sm:gap-16',
    content: 'gap-12 sm:gap-16',
    grid: 'gap-4 sm:gap-6',
    image: 'max-w-sm',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'max-w-xs text-sm leading-relaxed',
    header: 'gap-6 sm:gap-12',
    content: 'gap-10 sm:gap-12',
    grid: 'gap-3 sm:gap-4',
    image: 'max-w-xs',
  },
} as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
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

function StepCard({
  step,
  animate,
}: Readonly<{ step: Feature02Step; animate: boolean }>) {
  const cardClassName = 'border-border/80 bg-card rounded-2xl border p-5 sm:p-6'

  const content = (
    <>
      <span className="text-muted-foreground font-serif text-lg italic">
        {step.number}
      </span>
      <h3 className="text-foreground mt-3 text-base font-semibold">
        {step.title}
      </h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        <Balancer>{step.description}</Balancer>
      </p>
    </>
  )

  if (!animate) return <div className={cardClassName}>{content}</div>

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={item}
      className={cardClassName}
    >
      {content}
    </motion.div>
  )
}

export function Feature02({
  title,
  description,
  image,
  imageAlt = '',
  steps,
  animation = 'none',
  variant = 'standard',
}: Readonly<Feature02Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const half = Math.ceil(steps.length / 2)
  const leftSteps = steps.slice(0, half)
  const rightSteps = steps.slice(half)

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

  const imageElement = image && (
    <div
      className={cn(
        'relative mx-auto w-full overflow-hidden rounded-3xl shadow-sm outline outline-black/10 dark:outline-white/10',
        vs.image,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        decoding="async"
        className="aspect-[4/5] w-full object-cover"
      />
    </div>
  )

  const leftColumnElement = leftSteps.length > 0 && (
    <div className={cn('flex flex-col', vs.grid)}>
      {leftSteps.map((step) => (
        <StepCard key={step.number} step={step} animate={animate} />
      ))}
    </div>
  )

  const rightColumnElement = rightSteps.length > 0 && (
    <div className={cn('flex flex-col', vs.grid)}>
      {rightSteps.map((step) => (
        <StepCard key={step.number} step={step} animate={animate} />
      ))}
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
            'flex flex-col items-start justify-between sm:flex-row sm:items-end',
            vs.header,
          )}
        >
          <div className="max-w-xl">{titleElement}</div>
          {descriptionElement}
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-8 min-[860px]:grid-cols-[1fr_auto_1fr] min-[860px]:gap-6">
          {leftColumnElement}
          <Reveal
            active={animate}
            variants={mediaItem}
            className="order-first min-[860px]:order-0"
          >
            {imageElement}
          </Reveal>
          {rightColumnElement}
        </div>
      </motion.div>
    </section>
  )
}
