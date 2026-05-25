'use client'

import { useState } from 'react'
import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const currencies = [
  { value: '$', label: 'US Dollar' },
  { value: '€', label: 'Euro' },
  { value: '£', label: 'British Pound' },
] as const

export function Input15() {
  const [currency, setCurrency] = useState<string>(currencies[0].value)

  return (
    <ButtonGroup className="max-w-sm">
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger>
            <SelectValue>{currency}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currencies.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.value}{' '}
                  <span className="text-muted-foreground">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="10.00" inputMode="decimal" />
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Submit amount">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
