'use client'

import * as React from 'react'

import { Tabs } from '@/components/ui/tabs'
import { useConfig } from '@/hooks/use-config'

export function CodeTabs({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig()

  const installationType = React.useMemo(() => {
    return config.installationType || 'cli'
  }, [config])

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) =>
        setConfig({ ...config, installationType: value as 'cli' | 'manual' })
      }
      className={className}
      {...props}
    >
      {children}
    </Tabs>
  )
}
