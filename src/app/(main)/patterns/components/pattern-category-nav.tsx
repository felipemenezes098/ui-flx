'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

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
import { cn } from '@/lib/utils'
import { patternCategories } from '@/lib/patterns-catalog'

const SCROLL_STEP = 240
const FADE_WIDTH = 100
const SCROLL_THRESHOLD = 8
const SCROLL_INSET = 48

export function PatternCategoryNav() {
  const pathname = usePathname()
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)
  const fadeLeftRef = useRef<HTMLDivElement>(null)
  const fadeRightRef = useRef<HTMLDivElement>(null)
  const showLeftRef = useRef(false)
  const showRightRef = useRef(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showAllOpen, setShowAllOpen] = useState(false)

  const applyFades = useCallback((canScroll: boolean) => {
    const leftOpacity = canScroll && showLeftRef.current ? '1' : '0'
    const rightOpacity = canScroll && showRightRef.current ? '1' : '0'
    if (fadeLeftRef.current) fadeLeftRef.current.style.opacity = leftOpacity
    if (fadeRightRef.current) fadeRightRef.current.style.opacity = rightOpacity
  }, [])

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, clientWidth, scrollWidth } = el
    const canScroll = scrollWidth > clientWidth

    if (canScroll) {
      if (scrollLeft > SCROLL_THRESHOLD) showLeftRef.current = true
      else if (scrollLeft <= 0) showLeftRef.current = false

      const distanceFromRight = scrollWidth - (scrollLeft + clientWidth)
      if (distanceFromRight > SCROLL_THRESHOLD) showRightRef.current = true
      else if (distanceFromRight < 1) showRightRef.current = false
    } else {
      showLeftRef.current = false
      showRightRef.current = false
    }

    applyFades(canScroll)

    const nextLeft = showLeftRef.current
    const nextRight = showRightRef.current
    setShowLeft((prev) => (prev === nextLeft ? prev : nextLeft))
    setShowRight((prev) => (prev === nextRight ? prev : nextRight))
  }, [applyFades])

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -SCROLL_STEP : SCROLL_STEP,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    const observer = new ResizeObserver(updateScrollState)
    observer.observe(el)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      observer.disconnect()
    }
  }, [updateScrollState])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const active = scrollRef.current?.querySelector<HTMLElement>(
        '[aria-current="true"]',
      )
      active?.scrollIntoView({
        inline: 'center',
        block: 'nearest',
      })
      updateScrollState()
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, updateScrollState])

  const categories = patternCategories.toSorted((a, b) =>
    a.name.localeCompare(b.name),
  )

  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="relative min-w-0 flex-1">
        <div
          ref={fadeLeftRef}
          aria-hidden
          className="from-background pointer-events-none absolute top-0 bottom-0 left-0 z-10 bg-gradient-to-r to-transparent"
          style={{ width: FADE_WIDTH }}
        />
        <div
          ref={fadeRightRef}
          aria-hidden
          className="from-background pointer-events-none absolute top-0 right-0 bottom-0 z-10 bg-gradient-to-l to-transparent"
          style={{ width: FADE_WIDTH }}
        />

        {showLeft && (
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full shadow-sm"
            onClick={() => scroll('left')}
            aria-label="Scroll categories left"
          >
            <ChevronLeft />
          </Button>
        )}
        {showRight && (
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="absolute top-1/2 right-0 z-20 -translate-y-1/2 rounded-full shadow-sm"
            onClick={() => scroll('right')}
            aria-label="Scroll categories right"
          >
            <ChevronRight />
          </Button>
        )}

        <div
          ref={scrollRef}
          className="no-scrollbar min-w-0 overflow-x-auto overflow-y-hidden"
          style={{ scrollPaddingInline: SCROLL_INSET }}
        >
          <div className="inline-flex w-max flex-nowrap gap-1.5 py-0.5">
            {categories.map((category) => {
              const isActive = pathname === `/patterns/${category.slug}`
              return (
                <Link
                  key={category.slug}
                  href={`/patterns/${category.slug}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'shrink-0 rounded-full px-3 py-1 text-sm font-medium',
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
            <CommandInput placeholder="Search categories…" />
            <CommandList>
              <CommandEmpty>No categories found.</CommandEmpty>
              <CommandGroup heading={`${categories.length} pattern groups`}>
                {categories.map((category) => {
                  return (
                    <CommandItem
                      key={category.slug}
                      value={category.name}
                      onSelect={() => {
                        router.push(`/patterns/${category.slug}`)
                        setShowAllOpen(false)
                      }}
                    >
                      <span className="truncate">{category.name}</span>
                      {category.hasNew && (
                        <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
                      )}
                      <CommandShortcut>{category.items.length}</CommandShortcut>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
