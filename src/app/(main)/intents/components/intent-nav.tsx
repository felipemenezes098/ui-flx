'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { allIntents } from '@/lib/intents/intent-catalog'

const SCROLL_STEP = 240
const SCROLL_THRESHOLD = 1
const FADE_WIDTH = 100
const fadeTransition = { duration: 0.2, ease: 'easeOut' as const }
const buttonTransition = { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const }

const intents = allIntents
  .filter((intent) => intent.manifest)
  .toSorted((a, b) => a.name.localeCompare(b.name))

export function IntentNav() {
  const pathname = usePathname()
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showAllOpen, setShowAllOpen] = useState(false)

  function syncScrollState() {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, clientWidth, scrollWidth } = el
    const canScroll = scrollWidth > clientWidth + SCROLL_THRESHOLD
    const distanceFromRight = scrollWidth - (scrollLeft + clientWidth)

    setShowLeft((prev) => {
      const next = canScroll && scrollLeft > SCROLL_THRESHOLD
      return prev === next ? prev : next
    })
    setShowRight((prev) => {
      const next = canScroll && distanceFromRight > SCROLL_THRESHOLD
      return prev === next ? prev : next
    })
  }

  function scrollToEnd(el: HTMLDivElement) {
    const last = el.firstElementChild?.lastElementChild as HTMLElement | null
    last?.scrollIntoView({
      inline: 'end',
      block: 'nearest',
      behavior: 'smooth',
    })
  }

  function scroll(direction: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return

    if (direction === 'left') {
      el.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' })
      return
    }

    const distanceFromRight = el.scrollWidth - (el.scrollLeft + el.clientWidth)
    if (distanceFromRight <= SCROLL_THRESHOLD) return

    if (distanceFromRight <= SCROLL_STEP) {
      scrollToEnd(el)
      return
    }

    el.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    syncScrollState()
    el.addEventListener('scroll', syncScrollState, { passive: true })
    el.addEventListener('scrollend', syncScrollState, { passive: true })
    const observer = new ResizeObserver(syncScrollState)
    observer.observe(el)
    const track = el.firstElementChild
    if (track) observer.observe(track)
    return () => {
      el.removeEventListener('scroll', syncScrollState)
      el.removeEventListener('scrollend', syncScrollState)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    scrollRef.current
      ?.querySelector<HTMLElement>('[aria-current="true"]')
      ?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [pathname])

  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="relative min-w-0 flex-1">
        <motion.div
          aria-hidden={!showLeft}
          className="from-background via-background/80 pointer-events-none absolute top-0 bottom-0 left-0 z-10 bg-gradient-to-r to-transparent"
          style={{ width: FADE_WIDTH }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showLeft ? 1 : 0 }}
          transition={fadeTransition}
        />
        <motion.div
          aria-hidden={!showRight}
          className="from-background via-background/80 pointer-events-none absolute top-0 right-0 bottom-0 z-10 bg-gradient-to-l to-transparent"
          style={{ width: FADE_WIDTH }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showRight ? 1 : 0 }}
          transition={fadeTransition}
        />

        <AnimatePresence>
          {showLeft && (
            <motion.div
              key="scroll-left"
              className="absolute top-1/2 left-0 z-20 origin-left -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.95, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -8 }}
              transition={buttonTransition}
            >
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-full shadow-sm"
                onClick={() => scroll('left')}
                aria-label="Scroll intents left"
              >
                <ChevronLeft />
              </Button>
            </motion.div>
          )}
          {showRight && (
            <motion.div
              key="scroll-right"
              className="absolute top-1/2 right-0 z-20 origin-right -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.95, x: 8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 8 }}
              transition={buttonTransition}
            >
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-full shadow-sm"
                onClick={() => scroll('right')}
                aria-label="Scroll intents right"
              >
                <ChevronRight />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={scrollRef}
          className="no-scrollbar min-w-0 overflow-x-auto overflow-y-hidden"
        >
          <div className="inline-flex w-max flex-nowrap gap-1.5 py-0.5">
            {intents.map((intent) => {
              const isActive = pathname === `/intents/${intent.slug}`
              return (
                <Link
                  key={intent.slug}
                  href={`/intents/${intent.slug}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'shrink-0 scroll-mx-12 rounded-full px-3 py-1 text-sm font-medium',
                    isActive
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  {intent.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <Popover open={showAllOpen} onOpenChange={setShowAllOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="shrink-0 gap-1.5"
          >
            <LayoutGrid className="size-3.5" />
            Show all
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[min(100vw-2rem,22rem)] overscroll-contain p-0"
        >
          <Command>
            <CommandInput placeholder="Search intents…" />
            <CommandList>
              <CommandEmpty>No intents found.</CommandEmpty>
              <CommandGroup heading={`${intents.length} intents`}>
                {intents.map((intent) => (
                  <CommandItem
                    key={intent.slug}
                    value={intent.name}
                    onSelect={() => {
                      router.push(`/intents/${intent.slug}`)
                      setShowAllOpen(false)
                    }}
                  >
                    <span className="truncate">{intent.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
