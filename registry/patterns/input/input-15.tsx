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
} from '@/components/ui/select'

const currencies = [
  { value: 'usd', symbol: '$', label: 'US Dollar' },
  { value: 'eur', symbol: '€', label: 'Euro' },
  { value: 'gbp', symbol: '£', label: 'British Pound' },
] as const

export function Input15() {
  const [currency, setCurrency] = useState<string>(currencies[0].value)
  const selected = currencies.find((item) => item.value === currency)

  return (
    <ButtonGroup className="max-w-sm">
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger>{selected?.symbol}</SelectTrigger>
          <SelectContent position="popper" sideOffset={4}>
            <SelectGroup>
              {currencies.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.symbol}{' '}
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
