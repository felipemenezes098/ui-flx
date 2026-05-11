'use client'

import { motion } from 'motion/react'

import { siteConfig } from '@/config/site'
import { TextAnimate } from '@/components/core/text-animated'

import { GitHubButton } from './github-button'
import { ExploreButton } from './explore-button'
import { NewsBanner } from './news-banner'

export function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <motion.div
        initial={{ opacity: 0, filter: 'blur(6px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
      >
        <NewsBanner />
      </motion.div>

      <div className="flex flex-col items-center gap-4">
        <TextAnimate
          as="h1"
          animation="blurIn"
          by="word"
          duration={0.4}
          delay={0.1}
          startOnView={false}
          className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl"
        >
          {siteConfig.title}
        </TextAnimate>

        <TextAnimate
          animation="blurIn"
          by="text"
          duration={0.45}
          delay={0.85}
          startOnView={false}
          className="text-muted-foreground max-w-2xl text-base"
        >
          {siteConfig.description}
        </TextAnimate>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(4px)', y: 4 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 1.35 }}
        >
          <ExploreButton />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(4px)', y: 4 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 1.5 }}
        >
          <GitHubButton />
        </motion.div>
      </div>
    </div>
  )
}
