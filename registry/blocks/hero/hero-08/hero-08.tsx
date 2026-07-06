'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

import { Cta, type CtaProps } from '../../shared/cta'

export interface Hero08Avatar {
  src: string
  fallback: string
}

export interface Hero08Card {
  title: string
  subtitle: string
  image: string
  imageAlt?: string
  invert?: boolean
  cta: CtaProps
}

export interface Hero08Props {
  title: string
  description: string
  socialProof?: string
  avatars?: Hero08Avatar[]
  cards: Hero08Card[]
  animation?: 'none' | 'subtle'
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'text-sm sm:text-base',
    header: 'gap-10 lg:gap-16',
    content: 'gap-12 sm:gap-16',
    grid: 'gap-5 sm:gap-6',
    card: 'aspect-16/10',
    cardTitle: 'text-2xl sm:text-3xl',
    cardBody: 'p-6 sm:p-8',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'text-sm',
    header: 'gap-8 lg:gap-12',
    content: 'gap-10 sm:gap-12',
    grid: 'gap-4 sm:gap-5',
    card: 'aspect-16/11',
    cardTitle: 'text-xl sm:text-2xl',
    cardBody: 'p-5 sm:p-6',
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

function FeatureCard({
  card,
  vs,
}: Readonly<{ card: Hero08Card; vs: (typeof variantStyles)[keyof typeof variantStyles] }>) {
  const titleClass = card.invert ? 'text-white' : 'text-foreground'
  const subtitleClass = card.invert ? 'text-white/80' : 'text-muted-foreground'

  return (
    <div
      className={cn(
        'relative isolate w-full overflow-hidden rounded-md outline outline-black/10 dark:outline-white/10',
        vs.card,
      )}
    >
      {card.image && (
        <img
          src={card.image}
          alt={card.imageAlt ?? ''}
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
      )}

      {card.invert && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-br from-black/40 via-black/15 to-transparent"
        />
      )}

      <div className={cn('flex h-full flex-col items-start', vs.cardBody)}>
        <h3 className={cn('font-semibold tracking-tight', vs.cardTitle, titleClass)}>
          <Balancer>{card.title}</Balancer>
        </h3>
        <p className={cn('mt-1 text-sm', subtitleClass)}>{card.subtitle}</p>
        {card.cta?.ctaEnabled && (
          <div className="mt-4">
            <Cta cta={card.cta} invert={card.invert} />
          </div>
        )}
      </div>
    </div>
  )
}

export function Hero08({
  title,
  description,
  socialProof,
  avatars,
  cards,
  animation = 'none',
  variant = 'standard',
}: Readonly<Hero08Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1
      className={cn(
        'text-foreground font-serif font-normal tracking-tight text-balance',
        vs.title,
      )}
    >
      <Balancer>{title}</Balancer>
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground max-w-sm', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const socialProofElement = (socialProof || avatars?.length) && (
    <div className="flex flex-col items-start gap-3">
      {socialProof && (
        <p className="text-foreground text-sm font-semibold">{socialProof}</p>
      )}
      {avatars?.length ? (
        <div className="flex -space-x-2.5">
          {avatars.map((a) => (
            <Avatar
              key={a.src}
              className="ring-background size-9 ring-2"
            >
              <AvatarImage src={a.src} alt="" />
              <AvatarFallback className="text-xs">{a.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      ) : null}
    </div>
  )

  const cardsElement = cards?.length ? (
    <div className={cn('grid grid-cols-1 md:grid-cols-2', vs.grid)}>
      {cards.map((card) => (
        <FeatureCard key={card.title} card={card} vs={vs} />
      ))}
    </div>
  ) : null

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
            'grid grid-cols-1 items-end lg:grid-cols-2',
            vs.header,
          )}
        >
          {titleElement}
          <div className="flex flex-col items-start gap-5">
            {descriptionElement}
            {socialProofElement}
          </div>
        </Reveal>

        <Reveal active={animate} variants={mediaItem} className="w-full">
          {cardsElement}
        </Reveal>
      </motion.div>
    </section>
  )
}
