import { KeyRoundIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ResetPassword1() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <KeyRoundIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Reset your password</span>
        <span className="text-muted-foreground text-xs">
          Enter your account email and we&apos;ll send you a link to choose a
          new password.
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <Label htmlFor="rp-email" className="text-xs">
          Email
        </Label>
        <Input
          id="rp-email"
          type="email"
          placeholder="you@acme.com"
          autoComplete="email"
        />
      </div>

      <Button className="mt-4 w-full">Send reset link</Button>

      <p className="text-muted-foreground mt-5 text-center text-xs">
        Remembered it?{' '}
        <a href="#" className="text-foreground font-medium hover:underline">
          Back to sign in
        </a>
      </p>
    </div>
  )
}
