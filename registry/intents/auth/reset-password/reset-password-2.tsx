'use client'

import { useState } from 'react'
import { ShieldCheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

export function ResetPassword2() {
  const [code, setCode] = useState('')

  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <ShieldCheckIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Enter your code</span>
        <span className="text-muted-foreground text-xs">
          We sent a 6-digit code to{' '}
          <span className="text-foreground font-medium">j•••@acme.com</span>.
          Enter it below to continue.
        </span>
      </div>

      <div className="mt-5 flex justify-center">
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
        Verify code
      </Button>

      <p className="text-muted-foreground mt-4 text-center text-[11px]">
        Didn&apos;t get it?{' '}
        <a href="#" className="text-foreground font-medium hover:underline">
          Resend code
        </a>{' '}
        · expires in 5:00
      </p>
    </div>
  )
}
