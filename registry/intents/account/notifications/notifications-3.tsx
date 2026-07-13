'use client'

import { useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Item = { id: string; label: string; hint: string; value: string }

const FREQUENCIES = [
  { value: 'off', label: 'Off' },
  { value: 'realtime', label: 'Real time' },
  { value: 'daily', label: 'Daily digest' },
  { value: 'weekly', label: 'Weekly digest' },
]

const INITIAL: Item[] = [
  {
    id: 'activity',
    label: 'Activity summary',
    hint: 'Comments, mentions, and reactions',
    value: 'daily',
  },
  {
    id: 'team',
    label: 'Team updates',
    hint: 'Members joining and role changes',
    value: 'weekly',
  },
  {
    id: 'product',
    label: 'Product news',
    hint: 'Features and announcements',
    value: 'weekly',
  },
  {
    id: 'tips',
    label: 'Tips and onboarding',
    hint: 'Suggestions to get more done',
    value: 'off',
  },
]

export function Notifications3() {
  const [items, setItems] = useState<Item[]>(INITIAL)

  const setValue = (id: string, value: string) =>
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item)),
    )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Email frequency</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-muted-foreground text-xs">{item.hint}</span>
            </div>
            <Select
              value={item.value}
              onValueChange={(v) => setValue(item.id, v ?? '')}
            >
              <SelectTrigger className="w-36 shrink-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FREQUENCIES.map((freq) => (
                    <SelectItem key={freq.value} value={freq.value}>
                      {freq.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
