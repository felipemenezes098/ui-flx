import { SmartphoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SmsCodeDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <SmartphoneIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Verify by SMS</span>
        <span className="text-muted-foreground text-xs">
          We&apos;ll text a code to your phone each time you sign in. Add the
          number to protect.
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <Label htmlFor="tf-phone" className="text-xs">
          Phone number
        </Label>
        <Input
          id="tf-phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          autoComplete="tel"
        />
      </div>

      <Button className="mt-4 w-full">Send code</Button>

      <p className="text-muted-foreground/80 mt-4 text-center text-[11px]">
        Carrier rates may apply. SMS is less secure than an app.
      </p>
    </div>
  )
}
