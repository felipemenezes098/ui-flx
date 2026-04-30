'use client'

import { motion } from 'motion/react'
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const DEFAULT_TOP_THRESHOLD = 8
const DEFAULT_BOTTOM_THRESHOLD = 8
const DEFAULT_LEFT_THRESHOLD = 8
const DEFAULT_RIGHT_THRESHOLD = 8
const FADE_HEIGHT = 40
const FADE_WIDTH = 24

export interface ScrollFadeEdgesProps {
  children: ReactNode
  className?: string
  scrollClassName?: string
  direction?: 'vertical' | 'horizontal'
  fadeHeight?: number
  fadeWidth?: number
  topThreshold?: number
  bottomThreshold?: number
  leftThreshold?: number
  rightThreshold?: number
  gradientFrom?: string
}

export function ScrollFadeEdges({
  children,
  className,
  scrollClassName,
  direction = 'vertical',
  fadeHeight = FADE_HEIGHT,
  fadeWidth = FADE_WIDTH,
  topThreshold = DEFAULT_TOP_THRESHOLD,
  bottomThreshold = DEFAULT_BOTTOM_THRESHOLD,
  leftThreshold = DEFAULT_LEFT_THRESHOLD,
  rightThreshold = DEFAULT_RIGHT_THRESHOLD,
  gradientFrom = 'from-background',
}: Readonly<ScrollFadeEdgesProps>) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const updateMasks = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    if (direction === 'vertical') {
      const { scrollTop, clientHeight, scrollHeight } = el
      const isScrollable = scrollHeight > clientHeight
      if (!isScrollable) {
        setShowTop(false)
        setShowBottom(false)
        return
      }
      setShowTop(scrollTop > topThreshold)
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight)
      setShowBottom(distanceFromBottom > bottomThreshold)
    }
    if (direction === 'horizontal') {
      const { scrollLeft, clientWidth, scrollWidth } = el
      const isScrollable = scrollWidth > clientWidth
      if (!isScrollable) {
        setShowLeft(false)
        setShowRight(false)
        return
      }
      setShowLeft(scrollLeft > leftThreshold)
      const distanceFromRight = scrollWidth - (scrollLeft + clientWidth)
      setShowRight(distanceFromRight > rightThreshold)
    }
  }, [direction, topThreshold, bottomThreshold, leftThreshold, rightThreshold])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateMasks()
    el.addEventListener('scroll', updateMasks, { passive: true })
    const observer = new ResizeObserver(updateMasks)
    observer.observe(el)

    return () => {
      el.removeEventListener('scroll', updateMasks)
      observer.disconnect()
    }
  }, [updateMasks])

  if (direction === 'horizontal') {
    return (
      <div
        className={cn(
          'relative flex min-h-0 min-w-0 flex-1 flex-row',
          className,
        )}
      >
        <motion.div
          aria-hidden
          className={cn(
            'pointer-events-none absolute top-0 bottom-0 z-10 bg-gradient-to-r to-transparent',
            gradientFrom,
          )}
          style={{ width: fadeWidth, left: -1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showLeft ? 1 : 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
        <div
          ref={scrollRef}
          className={cn(
            'min-h-0 min-w-0 flex-1 overflow-x-auto overflow-y-hidden',
            scrollClassName,
          )}
        >
          {children}
        </div>
        <motion.div
          aria-hidden
          className={cn(
            'pointer-events-none absolute top-0 right-0 bottom-0 z-10 bg-gradient-to-l to-transparent',
            gradientFrom,
          )}
          style={{ width: fadeWidth, right: -1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showRight ? 1 : 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      </div>
    )
  }

  return (
    <div className={cn('relative flex min-h-0 flex-1 flex-col', className)}>
      <motion.div
        aria-hidden
        className={cn(
          'pointer-events-none absolute right-0 left-0 z-10 bg-gradient-to-b to-transparent',
          gradientFrom,
        )}
        style={{ height: fadeHeight, top: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showTop ? 1 : 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />
      <div
        ref={scrollRef}
        className={cn('min-h-0 flex-1 overflow-y-auto', scrollClassName)}
      >
        {children}
      </div>
      <motion.div
        aria-hidden
        className={cn(
          'pointer-events-none absolute right-0 bottom-0 left-0 z-10 bg-gradient-to-t to-transparent',
          gradientFrom,
        )}
        style={{ height: fadeHeight, bottom: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBottom ? 1 : 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />
    </div>
  )
}
