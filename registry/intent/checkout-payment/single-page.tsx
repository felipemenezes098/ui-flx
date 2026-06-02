import { CreditCardIcon, LockIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const ITEMS = [
  { name: 'Pro plan — annual', price: '$96.00' },
  { name: 'Extra seats × 2', price: '$24.00' },
]

export function SinglePageDecision() {
  return (
    <div className="bg-card w-full max-w-2xl rounded-xl border p-6 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-5">
        <div className="flex flex-col gap-4 sm:col-span-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="co-email" className="text-xs">
              Email
            </Label>
            <Input id="co-email" type="email" placeholder="you@acme.com" />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="co-card" className="text-xs">
              Card details
            </Label>
            <div className="relative">
              <CreditCardIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                id="co-card"
                inputMode="numeric"
                placeholder="1234 1234 1234 1234"
                className="pl-9"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="MM / YY" inputMode="numeric" />
              <Input placeholder="CVC" inputMode="numeric" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="co-name" className="text-xs">
              Name on card
            </Label>
            <Input id="co-name" placeholder="Jane Doe" />
          </div>
        </div>

        <div className="bg-muted/40 flex flex-col gap-3 rounded-lg border p-4 sm:col-span-2">
          <span className="text-sm font-semibold">Order summary</span>
          <div className="flex flex-col gap-2">
            {ITEMS.map((item) => (
              <div
                key={item.name}
                className="text-muted-foreground flex justify-between text-xs"
              >
                <span>{item.name}</span>
                <span className="text-foreground">{item.price}</span>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex justify-between text-sm font-semibold">
            <span>Total</span>
            <span>$120.00</span>
          </div>
        </div>
      </div>

      <Button className="mt-6 w-full">
        <LockIcon />
        Pay $120.00
      </Button>
      <p className="text-muted-foreground/70 mt-3 text-center text-[11px]">
        Everything on one screen — no steps, fewest clicks to buy.
      </p>
    </div>
  )
}
