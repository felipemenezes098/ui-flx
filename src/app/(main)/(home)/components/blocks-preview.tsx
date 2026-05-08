'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { BlockCategory } from '@/lib/catalog'
import { blocks } from '@/lib/catalog'
import { cn } from '@/lib/utils'

function BlockCard({
  name,
  image,
  href,
  index,
  hasNew,
}: {
  name: string
  image: { light: string; dark: string }
  href: string
  index: number
  hasNew?: boolean
}) {
  const [loaded, setLoaded] = useState(false)
  const { resolvedTheme } = useTheme()
  const imageSrc = resolvedTheme === 'dark' ? image.dark : image.light

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
    >
      <Link
        href={href}
        className="group border-border bg-card focus-visible:outline-ring relative flex flex-col overflow-hidden rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {hasNew && (
          <span className="absolute top-2.5 right-2.5 z-10 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white">
            New
          </span>
        )}
        <div
          className={cn(
            'relative flex h-44 w-full items-center justify-center overflow-hidden bg-white p-4',
            !loaded && 'animate-pulse',
          )}
        >
          <Image
            src={imageSrc}
            alt={name}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 33vw"
            className={cn(
              'h-full w-full object-contain transition-all duration-300 group-hover:scale-[1.02]',
              loaded ? 'opacity-100' : 'opacity-0',
            )}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="border-border/60 flex items-center justify-between border-t px-3 py-2.5">
          <span className="text-foreground text-sm font-medium">{name}</span>
          <ArrowRight className="text-muted-foreground h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </div>
      </Link>
    </motion.div>
  )
}

function CategorySection({
  cat,
  filterKey,
}: {
  cat: BlockCategory
  filterKey: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h2 className="text-foreground text-sm font-semibold">
          {cat.category}
        </h2>
        <span className="text-muted-foreground text-xs">
          {cat.blocks.length} {cat.blocks.length === 1 ? 'block' : 'blocks'}
        </span>
        {cat.hasNew && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            New
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cat.blocks.map((block, i) => (
          <BlockCard
            key={`${filterKey}-${block.slug}`}
            name={block.name}
            image={block.image}
            href={`/blocks?category=${cat.slug}#${cat.slug}-${block.slug}`}
            index={i}
            hasNew={block.hasNew}
          />
        ))}
      </div>
    </div>
  )
}

export function BlocksPreview() {
  const [active, setActive] = useState<string | null>(null)
  const totalBlocks = blocks.reduce((acc, cat) => acc + cat.blocks.length, 0)
  const filtered = active ? blocks.filter((c) => c.slug === active) : blocks

  return (
    <div className="flex flex-col gap-8">
      <div className="border-border/60 flex items-center justify-between border-b pb-4">
        <p className="text-muted-foreground text-sm">
          <span className="text-foreground font-semibold">{totalBlocks}</span>{' '}
          blocks across{' '}
          <span className="text-foreground font-semibold">{blocks.length}</span>{' '}
          categories
        </p>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="-mr-2 gap-1.5 text-sm"
        >
          <Link href="/blocks">
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={cn(
            'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200',
            active === null &&
              'border-foreground bg-foreground text-background',
            active !== null &&
              'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
          )}
        >
          All
        </button>
        {blocks.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActive(cat.slug)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200',
              active === cat.slug &&
                'border-foreground bg-foreground text-background',
              active !== cat.slug &&
                'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
            )}
          >
            {cat.category}
            {cat.hasNew && (
              <span className="mb-px ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active ?? 'all'}
          initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="flex flex-col gap-16"
        >
          {filtered.map((cat) => (
            <CategorySection key={cat.slug} cat={cat} filterKey={active ?? 'all'} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
