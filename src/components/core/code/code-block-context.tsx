'use client'

import * as React from 'react'

interface CodeBlockContextValue {
  isOpened: boolean
  setIsOpened: (value: boolean) => void
  collapsible: boolean
}

const CodeBlockContext = React.createContext<CodeBlockContextValue | null>(null)

export function CodeBlockProvider({
  children,
  defaultOpen = false,
  collapsible = false,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
  collapsible?: boolean
}) {
  const [isOpened, setIsOpened] = React.useState(defaultOpen)

  return (
    <CodeBlockContext.Provider value={{ isOpened, setIsOpened, collapsible }}>
      {children}
    </CodeBlockContext.Provider>
  )
}

export function useCodeBlock() {
  const context = React.useContext(CodeBlockContext)
  if (!context) {
    throw new Error('useCodeBlock must be used inside CodeBlock')
  }
  return context
}
