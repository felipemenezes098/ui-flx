'use client'

import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

type Plan = {
  name: string
  blurb: string
  monthly: number
  features: string[]
  featured?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    blurb: 'For side projects and trying things out.',
    monthly: 0,
    features: ['3 projects', 'Community support', '1 GB storage'],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    blurb: 'For professionals shipping real work.',
    monthly: 29,
    features: [
      'Unlimited projects',
      'Priority support',
      '100 GB storage',
      'Advanced analytics',
    ],
    featured: true,
    cta: 'Upgrade to Pro',
  },
  {
    name: 'Team',
    blurb: 'For organizations that need control.',
    monthly: 99,
    features: ['Everything in Pro', 'SSO & SAML', 'Audit logs', 'SLA'],
    cta: 'Contact sales',
  },
]

function price(monthly: number, yearly: boolean) {
  if (monthly === 0) return '$0'
  return yearly ? `$${Math.round(monthly * 0.8)}` : `$${monthly}`
}

export function SelectAPlan1() {
  const [yearly, setYearly] = useState(true)

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className={cn(!yearly && 'text-foreground font-medium')}>
          Monthly
        </span>
        <Switch
          checked={yearly}
          onCheckedChange={setYearly}
          aria-label="Toggle yearly billing"
        />
        <span className={cn(yearly && 'text-foreground font-medium')}>
          Yearly
        </span>
        <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
          Save 20%
        </span>
      </div>

      <div className="grid w-full gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            size="sm"
            className={cn(
              'relative overflow-visible p-5',
              plan.featured && 'border-primary ring-primary/20 ring-2',
            )}
          >
            {plan.featured && (
              <span className="bg-primary text-primary-foreground absolute -top-2.5 left-5 rounded-full px-2 py-0.5 text-[11px] font-medium">
                Most popular
              </span>
            )}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">{plan.name}</span>
              <span className="text-muted-foreground text-xs leading-snug">
                {plan.blurb}
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold tracking-tight">
                {price(plan.monthly, yearly)}
              </span>
              {plan.monthly > 0 && (
                <span className="text-muted-foreground text-xs">/mo</span>
              )}
            </div>
            <Button
              size="sm"
              variant={plan.featured ? 'default' : 'outline'}
              className="w-full"
            >
              {plan.cta}
            </Button>
            <ul className="flex flex-col gap-2">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-muted-foreground flex items-center gap-2 text-xs"
                >
                  <CheckIcon className="text-primary size-3.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
