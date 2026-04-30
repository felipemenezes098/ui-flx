'use client'

import { motion, Variants } from 'motion/react'

import { siteConfig } from '@/config/site'

import { GitHubButton } from './github-button'
import { ExploreButton } from './explore-button'
import { NewsBanner } from './news-banner'

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
  },
}

const descVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

const buttonsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={bannerVariants}>
        <NewsBanner />
      </motion.div>
      <div className="flex flex-col items-center gap-4">
        <motion.h1
          variants={headingVariants}
          className="max-w-6xl text-2xl font-bold md:text-3xl"
        >
          {siteConfig.title}
        </motion.h1>
        <motion.p
          variants={descVariants}
          className="text-muted-foreground max-w-2xl text-base"
        >
          {siteConfig.description}
        </motion.p>
      </div>
      <motion.div
        variants={buttonsVariants}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <ExploreButton />
        <GitHubButton />
      </motion.div>
    </motion.div>
  )
}
