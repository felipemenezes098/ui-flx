import { FingerprintIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function PasskeyDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <FingerprintIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Add a passkey</span>
        <span className="text-muted-foreground text-xs">
          Use Face ID, a fingerprint, or a security key. Nothing to type, and
          nothing phishable.
        </span>
      </div>

      <ul className="text-muted-foreground mt-4 flex flex-col gap-2 text-xs">
        <li className="flex items-center gap-2">
          <span className="bg-primary size-1.5 rounded-full" />
          Works across your synced devices
        </li>
        <li className="flex items-center gap-2">
          <span className="bg-primary size-1.5 rounded-full" />
          Resistant to phishing and credential theft
        </li>
      </ul>

      <Button className="mt-5 w-full">
        <FingerprintIcon />
        Create passkey
      </Button>

      <p className="text-muted-foreground/80 mt-4 text-center text-[11px]">
        Requires a device with biometrics or a hardware key.
      </p>
    </div>
  )
}
