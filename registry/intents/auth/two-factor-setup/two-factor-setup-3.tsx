import { FingerprintIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TwoFactorSetup3() {
  return (
    <Card size="sm">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <FingerprintIcon className="text-primary size-5" />
        </div>
        <CardTitle>Add a passkey</CardTitle>
        <p className="text-muted-foreground text-xs">
          Use Face ID, a fingerprint, or a security key. Nothing to type, and
          nothing phishable.
        </p>
      </CardHeader>

      <CardContent>
        <ul className="text-muted-foreground flex flex-col gap-2 text-xs">
          <li className="flex items-center gap-2">
            <span className="bg-primary size-1.5 rounded-full" />
            Works across your synced devices
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-primary size-1.5 rounded-full" />
            Resistant to phishing and credential theft
          </li>
        </ul>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-4">
        <Button className="w-full">
          <FingerprintIcon />
          Create passkey
        </Button>
        <p className="text-muted-foreground/80 text-center text-[11px]">
          Requires a device with biometrics or a hardware key.
        </p>
      </CardFooter>
    </Card>
  )
}
