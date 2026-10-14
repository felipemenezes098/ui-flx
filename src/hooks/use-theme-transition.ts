import * as React from 'react'
import { flushSync } from 'react-dom'
import { useTheme } from 'next-themes'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function useThemeTransition() {
  const { setTheme } = useTheme()

  return React.useCallback(
    (theme: string) => {
      const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches

      if (!document.startViewTransition || reducedMotion) {
        setTheme(theme)
        return
      }

      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(theme))
      })

      transition.ready.catch(() => {})
    },
    [setTheme],
  )
}
