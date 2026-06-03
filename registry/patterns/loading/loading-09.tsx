'use client'

import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui/progress'

export function Loading09() {
  const [value, setValue] = useState(8)

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 8 : prev + Math.ceil((100 - prev) / 8)))
    }, 700)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 py-6">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Downloading update</span>
        <span className="text-muted-foreground font-mono tabular-nums">
          {value}%
        </span>
      </div>
      <Progress value={value} />
      <p className="text-muted-foreground text-xs">
        {value >= 100 ? 'Finishing up…' : 'Fetching files from the server…'}
      </p>
    </div>
  )
}
