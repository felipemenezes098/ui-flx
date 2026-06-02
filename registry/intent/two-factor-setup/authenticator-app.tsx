'use client'

import { useState } from 'react'
import { ShieldCheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

export function AuthenticatorAppDecision() {
  const [code, setCode] = useState('')

  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <ShieldCheckIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Set up authenticator</span>
        <span className="text-muted-foreground text-xs">
          Scan the QR code with your authenticator app, then enter the 6-digit
          code it shows.
        </span>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="border-border grid size-28 grid-cols-7 grid-rows-7 gap-px rounded-md border p-2">
          {Array.from({ length: 49 }).map((_, i) => (
            <span
              key={i}
              className={
                (i * 7 + 3) % 5 < 2 || i % 3 === 0
                  ? 'bg-foreground rounded-[1px]'
                  : 'bg-transparent'
              }
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <InputOTP maxLength={6} value={code} onChange={setCode}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button className="mt-5 w-full" disabled={code.length < 6}>
        Verify & enable
      </Button>
    </div>
  )
}
