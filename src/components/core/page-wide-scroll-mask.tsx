'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export default function PageWideScrollMask({
  classNameTop,
  classNameBottom,
  topThreshold = 10,
  bottomThreshold = 50,
}: Readonly<{
  classNameTop?: string
  classNameBottom?: string
  topThreshold?: number
  bottomThreshold?: number
}>) {
  const [showTopMask, setShowTopMask] = useState(false)
  const [showBottomMask, setShowBottomMask] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const isScrollable = documentHeight > windowHeight

      if (!isScrollable) {
        setShowTopMask(false)
        setShowBottomMask(false)
        return
      }

      setShowTopMask(scrollTop > topThreshold)

      const distanceFromBottom = documentHeight - (scrollTop + windowHeight)
      setShowBottomMask(distanceFromBottom > bottomThreshold)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [topThreshold, bottomThreshold])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className={cn(
          'from-background/80 pointer-events-none fixed top-[50px] z-40 h-16 w-full bg-gradient-to-b to-transparent',
          classNameTop,
        )}
        initial={{
          opacity: 0,
          y: -16,
        }}
        animate={{
          opacity: showTopMask ? 1 : 0,
          y: showTopMask ? 0 : -16,
        }}
        transition={{
          duration: 0.15,
          ease: 'easeInOut',
        }}
        style={{
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden="true"
        className={cn(
          'from-background/80 pointer-events-none fixed bottom-0 z-40 h-16 w-full bg-gradient-to-t to-transparent',
          classNameBottom,
        )}
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: showBottomMask ? 1 : 0,
          y: showBottomMask ? 0 : 16,
        }}
        transition={{
          duration: 0.15,
          ease: 'easeInOut',
        }}
        style={{
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
