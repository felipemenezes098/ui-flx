'use client'

import { motion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import type { CtaProps } from '../../shared/cta/cta'
import { Cta } from '../../shared/cta/cta'
import { cn } from '@/lib/utils'

export interface BackgroundMediaProps {
  title: string
  description: string
  invert?: boolean
  variant?: 'primary' | 'supporting' | 'immersive'
  animation?: 'none' | 'subtle' | 'emphasis'
  media: {
    src: string
    alt?: string
    overlay?: boolean
  }
  cta?: CtaProps
}

const variantStyles = {
  primary: {
    container: 'min-h-128',
    title: 'mx-auto max-w-2xl text-3xl font-bold md:text-4xl',
    description: 'mx-auto max-w-2xl text-lg',
  },
  supporting: {
    container: 'min-h-96',
    title: 'mx-auto max-w-2xl text-3xl font-semibold md:text-4xl',
    description: 'mx-auto max-w-2xl text-base',
  },
  immersive: {
    container: 'min-h-144',
    title: 'mx-auto max-w-2xl text-3xl font-bold md:text-5xl',
    description: 'mx-auto max-w-2xl text-base opacity-90',
  },
} as const

const emphasisMedia: Variants = {
  hidden: { opacity: 0, scale: 1.03, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const emphasisContent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
}

const emphasisItem: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const subtleEnter = {
  initial: { opacity: 0, y: 12, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
} as const

export function BackgroundMedia({
  title,
  description,
  invert,
  variant = 'primary',
  animation = 'none',
  media,
  cta,
}: Readonly<BackgroundMediaProps>) {
  const vs = variantStyles[variant]

  const mediaInner = (
    <>
      <img
        src={media.src}
        alt={media.alt ?? 'Hero background media'}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full rounded-xl object-cover"
      />
      {media.overlay && (
        <div
          className={cn(
            'absolute inset-0 rounded-xl',
            invert ? 'bg-black/40' : 'bg-black/20',
          )}
        />
      )}
    </>
  )

  const textNodes = (
    <>
      {title && (
        <h1 className={cn(vs.title, invert ? 'text-white' : 'text-foreground')}>
          <Balancer balance={0.5}>{title}</Balancer>
        </h1>
      )}

      {description && (
        <p
          className={cn(
            vs.description,
            invert ? 'text-white' : 'text-muted-foreground',
          )}
        >
          <Balancer balance={0.5}>{description}</Balancer>
        </p>
      )}
    </>
  )

  const ctaRow = cta && <Cta cta={cta} invert={invert} className="mx-auto" />

  return (
    <div className="group/video group/media relative">
      {animation === 'emphasis' && (
        <motion.div
          className={cn('relative w-full', vs.container)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={emphasisMedia}
        >
          {mediaInner}
        </motion.div>
      )}

      {animation !== 'emphasis' && (
        <div className={cn('relative w-full', vs.container)}>{mediaInner}</div>
      )}

      <div className="absolute inset-0 flex items-center justify-center px-5">
        {animation === 'emphasis' && (
          <motion.div
            className="space-y-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={emphasisContent}
          >
            <motion.div variants={emphasisItem} className="space-y-2">
              {textNodes}
            </motion.div>

            {cta && (
              <motion.div variants={emphasisItem}>
                <Cta cta={cta} invert={invert} className="mx-auto" />
              </motion.div>
            )}
          </motion.div>
        )}

        {animation === 'subtle' && (
          <motion.div
            className="space-y-6 text-center"
            initial={subtleEnter.initial}
            whileInView={subtleEnter.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={subtleEnter.transition}
          >
            <div className="space-y-2">{textNodes}</div>
            {ctaRow}
          </motion.div>
        )}

        {animation === 'none' && (
          <div className="space-y-6 text-center">
            <div className="space-y-2">{textNodes}</div>
            {ctaRow}
          </div>
        )}
      </div>
    </div>
  )
}
