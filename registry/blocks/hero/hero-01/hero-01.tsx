'use client'

import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import type { CtaProps } from '../../shared/cta'
import { IntegrationCloud } from './integration-cloud'

const WASH_IMAGE =
  'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export interface Hero01Props {
  title: string
  titleLine2?: string
  description: string
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  integrationRows: string[][]
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'max-w-md text-sm sm:text-base',
    content: 'gap-8',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'max-w-sm text-sm',
    content: 'gap-6',
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

function Reveal({
  active,
  className,
  children,
}: Readonly<{
  active: boolean
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

export function Hero01({
  title,
  titleLine2,
  description,
  animation = 'none',
  primaryCTA,
  integrationRows,
  variant = 'standard',
}: Readonly<Hero01Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const backgroundElement = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto h-full w-full mask-t-from-60% mask-t-to-90% mask-b-from-75% mask-b-to-85% mask-radial-[70%_70%] mask-radial-from-60% mask-radial-to-90% mask-radial-at-top opacity-50 md:mask-radial-[70%_90%] dark:opacity-10"
    >
      <img
        src={WASH_IMAGE}
        alt=""
        className="absolute inset-0 size-full object-cover object-top"
      />
      <div className="bg-background/30 dark:bg-background/45 absolute inset-0" />
    </div>
  )

  const titleElement = title && (
    <h1
      className={cn(
        'text-foreground font-serif font-normal tracking-tight text-balance',
        vs.title,
      )}
    >
      <Balancer>{title}</Balancer>
      {titleLine2 && (
        <>
          <br />
          <Balancer>{titleLine2}</Balancer>
        </>
      )}
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const ctaElement = primaryCTA?.ctaEnabled && (
    <Button
      className="rounded-full"
      variant={primaryCTA.variant ?? 'default'}
      size={primaryCTA.size ?? 'default'}
      asChild={Boolean(primaryCTA.link)}
      type={primaryCTA.link ? undefined : 'button'}
      aria-label={primaryCTA.text}
    >
      {primaryCTA.link ? (
        <a href={primaryCTA.link} target="_blank" rel="noopener noreferrer">
          {primaryCTA.text}
          <ChevronRight className="size-4" aria-hidden />
        </a>
      ) : (
        <>
          {primaryCTA.text}
          <ChevronRight className="size-4" aria-hidden />
        </>
      )}
    </Button>
  )

  const illustrationElement = integrationRows.length > 0 && (
    <IntegrationCloud rows={integrationRows} />
  )

  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      {backgroundElement}

      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center',
          vs.section,
          vs.content,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal active={animate} className="flex flex-col items-center gap-5">
          {titleElement}
          {descriptionElement}
        </Reveal>

        {ctaElement && <Reveal active={animate}>{ctaElement}</Reveal>}

        <Reveal active={animate} className="w-full">
          {illustrationElement}
        </Reveal>
      </motion.div>
    </section>
  )
}
