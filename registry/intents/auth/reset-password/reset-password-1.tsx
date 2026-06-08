import { KeyRoundIcon } from 'lucide-react'

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

export function ResetPassword1() {
  return (
    <Card size="sm">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <KeyRoundIcon className="text-primary size-5" />
        </div>
        <CardTitle>Reset your password</CardTitle>
        <p className="text-muted-foreground text-xs">
          Enter your account email and we&apos;ll send you a link to choose a
          new password.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-1.5">
        <Label htmlFor="rp-email" className="text-xs">
          Email
        </Label>
        <Input
          id="rp-email"
          type="email"
          placeholder="you@acme.com"
          autoComplete="email"
        />
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-5">
        <Button className="w-full">Send reset link</Button>
        <p className="text-muted-foreground text-center text-xs">
          Remembered it?{' '}
          <a href="#" className="text-foreground font-medium hover:underline">
            Back to sign in
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
