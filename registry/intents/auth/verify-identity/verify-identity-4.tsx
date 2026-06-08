import { Fingerprint, KeyRound, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function VerifyIdentity4() {
  return (
    <Card size="sm">
      <CardHeader className="justify-items-center text-center">
        <div className="from-primary/15 to-primary/5 ring-primary/10 mb-2 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ring-1">
          <Fingerprint className="text-primary size-7" />
        </div>
        <CardTitle>Verify with biometrics</CardTitle>
        <p className="text-muted-foreground text-xs text-balance">
          Use Face ID, Touch ID, or your security key to authorize this action.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <Button className="w-full gap-2">
          <Fingerprint className="size-4" />
          Verify now
        </Button>
        <Button variant="ghost" className="w-full gap-2 text-xs">
          <KeyRound className="size-3.5" />
          Use a code instead
        </Button>
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
