'use client'

import { Star } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export function ButtonGithub() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className="rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={siteConfig.links.github}
        target="_blank"
        className="flex items-center gap-2"
      >
        <span className="relative size-4">
          <AnimatePresence mode="sync" initial={false}>
            {isHovered ? (
              <motion.span
                key="star-filled"
                initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 33,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
              </motion.span>
            ) : (
              <motion.span
                key="star-outline"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.12 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Star className="size-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>{' '}
        Star on GitHub
      </Link>
    </Button>
  )
}
