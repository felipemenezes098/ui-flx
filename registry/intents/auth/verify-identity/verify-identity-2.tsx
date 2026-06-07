import { Mail } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Button } from '@/components/ui/button'

export function VerifyIdentity2() {
  return (
    <Card size="sm" className="w-full max-w-xs min-w-xs">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <Mail className="text-primary size-5" />
        </div>
        <CardTitle>Verify to continue</CardTitle>
        <p className="text-muted-foreground text-xs">
          We sent a 6-digit code to{' '}
          <span className="text-foreground">ada@acme.com</span>.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-center">
          <InputOTP maxLength={6} defaultValue="248">
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button className="w-full">Verify</Button>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-muted-foreground/80">Code expires in 4:58</span>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground"
          >
            Resend
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
