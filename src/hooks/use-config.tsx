'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Config = {
  packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun'
  installationType: 'cli' | 'manual'
}

type ConfigContextType = {
  config: Config
  setConfig: (config: Config) => void
}

const ConfigContext = createContext<ConfigContextType | null>(null)

export function useConfig() {
  const context = useContext(ConfigContext)

  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }

  return [context.config, context.setConfig] as const
}

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<Config>({
    packageManager: 'npm',
    installationType: 'cli',
  })

  useEffect(() => {
    const savedConfig = localStorage.getItem('config')
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig))
      } catch (error) {
        console.error('Failed to parse config from local storage', error)
      }
    }
  }, [])

  const setConfigAndSave = (newConfig: Config) => {
    setConfig(newConfig)
    localStorage.setItem('config', JSON.stringify(newConfig))
  }

  return (
    <ConfigContext.Provider
      value={{
        config,
        setConfig: setConfigAndSave,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
