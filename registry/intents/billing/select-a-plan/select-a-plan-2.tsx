import { CheckIcon, MinusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const tiers = ['Starter', 'Pro', 'Team'] as const

const rows: { label: string; values: (boolean | string)[] }[] = [
  { label: 'Projects', values: ['3', 'Unlimited', 'Unlimited'] },
  { label: 'Storage', values: ['1 GB', '100 GB', '1 TB'] },
  { label: 'Advanced analytics', values: [false, true, true] },
  { label: 'Priority support', values: [false, true, true] },
  { label: 'SSO & SAML', values: [false, false, true] },
  { label: 'Audit logs', values: [false, false, true] },
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'string')
    return <span className="text-foreground text-xs">{value}</span>
  return value ? (
    <CheckIcon className="text-primary mx-auto size-4" />
  ) : (
    <MinusIcon className="text-muted-foreground/40 mx-auto size-4" />
  )
}

export function SelectAPlan2() {
  return (
    <div className="bg-card w-full max-w-2xl overflow-hidden rounded-xl border shadow-sm">
      <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] border-b">
        <div className="p-4 text-sm font-semibold">Compare plans</div>
        {tiers.map((tier, i) => (
          <div
            key={tier}
            className={cn(
              'flex flex-col gap-0.5 p-4 text-center',
              i === 1 && 'bg-primary/5',
            )}
          >
            <span className="text-sm font-semibold">{tier}</span>
            <span className="text-muted-foreground text-xs">
              {['$0', '$29', '$99'][i]}/mo
            </span>
          </div>
        ))}
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[1.4fr_repeat(3,1fr)] border-b last:border-b-0"
        >
          <div className="text-muted-foreground p-3 px-4 text-xs">
            {row.label}
          </div>
          {row.values.map((value, i) => (
            <div
              key={i}
              className={cn(
                'flex items-center justify-center p-3',
                i === 1 && 'bg-primary/5',
              )}
            >
              <Cell value={value} />
            </div>
          ))}
        </div>
      ))}

      <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] border-t">
        <div className="p-3" />
        {tiers.map((tier, i) => (
          <div
            key={tier}
            className={cn('p-3', i === 1 && 'bg-primary/5')}
          >
            <Button
              size="sm"
              variant={i === 1 ? 'default' : 'outline'}
              className="w-full text-xs"
            >
              Choose
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
