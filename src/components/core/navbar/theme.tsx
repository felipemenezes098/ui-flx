'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const { setTheme, theme: currentTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTheme = (theme: string) => {
    setTheme(theme)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className="h-8 w-8 transition-none"
      onClick={() => handleTheme(currentTheme !== 'light' ? 'light' : 'dark')}
    >
      {currentTheme !== 'light' ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  )
}
