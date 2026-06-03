import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const usage = [
  { plan: 'Starter', seats: '1–5', storage: '10 GB', price: '$0' },
  { plan: 'Pro', seats: '6–20', storage: '100 GB', price: '$29' },
  { plan: 'Business', seats: '21–50', storage: '1 TB', price: '$99' },
  {
    plan: 'Enterprise',
    seats: 'Unlimited',
    storage: 'Custom',
    price: 'Contact',
  },
]

export function Table05() {
  return (
    <div className="w-full max-w-xl">
      <div className="overflow-hidden rounded-lg border">
        <Table className="[&_td]:border-r [&_td:last-child]:border-r-0 [&_th]:border-r [&_th:last-child]:border-r-0">
          <TableHeader>
            <TableRow>
              <TableHead>Plan</TableHead>
              <TableHead>Seats</TableHead>
              <TableHead>Storage</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usage.map((row) => (
              <TableRow key={row.plan}>
                <TableCell className="font-medium">{row.plan}</TableCell>
                <TableCell className="text-muted-foreground">
                  {row.seats}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {row.storage}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {row.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
