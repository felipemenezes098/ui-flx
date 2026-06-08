'use client'

import { ArrowRightIcon, CheckIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

type Segment = {
  id: string
  label: string
  plan: string
  blurb: string
  price: string
  cadence: string
  features: string[]
  cta: string
}

const segments: Segment[] = [
  {
    id: 'individual',
    label: 'Individual',
    plan: 'Personal',
    blurb: 'Everything one person needs to ship faster.',
    price: '$12',
    cadence: 'per month',
    features: ['Unlimited personal projects', '20 GB storage', 'Email support'],
    cta: 'Start personal',
  },
  {
    id: 'teams',
    label: 'Teams',
    plan: 'Team',
    blurb: 'Shared workspaces with roles and collaboration.',
    price: '$29',
    cadence: 'per seat / month',
    features: [
      'Unlimited shared projects',
      'Roles & permissions',
      'Priority support',
    ],
    cta: 'Start a team',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    plan: 'Enterprise',
    blurb: 'Security, control and support that scales.',
    price: 'Custom',
    cadence: 'volume pricing',
    features: ['SSO & SAML', 'Audit logs & SLA', 'Dedicated manager'],
    cta: 'Talk to sales',
  },
]

export function SelectAPlan3() {
  const [active, setActive] = useState('teams')
  const segment = segments.find((s) => s.id === active) ?? segments[1]

  return (
    <div className="flex flex-col items-center gap-5">
      <ToggleGroup
        type="single"
        value={active}
        onValueChange={(value) => value && setActive(value)}
        variant="outline"
        spacing={0}
        className="w-full"
      >
        {segments.map((s) => (
          <ToggleGroupItem key={s.id} value={s.id} className="flex-1 text-xs">
            {s.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Card size="sm" className="w-full">
        <CardHeader>
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold">{segment.plan}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold tracking-tight">
                {segment.price}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs leading-snug">
              {segment.blurb}
            </span>
          </div>
          <span className="text-muted-foreground/80 text-[11px]">
            {segment.cadence}
          </span>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {segment.features.map((feature) => (
              <li
                key={feature}
                className="text-muted-foreground flex items-center gap-2 text-xs"
              >
                <CheckIcon className="text-primary size-3.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button size="sm" className="w-full">
            {segment.cta}
            <ArrowRightIcon className="size-3.5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
