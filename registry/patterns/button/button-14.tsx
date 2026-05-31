'use client'

import { RefreshCwIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function Button14() {
  const [turns, setTurns] = useState(0)

  return (
    <Button variant="outline" onClick={() => setTurns((value) => value + 1)}>
      <RefreshCwIcon
        data-icon="inline-start"
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `rotate(${turns * 360}deg)` }}
      />
      Refresh
    </Button>
  )
}
