'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export interface Feature03Item {
  id: string
  title: string
  description: string
  media: {
    src: string
    alt: string
  }
}

export interface Feature03Props {
  title: string
  description?: string
  items: Feature03Item[]
  variant?: 'standard' | 'compact'
  animation?: 'none' | 'subtle'
}

const variantStyles = {
  standard: {
    section: 'py-16 sm:py-24',
    grid: 'gap-10 md:gap-16',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'text-sm sm:text-base',
    itemGap: 'gap-16 sm:gap-24',
    itemTitle: 'text-xl sm:text-2xl',
    itemDescription: 'text-sm sm:text-base',
    media: 'aspect-16/10',
  },
  compact: {
    section: 'py-12 sm:py-16',
    grid: 'gap-8 md:gap-12',
    title: 'text-xl sm:text-2xl md:text-3xl',
    description: 'text-sm',
    itemGap: 'gap-12 sm:gap-16',
    itemTitle: 'text-lg sm:text-xl',
    itemDescription: 'text-sm',
    media: 'aspect-16/11',
  },
} as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const headerItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const featureItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
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
    <motion.div variants={variants ?? headerItem} className={className}>
      {children}
    </motion.div>
  )
}

function FeatureRow({
  item,
  animate,
  vs,
}: Readonly<{
  item: Feature03Item
  animate: boolean
  vs: (typeof variantStyles)[keyof typeof variantStyles]
}>) {
  const content = (
    <>
      <h3
        className={cn(
          'text-foreground font-semibold tracking-tight',
          vs.itemTitle,
        )}
      >
        <Balancer>{item.title}</Balancer>
      </h3>
      <p className={cn('text-muted-foreground max-w-2xl', vs.itemDescription)}>
        <Balancer>{item.description}</Balancer>
      </p>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-2xl shadow-sm outline outline-black/10 dark:outline-white/10',
          vs.media,
        )}
      >
        <img
          src={item.media.src}
          alt={item.media.alt || item.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </>
  )

  if (!animate) return <div className="flex flex-col gap-4">{content}</div>

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={featureItem}
      className="flex flex-col gap-4"
    >
      {content}
    </motion.div>
  )
}

export function Feature03({
  title,
  description,
  items,
  variant = 'standard',
  animation = 'none',
}: Readonly<Feature03Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  if (!items.length) return null

  const titleElement = title && (
    <h2
      className={cn('text-foreground font-semibold tracking-tight', vs.title)}
    >
      <Balancer>{title}</Balancer>
    </h2>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const headerElement = (
    <div className="flex flex-col gap-4 md:sticky md:top-24 md:self-start">
      {titleElement}
      {descriptionElement}
    </div>
  )

  const itemsListElement = (
    <div className={cn('flex flex-col', vs.itemGap)}>
      {items.map((item) => (
        <FeatureRow key={item.id} item={item} animate={animate} vs={vs} />
      ))}
    </div>
  )

  return (
    <section className="bg-background w-full">
      <motion.div
        className={cn('mx-auto w-full max-w-6xl px-6', vs.section)}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]',
            vs.grid,
          )}
        >
          <Reveal active={animate}>{headerElement}</Reveal>
          {itemsListElement}
        </div>
      </motion.div>
    </section>
  )
}
