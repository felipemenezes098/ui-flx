import { Fingerprint, KeyRound, ScanFace, ShieldCheck } from 'lucide-react'

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

export function SignIn4() {
  return (
    <Card size="sm">
      <CardHeader className="justify-items-center text-center">
        <div className="from-primary/15 to-primary/5 ring-primary/10 mb-2 flex size-14 items-center justify-center rounded-2xl bg-linear-to-br ring-1">
          <Fingerprint className="text-primary size-7" />
        </div>
        <CardTitle>Sign in with a passkey</CardTitle>
        <p className="text-muted-foreground text-xs text-balance">
          Use Face ID, Touch ID, or a security key. Nothing to remember.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pk-email" className="text-xs">
            Email
          </Label>
          <Input
            id="pk-email"
            type="email"
            placeholder="you@acme.com"
            autoComplete="email webauthn"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button className="w-full gap-2">
            <ScanFace className="size-4" />
            Continue with passkey
          </Button>
          <Button variant="ghost" className="w-full gap-2 text-xs">
            <KeyRound className="size-3.5" />
            Use password instead
          </Button>
        </div>
      </CardContent>

      <CardFooter className="justify-center">
        <p className="text-muted-foreground/80 flex items-center gap-1.5 text-[11px]">
          <ShieldCheck className="size-3.5" />
          Phishing-resistant. Your key never leaves this device.
        </p>
      </CardFooter>
    </Card>
  )
}
