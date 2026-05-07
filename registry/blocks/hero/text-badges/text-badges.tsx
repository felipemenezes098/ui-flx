'use client'

import { motion, type Variants } from 'motion/react'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface Feature {
  icon: string
  title: string
}

export interface TextBadgesProps {
  title: string
  variant?: 'standard' | 'compact' | 'prominent'
  animation?: 'none' | 'subtle' | 'emphasis'
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  features: Feature[]
}

const variantStyles = {
  standard: {
    root: 'min-h-60 space-y-6',
    title: 'max-w-2xl text-balance text-3xl font-bold sm:text-4xl',
    badgeList: 'm-0 mt-3 flex list-none flex-wrap justify-center gap-3',
  },
  compact: {
    root: 'min-h-48 space-y-4',
    title: 'max-w-xl text-balance text-2xl font-bold sm:text-3xl',
    badgeList: 'm-0 mt-2 flex list-none flex-wrap justify-center gap-2',
  },
  prominent: {
    root: 'min-h-72 space-y-8',
    title: 'max-w-3xl text-balance text-4xl font-bold sm:text-5xl',
    badgeList: 'm-0 mt-5 flex list-none flex-wrap justify-center gap-4',
  },
} as const

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

const emphasisBadgeList: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
}

const subtleEnter = {
  initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const

export function TextBadges({
  title,
  variant = 'standard',
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  features,
}: Readonly<TextBadgesProps>) {
  const vs = variantStyles[variant]

  const titleNode = title && <h1 className={vs.title}>{title}</h1>

  const ctasNode =
    primaryCTA || secondaryCTA ? (
      <div className="flex flex-col gap-3 sm:flex-row">
        {primaryCTA && <Cta cta={primaryCTA} className="w-full sm:w-fit" />}
        {secondaryCTA && <Cta cta={secondaryCTA} className="w-full sm:w-fit" />}
      </div>
    ) : null

  const badgesNode = features && features.length > 0 && (
    <ul className={vs.badgeList}>
      {features.map((feature, index) => (
        <Badge key={`${feature.title}-${index}`} variant="secondary">
          {feature.title}
        </Badge>
      ))}
    </ul>
  )

  const badgesNodeEmphasis = features && features.length > 0 && (
    <motion.ul className={vs.badgeList} variants={emphasisBadgeList}>
      {features.map((feature, index) => (
        <motion.li
          key={`${feature.title}-${index}`}
          variants={emphasisItem}
          className="list-none"
        >
          <Badge variant="secondary">{feature.title}</Badge>
        </motion.li>
      ))}
    </motion.ul>
  )

  const rootClass = cn(
    'flex flex-col items-center justify-center text-center',
    vs.root,
  )

  const viewport = {
    once: true,
    amount: 0.12 as const,
    margin: '48px' as const,
  }

  return (
    <div className="w-full">
      {animation === 'emphasis' && (
        <motion.div
          key={animation}
          className={rootClass}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={emphasisContent}
        >
          {titleNode && (
            <motion.div variants={emphasisItem}>{titleNode}</motion.div>
          )}
          {ctasNode && (
            <motion.div variants={emphasisItem}>{ctasNode}</motion.div>
          )}
          {badgesNodeEmphasis}
        </motion.div>
      )}

      {animation === 'subtle' && (
        <motion.div
          key={animation}
          className={rootClass}
          initial={subtleEnter.initial}
          whileInView={subtleEnter.animate}
          viewport={viewport}
          transition={subtleEnter.transition}
        >
          {titleNode}
          {ctasNode}
          {badgesNode}
        </motion.div>
      )}

      {animation === 'none' && (
        <div key={animation} className={rootClass}>
          {titleNode}
          {ctasNode}
          {badgesNode}
        </div>
      )}
    </div>
  )
}
