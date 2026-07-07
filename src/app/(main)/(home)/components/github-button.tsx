'use client'

import { Star } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function GitHubButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={siteConfig.links.github}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        buttonVariants({
          variant: 'ghost',
          className: 'flex h-9.5 items-center gap-2 rounded-xl px-4',
        }),
      )}
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
              <Star className="size-4 text-yellow-400" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>{' '}
      Star on GitHub
    </Link>
  )
}
