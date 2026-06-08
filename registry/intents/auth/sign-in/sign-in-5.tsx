'use client'

import { ArrowLeft, Smartphone } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

export function SignIn5() {
  const [step, setStep] = useState<'phone' | 'code'>('phone')
  const [phone, setPhone] = useState('(555) 012-3456')
  const [code, setCode] = useState('')

  return (
    <Card size="sm">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <Smartphone className="text-primary size-5" />
        </div>
        <CardTitle>
          {step === 'phone' ? 'Sign in with phone' : 'Enter the code'}
        </CardTitle>
        <p className="text-muted-foreground text-xs">
          {step === 'phone' ? (
            "We'll text you a 6-digit code to verify your number."
          ) : (
            <>
              Sent to <span className="text-foreground">+1 {phone}</span>
            </>
          )}
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {step === 'phone' ? (
          <>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="otp-phone" className="text-xs">
                Phone number
              </Label>
              <InputGroup>
                <InputGroupAddon className="text-muted-foreground text-sm">
                  +1
                </InputGroupAddon>
                <InputGroupInput
                  id="otp-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                />
              </InputGroup>
            </div>
            <Button className="w-full" onClick={() => setStep('code')}>
              Send code
            </Button>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={code} onChange={setCode}>
                <InputOTPGroup>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button className="w-full">Verify &amp; sign in</Button>
            <div className="flex items-center justify-between text-[11px]">
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                <ArrowLeft className="size-3" />
                Change number
              </button>
              <span className="text-muted-foreground/80">Resend in 0:30</span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
