'use client'

import { useState } from 'react'
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const STEPS = ['Shipping', 'Payment', 'Review']

export function MultiStepDecision() {
  const [step, setStep] = useState(0)
  const last = STEPS.length - 1

  return (
    <div className="bg-card w-full max-w-sm rounded-xl border p-6 shadow-sm">
      <div className="flex items-center">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <span
                className={cn(
                  'flex size-7 items-center justify-center rounded-full border text-xs font-medium',
                  i < step && 'bg-primary border-primary text-primary-foreground',
                  i === step && 'border-primary text-primary',
                  i > step && 'border-muted-foreground/30 text-muted-foreground',
                )}
              >
                {i < step ? <CheckIcon className="size-3.5" /> : i + 1}
              </span>
              <span
                className={cn(
                  'text-[10px]',
                  i === step ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            </div>
            {i < last && (
              <span
                className={cn(
                  'mx-1 mb-4 h-px flex-1',
                  i < step ? 'bg-primary' : 'bg-border',
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 min-h-32">
        {step === 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ms-addr" className="text-xs">
                Address
              </Label>
              <Input id="ms-addr" placeholder="123 Market St" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="City" />
              <Input placeholder="ZIP" inputMode="numeric" />
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ms-card" className="text-xs">
                Card number
              </Label>
              <Input
                id="ms-card"
                inputMode="numeric"
                placeholder="1234 1234 1234 1234"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="MM / YY" inputMode="numeric" />
              <Input placeholder="CVC" inputMode="numeric" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="bg-muted/40 flex flex-col gap-2 rounded-lg border p-4 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ship to</span>
              <span>123 Market St</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pay with</span>
              <span>•••• 4242</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$120.00</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          <ChevronLeftIcon />
          Back
        </Button>
        <Button
          className="flex-1"
          onClick={() => setStep((s) => Math.min(last, s + 1))}
        >
          {step === last ? 'Place order' : 'Continue'}
          {step !== last && <ChevronRightIcon />}
        </Button>
      </div>
    </div>
  )
}
