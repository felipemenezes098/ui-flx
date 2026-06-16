'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

type FormsFilterContextValue = {
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

const FormsFilterContext = createContext<FormsFilterContextValue | null>(null)

export function FormsFilterProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [active, setActive] = useState('all')
  const value = useMemo(() => ({ active, setActive }), [active])

  return (
    <FormsFilterContext.Provider value={value}>
      {children}
    </FormsFilterContext.Provider>
  )
}

export function useFormsFilter() {
  const context = useContext(FormsFilterContext)

  if (!context) {
    throw new Error('useFormsFilter must be used within FormsFilterProvider')
  }

  return context
}
