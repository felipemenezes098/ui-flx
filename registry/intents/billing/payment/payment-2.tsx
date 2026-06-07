'use client'

import { useState } from 'react'
import { Check, CreditCard, Plus, Trash2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

type Method = {
  id: string
  brand: string
  last4: string
  exp: string
}

const INITIAL: Method[] = [
  { id: 'visa', brand: 'Visa', last4: '4242', exp: '08 / 27' },
  { id: 'mc', brand: 'Mastercard', last4: '8210', exp: '11 / 26' },
  { id: 'amex', brand: 'Amex', last4: '0005', exp: '03 / 28' },
]

export function Payment2() {
  const [methods, setMethods] = useState<Method[]>(INITIAL)
  const [selected, setSelected] = useState('visa')

  const remove = (id: string) => {
    setMethods((prev) => {
      const next = prev.filter((m) => m.id !== id)
      if (id === selected && next.length > 0) setSelected(next[0].id)
      return next
    })
  }

  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle>Payment methods</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {methods.length === 0 ? (
          <Empty className="py-8">
            <EmptyMedia variant="icon">
              <CreditCard className="size-5" />
            </EmptyMedia>
            <EmptyTitle>No payment methods</EmptyTitle>
            <EmptyDescription>
              Add a card to start your subscription.
            </EmptyDescription>
          </Empty>
        ) : (
          methods.map((method) => {
            const active = method.id === selected
            return (
              <div
                key={method.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(method.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected(method.id)
                  }
                }}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                  active ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                }`}
              >
                <CreditCard className="text-muted-foreground size-5 shrink-0" />
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium">
                    {method.brand} ending in {method.last4}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Expires {method.exp}
                  </span>
                </div>
                {active && <Badge variant="secondary">Default</Badge>}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive size-8 shrink-0"
                  aria-label={`Remove ${method.brand} ending in ${method.last4}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    remove(method.id)
                  }}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            )
          })
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Plus className="size-4" />
          Add payment method
        </Button>
      </CardFooter>
    </Card>
  )
}
