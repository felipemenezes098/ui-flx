'use client'

import { useState } from 'react'
import { ShieldCheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

export function ResetPassword2() {
  const [code, setCode] = useState('')

  return (
    <Card size="sm">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <ShieldCheckIcon className="text-primary size-5" />
        </div>
        <CardTitle>Enter your code</CardTitle>
        <p className="text-muted-foreground text-xs">
          We sent a 6-digit code to{' '}
          <span className="text-foreground font-medium">j•••@acme.com</span>.
          Enter it below to continue.
        </p>
      </CardHeader>

      <CardContent className="flex justify-center">
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
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-4">
        <Button className="w-full" disabled={code.length < 6}>
          Verify code
        </Button>
        <p className="text-muted-foreground text-center text-[11px]">
          Didn&apos;t get it?{' '}
          <a href="#" className="text-foreground font-medium hover:underline">
            Resend code
          </a>{' '}
          · expires in 5:00
        </p>
      </CardFooter>
    </Card>
  )
}
