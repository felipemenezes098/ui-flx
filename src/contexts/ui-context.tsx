'use client'

import * as React from 'react'

interface UIContextValue {
  hideNavbar: boolean
  setHideNavbar: (hide: boolean) => void
  toggleNavbar: () => void
}

const UIContext = React.createContext<UIContextValue | undefined>(undefined)

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [hideNavbar, setHideNavbar] = React.useState<boolean>(false)

  const toggleNavbar = React.useCallback(() => {
    setHideNavbar((prev) => !prev)
  }, [])

  const value = React.useMemo(
    () => ({
      hideNavbar,
      setHideNavbar,
      toggleNavbar,
    }),
    [hideNavbar, toggleNavbar],
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
