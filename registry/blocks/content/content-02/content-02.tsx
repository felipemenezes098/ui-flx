'use client'

import * as React from 'react'
import { icons } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

import { Icon } from '../../shared/dynamic-icon'

export interface Content02Item {
  title: string
  description: string
  icon: string
  media: {
    src: string
    alt: string
  }
}

export interface Content02Props {
  title: string
  description?: string
  items: Content02Item[]
  variant?: 'standard' | 'compact'
  animation?: 'none' | 'subtle'
}

const variantStyles = {
  standard: {
    container: 'py-12 sm:py-16',
    section: 'gap-10 sm:gap-12',
    header: 'mb-10 gap-3 sm:mb-12',
    title: 'text-2xl sm:text-3xl',
    description: 'max-w-xl text-sm sm:text-base',
    grid: 'grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3',
    card: 'gap-4',
    media: 'aspect-[4/5]',
    mediaRadius: 'rounded-lg',
    icon: 'size-4',
    itemTitle: 'text-base font-medium tracking-tight',
    itemDescription: 'text-sm',
  },
  compact: {
    container: 'py-10 sm:py-12',
    section: 'gap-8',
    header: 'mb-8 gap-2',
    title: 'text-xl sm:text-2xl',
    description: 'max-w-lg text-sm',
    grid: 'grid-cols-1 gap-6 md:grid-cols-3',
    card: 'gap-3',
    media: 'aspect-[4/5]',
    mediaRadius: 'rounded-md',
    icon: 'size-3.5',
    itemTitle: 'text-sm font-medium tracking-tight',
    itemDescription: 'text-xs',
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

const cardItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const gridContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const viewport = {
  once: true,
  margin: '-80px' as const,
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

export function Content02({
  title,
  description,
  items,
  variant = 'standard',
  animation = 'none',
}: Readonly<Content02Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  if (!items.length) return null

  const titleElement = title && (
    <h2
      className={cn(
        'text-foreground font-serif font-normal tracking-tight text-balance',
        vs.title,
      )}
    >
      <Balancer>{title}</Balancer>
    </h2>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const headerElement = (title || description) && (
    <div className={cn('flex max-w-2xl flex-col', vs.header)}>
      {titleElement}
      {descriptionElement}
    </div>
  )

  const renderCard = (itemData: Content02Item, index: number) => (
    <article className={cn('group/card flex flex-col', vs.card)}>
      <div
        className={cn(
          'group/image relative overflow-hidden outline outline-black/10 dark:outline-white/10',
          vs.media,
          vs.mediaRadius,
        )}
      >
        <img
          src={itemData.media.src}
          alt={itemData.media.alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'low'}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          {itemData.icon && (
            <Icon
              name={itemData.icon as keyof typeof icons}
              className={cn('text-muted-foreground shrink-0', vs.icon)}
            />
          )}
          <h3 className={vs.itemTitle}>{itemData.title}</h3>
        </div>
        {itemData.description && (
          <p className={cn('text-muted-foreground', vs.itemDescription)}>
            {itemData.description}
          </p>
        )}
      </div>
    </article>
  )

  const gridElement = (
    <div className={cn('grid', vs.grid)}>
      {items.map((itemData, index) => (
        <div key={itemData.title + index}>{renderCard(itemData, index)}</div>
      ))}
    </div>
  )

  const animatedGridElement = (
    <motion.div className={cn('grid', vs.grid)} variants={gridContainer}>
      {items.map((itemData, index) => (
        <motion.div key={itemData.title + index} variants={cardItem}>
          {renderCard(itemData, index)}
        </motion.div>
      ))}
    </motion.div>
  )

  const body = (
    <>
      {headerElement}
      {gridElement}
    </>
  )

  const animatedBody = (
    <>
      <Reveal
        active={animate}
        className={cn('flex max-w-2xl flex-col', vs.header)}
      >
        {titleElement}
        {descriptionElement}
      </Reveal>
      <Reveal active={animate}>{animatedGridElement}</Reveal>
    </>
  )

  if (animate) {
    return (
      <section className="w-full">
        <div
          className={cn(
            'mx-auto flex w-full max-w-6xl flex-col px-6',
            vs.container,
            vs.section,
          )}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {animatedBody}
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full">
      <div
        className={cn(
          'mx-auto flex w-full max-w-6xl flex-col px-6',
          vs.container,
          vs.section,
        )}
      >
        {body}
      </div>
    </section>
  )
}
