'use client'

import { useState } from 'react'
import { Bell, CreditCard, ShieldCheck, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

type Toggle = { id: string; label: string; enabled: boolean }

type Group = {
  id: string
  title: string
  icon: typeof Bell
  toggles: Toggle[]
}

const GROUPS: Group[] = [
  {
    id: 'security',
    title: 'Security',
    icon: ShieldCheck,
    toggles: [
      { id: 'sec-signin', label: 'New sign-in alerts', enabled: true },
      { id: 'sec-password', label: 'Password changes', enabled: true },
    ],
  },
  {
    id: 'social',
    title: 'Social',
    icon: Users,
    toggles: [
      { id: 'soc-mentions', label: 'Mentions and replies', enabled: true },
      { id: 'soc-follows', label: 'New followers', enabled: false },
    ],
  },
  {
    id: 'billing',
    title: 'Billing',
    icon: CreditCard,
    toggles: [
      { id: 'bil-invoices', label: 'Invoices and receipts', enabled: true },
      { id: 'bil-failures', label: 'Failed payments', enabled: true },
    ],
  },
]

export function Notifications2() {
  const [state, setState] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      GROUPS.flatMap((group) =>
        group.toggles.map((toggle) => [toggle.id, toggle.enabled]),
      ),
    ),
  )

  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {GROUPS.map((group) => {
          const Icon = group.icon
          return (
            <div key={group.id} className="flex flex-col gap-3">
              <div className="text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-wide uppercase">
                <Icon className="size-4" />
                {group.title}
              </div>
              {group.toggles.map((toggle, index) => (
                <div key={toggle.id} className="flex flex-col gap-3">
                  {index > 0 && <Separator />}
                  <div className="flex items-center justify-between">
                    <Label htmlFor={toggle.id} className="font-normal">
                      {toggle.label}
                    </Label>
                    <Switch
                      id={toggle.id}
                      checked={state[toggle.id]}
                      onCheckedChange={(v) =>
                        setState((prev) => ({ ...prev, [toggle.id]: v }))
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
