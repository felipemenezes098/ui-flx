'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Plan = { id: string; name: string; price: number; note: string }

const PLANS: Plan[] = [
  { id: 'starter', name: 'Starter', price: 9, note: '3 projects' },
  { id: 'pro', name: 'Pro', price: 29, note: 'Unlimited projects' },
  { id: 'scale', name: 'Scale', price: 99, note: 'SSO and audit logs' },
]

const CURRENT = 'pro'

export function ManageSubscription2() {
  const [selected, setSelected] = useState('scale')
  const current = PLANS.find((p) => p.id === CURRENT)!
  const target = PLANS.find((p) => p.id === selected)!
  const delta = target.price - current.price
  const changed = selected !== CURRENT

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change plan</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {PLANS.map((plan) => {
          const active = plan.id === selected
          const isCurrent = plan.id === CURRENT
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelected(plan.id)}
              className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                active ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
              }`}
            >
              <div
                className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                  active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : ''
                }`}
              >
                {active && <Check className="size-3" />}
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium">
                  {plan.name}
                  {isCurrent && (
                    <span className="text-muted-foreground"> (current)</span>
                  )}
                </span>
                <span className="text-muted-foreground text-xs">
                  {plan.note}
                </span>
              </div>
              <span className="text-sm font-medium">${plan.price}/mo</span>
            </button>
          )
        })}

        {changed && (
          <p className="bg-muted/50 rounded-lg border p-3 text-xs">
            {delta > 0
              ? `You will be charged a prorated $${delta} now, then $${target.price}/mo.`
              : `Your plan changes at the next renewal. New price $${target.price}/mo.`}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={!changed}>
          Confirm change
          <ArrowRight className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
