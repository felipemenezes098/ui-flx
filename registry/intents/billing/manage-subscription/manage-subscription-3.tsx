'use client'

import { useState } from 'react'
import { Gift } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const REASONS = [
  { value: 'cost', label: 'Too expensive' },
  { value: 'unused', label: 'Not using it enough' },
  { value: 'missing', label: 'Missing a feature' },
  { value: 'switching', label: 'Switching tools' },
]

export function ManageSubscription3() {
  const [step, setStep] = useState<'offer' | 'reason'>('offer')
  const [reason, setReason] = useState('')

  if (step === 'offer') {
    return (
      <Card>
        <CardHeader>
          <div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-full">
            <Gift className="size-5" />
          </div>
          <CardTitle>Stay for 50% off</CardTitle>
          <CardDescription>
            Before you go, keep Pro at half price for the next three months. No
            commitment, cancel any time.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full">Apply discount and stay</Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => setStep('reason')}
          >
            Continue to cancel
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Why are you cancelling?</CardTitle>
        <CardDescription>
          Your plan stays active until July 1, 2026.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Label className="text-xs">Reason</Label>
        <Select value={reason} onValueChange={setReason}>
          <SelectTrigger>
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {REASONS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button
          variant="ghost"
          className="flex-1"
          onClick={() => setStep('offer')}
        >
          Back
        </Button>
        <Button variant="destructive" className="flex-1" disabled={!reason}>
          Cancel subscription
        </Button>
      </CardFooter>
    </Card>
  )
}
