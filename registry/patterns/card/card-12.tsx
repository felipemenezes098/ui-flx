'use client'

import { useState } from 'react'
import { CheckIcon, RocketIcon, ZapIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For side projects',
    icon: ZapIcon,
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'For production apps',
    icon: RocketIcon,
  },
]

export function Card12() {
  const [selected, setSelected] = useState('scale')

  return (
    <div className="grid w-full max-w-md gap-3 sm:grid-cols-2">
      {plans.map((plan) => {
        const isSelected = selected === plan.id
        return (
          <Card
            key={plan.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelected(plan.id)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setSelected(plan.id)
              }
            }}
            className={cn(
              'hover:border-primary/50 cursor-pointer transition-colors outline-none',
              isSelected && 'border-primary ring-primary ring-1',
            )}
          >
            <CardContent className="flex items-start gap-3">
              <plan.icon className="text-muted-foreground mt-0.5 size-5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">{plan.name}</span>
                <span className="text-muted-foreground text-sm">
                  {plan.description}
                </span>
              </div>
              <span
                className={cn(
                  'border-input ml-auto flex size-5 shrink-0 items-center justify-center rounded-full border',
                  isSelected &&
                    'bg-primary border-primary text-primary-foreground',
                )}
              >
                {isSelected && <CheckIcon className="size-3" />}
              </span>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
