'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta'
import { Cta } from '../../shared/cta'
import { cn } from '@/lib/utils'

export interface Content07Item {
  title?: string
  content?: string
  media?: {
    src: string
    alt: string
  }
  cta?: CtaProps
}

export interface Content07Props {
  title: string
  description?: string
  items: Content07Item[]
  variant?: 'standard' | 'compact'
  animation?: 'none' | 'subtle'
}

const variantStyles = {
  standard: {
    container: 'py-12 sm:py-16',
    section: 'gap-10 sm:gap-12',
    header: 'gap-3',
    title: 'text-2xl sm:text-3xl',
    description: 'max-w-xl text-sm sm:text-base',
    grid: 'grid-cols-1 gap-8 md:grid-cols-2',
    column: 'gap-5',
    copy: 'gap-2',
    itemTitle: 'text-lg font-medium tracking-tight',
    itemContent: 'text-sm',
    media: 'h-64',
    mediaRadius: 'rounded-lg',
  },
  compact: {
    container: 'py-10 sm:py-12',
    section: 'gap-8',
    header: 'gap-2',
    title: 'text-xl sm:text-2xl',
    description: 'max-w-lg text-sm',
    grid: 'grid-cols-1 gap-6 md:grid-cols-2',
    column: 'gap-4',
    copy: 'gap-1.5',
    itemTitle: 'text-base font-medium tracking-tight',
    itemContent: 'text-xs',
    media: 'h-52',
    mediaRadius: 'rounded-md',
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

const columnItem: Variants = {
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

export function Content07({
  title,
  description,
  items,
  variant = 'standard',
  animation = 'none',
}: Readonly<Content07Props>) {
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

  const renderColumn = (itemData: Content07Item, index: number) => (
    <article className={cn('flex flex-col', vs.column)}>
      {itemData.media && (
        <div
          className={cn(
            'group/image relative w-full overflow-hidden outline outline-black/10 dark:outline-white/10',
            vs.media,
            vs.mediaRadius,
          )}
        >
          <img
            src={itemData.media.src}
            alt={itemData.media.alt || itemData.title || 'Content 07 image'}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'low'}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:scale-[1.03]"
          />
        </div>
      )}

      <div className={cn('flex flex-col', vs.copy)}>
        {itemData.title && (
          <h3 className={vs.itemTitle}>{itemData.title}</h3>
        )}
        {itemData.content && (
          <p
            className={cn(
              'text-muted-foreground whitespace-pre-line',
              vs.itemContent,
            )}
          >
            <Balancer>{itemData.content}</Balancer>
          </p>
        )}
      </div>

      {itemData.cta && <Cta cta={itemData.cta} />}
    </article>
  )

  const gridElement = (
    <div className={cn('grid', vs.grid)}>
      {items.map((itemData, index) => (
        <div key={`${itemData.title}-${index}`}>
          {renderColumn(itemData, index)}
        </div>
      ))}
    </div>
  )

  const animatedGridElement = (
    <motion.div className={cn('grid', vs.grid)} variants={gridContainer}>
      {items.map((itemData, index) => (
        <motion.div key={`${itemData.title}-${index}`} variants={columnItem}>
          {renderColumn(itemData, index)}
        </motion.div>
      ))}
    </motion.div>
  )

  const body = (
    <>
      {(title || description) && (
        <div className={cn('flex max-w-2xl flex-col', vs.header)}>
          {titleElement}
          {descriptionElement}
        </div>
      )}
      {gridElement}
    </>
  )

  const animatedBody = (
    <>
      <Reveal active={animate} className={cn('flex max-w-2xl flex-col', vs.header)}>
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
            className={cn('flex flex-col', vs.section)}
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
