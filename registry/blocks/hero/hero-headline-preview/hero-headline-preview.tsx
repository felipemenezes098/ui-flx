'use client'

import { motion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'
import { cn } from '@/lib/utils'

export interface HeroHeadlinePreviewProps {
  title: string
  description: string
  variant?: 'standard' | 'compact' | 'prominent'
  animation?: 'none' | 'subtle' | 'emphasis'
  media: {
    src: string
    alt: string
  }
  cta?: CtaProps
}

const variantStyles = {
  standard: {
    stack: 'gap-12 md:gap-16',
    header: 'max-w-3xl gap-6',
    inner: 'gap-4',
    title: 'text-2xl font-semibold tracking-tight text-balance md:text-3xl',
    description: 'text-muted-foreground text-sm leading-7 md:text-base',
    mediaImg: 'h-100 w-full',
    fade: 'h-32 md:h-32',
  },
  compact: {
    stack: 'gap-8 md:gap-12',
    header: 'max-w-2xl gap-4',
    inner: 'gap-3',
    title: 'text-xl font-semibold tracking-tight text-balance md:text-2xl',
    description: 'text-muted-foreground text-xs leading-6 md:text-sm',
    mediaImg: 'h-72 w-full md:h-80',
    fade: 'h-24 md:h-28',
  },
  prominent: {
    stack: 'gap-14 md:gap-20',
    header: 'max-w-4xl gap-8',
    inner: 'gap-5',
    title: 'text-3xl font-semibold tracking-tight text-balance md:text-4xl',
    description: 'text-muted-foreground text-base leading-8 md:text-lg',
    mediaImg: 'min-h-96 w-full md:min-h-112',
    fade: 'h-36 md:h-40',
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

export function HeroHeadlinePreview({
  title,
  description,
  variant = 'standard',
  animation = 'none',
  media,
  cta,
}: Readonly<HeroHeadlinePreviewProps>) {
  const vs = variantStyles[variant]

  const titleNode = title && (
    <h1 className={vs.title}>
      <Balancer balance={0.5}>{title}</Balancer>
    </h1>
  )

  const descriptionNode = description && (
    <p className={vs.description}>
      <Balancer balance={0.5}>{description}</Balancer>
    </p>
  )

  const ctaRow = cta && <Cta cta={cta} />

  const mediaInner = media && (
    <>
      <div className="overflow-hidden rounded-2xl">
        <img
          src={media.src}
          alt={media.alt ?? title ?? 'Hero preview'}
          loading="lazy"
          decoding="async"
          className={cn('object-cover', vs.mediaImg)}
        />
      </div>
      <div
        className={cn(
          'from-background via-background/80 pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent',
          vs.fade,
        )}
      />
    </>
  )

  const textHeaderClass = cn(
    'mx-auto flex flex-col items-center text-center',
    vs.header,
  )

  return (
    <div className={cn('flex flex-col', vs.stack)}>
      {animation === 'emphasis' && (
        <>
          <motion.div
            className={textHeaderClass}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={emphasisContent}
          >
            <motion.div
              variants={emphasisItem}
              className={cn('flex flex-col', vs.inner)}
            >
              {titleNode}
              {descriptionNode}
            </motion.div>
            {cta && <motion.div variants={emphasisItem}>{ctaRow}</motion.div>}
          </motion.div>

          {media && (
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={emphasisMedia}
            >
              {mediaInner}
            </motion.div>
          )}
        </>
      )}

      {animation === 'subtle' && (
        <>
          <motion.div
            className={textHeaderClass}
            initial={subtleEnter.initial}
            whileInView={subtleEnter.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={subtleEnter.transition}
          >
            <div className={cn('flex flex-col', vs.inner)}>
              {titleNode}
              {descriptionNode}
            </div>
            {ctaRow}
          </motion.div>

          {media && (
            <motion.div
              className="relative"
              initial={subtleEnter.initial}
              whileInView={subtleEnter.animate}
              viewport={{ once: true, margin: '-80px' }}
              transition={subtleEnter.transition}
            >
              {mediaInner}
            </motion.div>
          )}
        </>
      )}

      {animation === 'none' && (
        <>
          <div className={textHeaderClass}>
            <div className={cn('flex flex-col', vs.inner)}>
              {titleNode}
              {descriptionNode}
            </div>
            {ctaRow}
          </div>

          {media && <div className="relative">{mediaInner}</div>}
        </>
      )}
    </div>
  )
}
