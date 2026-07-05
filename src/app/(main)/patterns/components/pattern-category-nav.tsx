'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, LayoutGrid, Search } from 'lucide-react'
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
  CommandShortcut,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { allFormPatterns } from '@/lib/forms/catalog'
import { patternCategories } from '@/lib/patterns/patterns-catalog'
import { cn } from '@/lib/utils'

const SCROLL_STEP = 240
const SCROLL_THRESHOLD = 1
const buttonTransition = { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const }

type NavCategory = {
  slug: string
  name: string
  href: string
  hasNew?: boolean
  itemCount: number
}

const formsNavCategory: NavCategory = {
  slug: 'forms',
  name: 'Forms',
  href: '/forms/react-hook-form',
  hasNew: true,
  itemCount: allFormPatterns.length,
}

const categories: NavCategory[] = [
  ...patternCategories.map((category) => ({
    slug: category.slug,
    name: category.name,
    href: `/patterns/${category.slug}`,
    hasNew: category.hasNew,
    itemCount: category.items.length,
  })),
  formsNavCategory,
].toSorted((a, b) => a.name.localeCompare(b.name))

function isNavCategoryActive(pathname: string, category: NavCategory) {
  if (category.slug === 'forms') {
    return pathname.startsWith('/forms')
  }

  return pathname === category.href
}

export function PatternCategoryNav() {
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

  const activeCategory = categories.find((category) =>
    isNavCategoryActive(pathname, category),
  )

  return (
    <div className="flex min-w-0 items-center justify-start gap-2">
      <div className="relative hidden min-w-0 flex-1 md:block">
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
                aria-label="Scroll categories left"
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
                aria-label="Scroll categories right"
              >
                <ChevronRight />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={scrollRef}
          className="scroll-fade-x scroll-fade-[50px] no-scrollbar min-w-0 overflow-x-auto overflow-y-hidden"
        >
          <div className="inline-flex w-max flex-nowrap gap-1.5 py-0.5">
            {categories.map((category) => {
              const isActive = isNavCategoryActive(pathname, category)
              return (
                <Link
                  key={category.slug}
                  href={category.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'shrink-0 scroll-mx-12 rounded-full px-3 py-1 text-sm font-medium',
                    isActive
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  {category.name}
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
            className="w-full shrink-0 justify-start gap-1.5 md:w-auto md:justify-center"
          >
            <Search className="size-3.5 shrink-0 md:hidden" />
            <LayoutGrid className="hidden size-3.5 md:block" />
            <span className="truncate md:hidden">
              {activeCategory?.name ?? 'Categories'}
            </span>
            <span className="hidden md:inline">Show all</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[min(100vw-5rem,22rem)] overscroll-contain p-0"
        >
          <Command>
            <CommandInput placeholder="Search categories…" />
            <CommandList>
              <CommandEmpty>No categories found.</CommandEmpty>
              <CommandGroup heading={`${categories.length} pattern groups`}>
                {categories.map((category) => (
                  <CommandItem
                    key={category.slug}
                    value={category.name}
                    onSelect={() => {
                      router.push(category.href)
                      setShowAllOpen(false)
                    }}
                  >
                    <span className="truncate">{category.name}</span>
                    {category.hasNew && (
                      <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    )}
                    <CommandShortcut>{category.itemCount}</CommandShortcut>
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
