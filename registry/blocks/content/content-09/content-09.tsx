'use client'

import * as React from 'react'
import { icons } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { Icon } from '../../shared/dynamic-icon'

export interface Content09Item {
  title: string
  description: string
  icon: string
}

export interface Content09Props {
  title: string
  description?: string
  items: Content09Item[]
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
    grid: 'grid-cols-1 gap-6 md:grid-cols-2',
    cardHeader: 'gap-3',
    icon: 'size-5',
    cardTitle: 'text-lg',
    cardDescription: 'text-sm',
  },
  compact: {
    container: 'py-10 sm:py-12',
    section: 'gap-8',
    header: 'gap-2',
    title: 'text-xl sm:text-2xl',
    description: 'max-w-lg text-sm',
    grid: 'grid-cols-1 gap-4 md:grid-cols-2',
    cardHeader: 'gap-2',
    icon: 'size-4',
    cardTitle: 'text-base',
    cardDescription: 'text-xs',
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

export function Content09({
  title,
  description,
  items,
  variant = 'standard',
  animation = 'none',
}: Readonly<Content09Props>) {
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

  const renderCard = (itemData: Content09Item, index: number) => (
    <Card className="h-full shadow-sm">
      <CardHeader className={cn('flex flex-col', vs.cardHeader)}>
        {itemData.icon && (
          <Icon
            name={itemData.icon as keyof typeof icons}
            className={cn('text-muted-foreground shrink-0', vs.icon)}
          />
        )}
        <CardTitle className={vs.cardTitle}>{itemData.title}</CardTitle>
        {itemData.description && (
          <CardDescription className={vs.cardDescription}>
            <Balancer>{itemData.description}</Balancer>
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  )

  const gridElement = (
    <ul className={cn('m-0 grid list-none p-0', vs.grid)}>
      {items.map((itemData, index) => (
        <li key={`${itemData.title}-${index}`} className="h-full">
          {renderCard(itemData, index)}
        </li>
      ))}
    </ul>
  )

  const animatedGridElement = (
    <motion.ul
      className={cn('m-0 grid list-none p-0', vs.grid)}
      variants={gridContainer}
    >
      {items.map((itemData, index) => (
        <motion.li
          key={`${itemData.title}-${index}`}
          className="h-full"
          variants={cardItem}
        >
          {renderCard(itemData, index)}
        </motion.li>
      ))}
    </motion.ul>
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
