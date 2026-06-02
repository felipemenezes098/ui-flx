import { ArrowRightIcon, CheckIcon, ZapIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const unlocks = ['Unlimited projects', '100 GB storage', 'Advanced analytics']

export function UpgradePanelDecision() {
  const used = 3
  const limit = 3
  const pct = Math.min(100, (used / limit) * 100)

  return (
    <div className="bg-card w-full min-w-64 rounded-xl border p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Starter plan</span>
        <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[11px] font-medium">
          Current
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Projects</span>
          <span className="text-foreground font-medium">
            {used} / {limit}
          </span>
        </div>
        <div className="bg-muted h-1.5 overflow-hidden rounded-full">
          <div
            className="bg-foreground h-full rounded-full"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-muted-foreground/80 text-[11px]">
          You&apos;ve hit your project limit.
        </span>
      </div>

      <Separator className="my-4" />

      <div className="flex items-center gap-2">
        <span className="bg-primary/10 flex size-7 items-center justify-center rounded-full">
          <ZapIcon className="text-primary size-3.5" />
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Upgrade to Pro</span>
          <span className="text-muted-foreground text-xs">$29/mo</span>
        </div>
      </div>

      <ul className="mt-3 flex flex-col gap-1.5">
        {unlocks.map((item) => (
          <li
            key={item}
            className="text-muted-foreground flex items-center gap-2 text-xs"
          >
            <CheckIcon className="text-primary size-3.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <Button size="sm" className="mt-4 w-full">
        Upgrade now
        <ArrowRightIcon className="size-3.5" />
      </Button>
    </div>
  )
}
