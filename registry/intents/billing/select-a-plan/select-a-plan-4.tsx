'use client'

import { ArrowRightIcon, UsersIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

type Tier = {
  name: string
  maxSeats: number
  perSeat: number
  note: string
}

const tiers: Tier[] = [
  { name: 'Starter', maxSeats: 3, perSeat: 0, note: 'Free for small teams' },
  { name: 'Pro', maxSeats: 20, perSeat: 12, note: 'Best value as you grow' },
  { name: 'Business', maxSeats: 50, perSeat: 10, note: 'Volume rate per seat' },
  { name: 'Enterprise', maxSeats: 200, perSeat: 8, note: 'Custom contract' },
]

function tierFor(seats: number) {
  return tiers.find((t) => seats <= t.maxSeats) ?? tiers[tiers.length - 1]
}

export function SelectAPlan4() {
  const [seats, setSeats] = useState(8)
  const tier = tierFor(seats)
  const total = tier.perSeat * seats

  return (
    <Card size="sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <UsersIcon className="text-muted-foreground size-4" />
          <span className="text-sm font-semibold">How many seats?</span>
        </div>
        <span className="text-muted-foreground text-xs">
          Drag to size your team and we pick the plan that fits.
        </span>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold tracking-tight">{seats}</span>
          <span className="text-muted-foreground text-xs">
            {seats === 1 ? 'seat' : 'seats'}
          </span>
        </div>

        <Slider
          value={[seats]}
          min={1}
          max={120}
          step={1}
          onValueChange={(value) => setSeats(value[0])}
          aria-label="Number of seats"
        />

        <div className="bg-muted/50 flex items-center justify-between rounded-lg border p-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{tier.name}</span>
            <span className="text-muted-foreground text-[11px]">
              {tier.note}
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold tracking-tight">
              {tier.perSeat === 0 ? '$0' : `$${total}`}
            </span>
            <span className="text-muted-foreground text-xs">/mo</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {tiers.map((t) => (
            <span
              key={t.name}
              className={cn(
                'h-1 flex-1 rounded-full',
                t.name === tier.name ? 'bg-primary' : 'bg-muted',
              )}
            />
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button size="sm" className="w-full">
          Choose {tier.name}
          <ArrowRightIcon className="size-3.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
