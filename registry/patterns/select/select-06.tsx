'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

export function Select06() {
  const [value, setValue] = useState('free')

  const items = [
    {
      value: 'free',
      label: 'Free',
      description: 'Up to 3 projects, 1 user',
    },
    {
      value: 'pro',
      label: 'Pro',
      description: 'Unlimited projects, 5 users',
    },
    {
      value: 'team',
      label: 'Team',
      description: 'Unlimited projects, 20 users',
    },
  ]

  return (
    <Select value={value} onValueChange={(value) => setValue(value ?? '')}>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="Select a plan">
          {value && items.find((item) => item.value === value)?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-muted-foreground text-xs font-normal">
                  {item.description}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
