'use client'

import { Fragment, useState } from 'react'

import { motion, type Variants } from 'motion/react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface SelectRevealMediaItem {
  id: string
  title: string
  description: string
  media: {
    src: string
    alt: string
  }
}

export interface SelectRevealMediaProps {
  items: SelectRevealMediaItem[]
  variant?: 'standard' | 'compact' | 'prominent'
  animation?: 'none' | 'subtle' | 'emphasis'
}

const variantStyles = {
  standard: {
    grid: 'grid-cols-1 gap-10 md:grid-cols-2 md:gap-14',
    nav: 'gap-1',
    button: 'py-2.5',
    title: 'text-base',
    titleSelected: 'font-medium',
    desc: 'text-sm',
    media: 'min-h-[320px] md:min-h-[420px]',
    mediaRadius: 'rounded-lg',
  },
  compact: {
    grid: 'grid-cols-1 gap-6 md:grid-cols-2 md:gap-10',
    nav: 'gap-0.5',
    button: 'py-2',
    title: 'text-sm md:text-base',
    titleSelected: 'font-medium',
    desc: 'text-xs',
    media: 'min-h-[260px] md:min-h-[340px]',
    mediaRadius: 'rounded-md',
  },
  prominent: {
    grid: 'grid-cols-1 gap-12 md:grid-cols-2 md:gap-16',
    nav: 'gap-1.5',
    button: 'py-3',
    title: 'text-base md:text-lg',
    titleSelected: 'font-semibold',
    desc: 'text-sm md:text-base',
    media: 'min-h-[380px] md:min-h-[480px]',
    mediaRadius: 'rounded-xl',
  },
} as const

const emphasisNavList: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
}

const emphasisItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const emphasisMediaEnter: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
  },
}

const subtleEnter = {
  initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const

const viewport = {
  once: true,
  margin: '-80px' as const,
}

export function SelectRevealMedia({
  items,
  variant = 'standard',
  animation = 'none',
}: Readonly<SelectRevealMediaProps>) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const vs = variantStyles[variant]

  if (!items.length) return null

  const navBody = (
    <>
      {items.map((item, index) => {
        const isSelected = index === selectedIndex
        const buttonEl = (
          <Button
            variant="ghost"
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-current={isSelected ? 'true' : undefined}
            className={cn(
              'h-auto w-full justify-start rounded-sm text-left font-normal whitespace-normal',
              vs.button,
              'hover:bg-muted/50 transition-none hover:opacity-100',
              isSelected && 'text-foreground bg-muted/50',
              !isSelected && 'text-muted-foreground hover:text-foreground',
            )}
          >
            <span className="flex flex-col gap-1">
              <span className={cn(vs.title, isSelected && vs.titleSelected)}>
                {item.title}
              </span>
              <span
                className={cn(
                  'grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  isSelected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <span className="overflow-hidden">
                  <span
                    className={cn(
                      'text-muted-foreground block pb-0.5 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      vs.desc,
                      isSelected ? 'opacity-100' : 'opacity-0',
                    )}
                  >
                    {item.description}
                  </span>
                </span>
              </span>
            </span>
          </Button>
        )

        if (animation === 'emphasis') {
          return (
            <motion.div key={item.id} variants={emphasisItem}>
              {buttonEl}
            </motion.div>
          )
        }

        return <Fragment key={item.id}>{buttonEl}</Fragment>
      })}
    </>
  )

  const mediaCrossfade = (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        vs.media,
        vs.mediaRadius,
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
            index === selectedIndex ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={item.media.src}
            alt={item.media.alt || item.title}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'low'}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      ))}
    </div>
  )

  const grid = (
    <div className={cn('grid grid-cols-1 md:grid-cols-2', vs.grid)}>
      {animation === 'emphasis' && (
        <motion.nav
          className={cn('flex flex-col justify-center', vs.nav)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={emphasisNavList}
          aria-label="List of items"
        >
          {navBody}
        </motion.nav>
      )}
      {animation !== 'emphasis' && (
        <nav
          className={cn('flex flex-col justify-center', vs.nav)}
          aria-label="List of items"
        >
          {navBody}
        </nav>
      )}
      {animation === 'emphasis' && (
        <motion.div
          className="relative min-w-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={emphasisMediaEnter}
        >
          {mediaCrossfade}
        </motion.div>
      )}
      {animation !== 'emphasis' && mediaCrossfade}
    </div>
  )

  if (animation === 'subtle') {
    return (
      <motion.div
        initial={subtleEnter.initial}
        whileInView={subtleEnter.animate}
        viewport={viewport}
        transition={subtleEnter.transition}
      >
        {grid}
      </motion.div>
    )
  }

  return grid
}
