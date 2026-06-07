'use client'

import { useState } from 'react'
import { CreditCard, Lock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Payment1() {
  const [number, setNumber] = useState('')

  const formatNumber = (raw: string) =>
    raw
      .replace(/\D/g, '')
      .slice(0, 16)
      .replace(/(.{4})/g, '$1 ')
      .trim()

  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle>Payment details</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-name">Name on card</Label>
          <Input id="cf-name" placeholder="Ada Lovelace" autoComplete="cc-name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-number">Card number</Label>
          <div className="relative">
            <CreditCard className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              id="cf-number"
              className="pl-9"
              inputMode="numeric"
              placeholder="4242 4242 4242 4242"
              value={number}
              onChange={(e) => setNumber(formatNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="cf-exp">Expiry</Label>
            <Input id="cf-exp" placeholder="MM / YY" inputMode="numeric" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="cf-cvc">CVC</Label>
            <Input id="cf-cvc" placeholder="123" inputMode="numeric" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full">Save card</Button>
        <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
          <Lock className="size-3" />
          Encrypted and processed securely.
        </p>
      </CardFooter>
    </Card>
  )
}
