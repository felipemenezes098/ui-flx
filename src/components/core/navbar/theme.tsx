'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

const THEME_CYCLE = [
  { value: 'system', Icon: Monitor, label: 'System theme' },
  { value: 'light', Icon: Sun, label: 'Light theme' },
  { value: 'dark', Icon: Moon, label: 'Dark theme' },
] as const

export function ThemeSwitcher() {
  const { setTheme, theme: currentTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const activeIndex = Math.max(
    THEME_CYCLE.findIndex((t) => t.value === currentTheme),
    0,
  )
  const active = THEME_CYCLE[activeIndex]
  const next = THEME_CYCLE[(activeIndex + 1) % THEME_CYCLE.length]
  const { Icon } = active

  return (
    <Button
      size="icon"
      variant="ghost"
      className="h-8 w-8 transition-none"
      aria-label={active.label}
      title={active.label}
      onClick={() => setTheme(next.value)}
    >
      <span className="relative flex size-3.75 items-center justify-center">
        <AnimatePresence initial={false}>
          <motion.span
            key={active.value}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Icon className="size-3.75" />
          </motion.span>
        </AnimatePresence>
      </span>
    </Button>
  )
}
