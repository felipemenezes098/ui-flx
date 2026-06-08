import { CheckIcon, MinusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

const tiers = ['Starter', 'Pro', 'Team'] as const
const prices = ['$0', '$29', '$99'] as const

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
    <Card className="gap-0 overflow-hidden p-0">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-2/5 px-3 align-bottom text-sm font-semibold whitespace-normal">
              Compare plans
            </TableHead>
            {tiers.map((tier, i) => (
              <TableHead
                key={tier}
                className={cn(
                  'h-auto py-4 text-center',
                  i === 1 && 'bg-primary/5',
                )}
              >
                <span className="text-foreground text-sm font-semibold">
                  {tier}
                </span>
                <span className="text-muted-foreground block text-xs font-normal">
                  {prices[i]}/mo
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label} className="hover:bg-transparent">
              <TableCell className="text-muted-foreground px-3 text-xs whitespace-normal">
                {row.label}
              </TableCell>
              {row.values.map((value, i) => (
                <TableCell
                  key={i}
                  className={cn('text-center', i === 1 && 'bg-primary/5')}
                >
                  <Cell value={value} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell />
            {tiers.map((tier, i) => (
              <TableCell
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
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  )
}
