import { CreditCardIcon, LockIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ExpressWalletDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold">Express checkout</span>
        <span className="text-muted-foreground text-xs">
          Pay in one tap — no forms, shipping and card pulled from your wallet.
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button className="flex h-10 items-center justify-center gap-1.5 rounded-md bg-black text-sm font-medium text-white">
          <span className="text-base"></span> Pay
        </button>
        <button className="flex h-10 items-center justify-center gap-1.5 rounded-md border bg-white text-sm font-medium text-black">
          <span className="font-semibold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          Pay
        </button>
        <button className="flex h-10 items-center justify-center gap-1 rounded-md bg-[#003087] text-sm font-bold text-white">
          <span className="text-[#009cde]">Pay</span>
          <span>Pal</span>
        </button>
      </div>

      <div className="my-4 flex items-center gap-2">
        <span className="bg-border h-px flex-1" />
        <span className="text-muted-foreground text-[11px]">
          or pay with card
        </span>
        <span className="bg-border h-px flex-1" />
      </div>

      <div className="relative">
        <CreditCardIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <Input
          inputMode="numeric"
          placeholder="Card number"
          className="pl-9"
        />
      </div>
      <Button variant="outline" className="mt-2 w-full">
        <LockIcon />
        Pay $120.00
      </Button>
    </div>
  )
}
