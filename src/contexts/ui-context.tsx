'use client'

import * as React from 'react'

export type ShellWidth = 'default' | 'wide'

interface UIContextValue {
  hideNavbar: boolean
  setHideNavbar: (hide: boolean) => void
  toggleNavbar: () => void
  shellWidth: ShellWidth
  setShellWidth: (width: ShellWidth) => void
}

const UIContext = React.createContext<UIContextValue | undefined>(undefined)

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [hideNavbar, setHideNavbar] = React.useState(false)
  const [shellWidth, setShellWidth] = React.useState<ShellWidth>('default')

  const toggleNavbar = React.useCallback(() => {
    setHideNavbar((prev) => !prev)
  }, [])

  const value = React.useMemo(
    () => ({
      hideNavbar,
      setHideNavbar,
      toggleNavbar,
      shellWidth,
      setShellWidth,
    }),
    [hideNavbar, toggleNavbar, shellWidth],
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}

/** Container class for page shell + navbar alignment. */
export function shellContainerClass(width: ShellWidth): string {
  return width === 'wide' ? 'container-page-wide' : 'container-page'
}
