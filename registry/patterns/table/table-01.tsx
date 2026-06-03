import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  { id: 'INV-001', method: 'Credit Card', status: 'Paid', amount: '$1,200.00' },
  { id: 'INV-002', method: 'PayPal', status: 'Pending', amount: '$640.00' },
  { id: 'INV-003', method: 'Bank Transfer', status: 'Paid', amount: '$320.00' },
  {
    id: 'INV-004',
    method: 'Credit Card',
    status: 'Overdue',
    amount: '$980.00',
  },
]

export function Table01() {
  return (
    <div className="w-full max-w-2xl">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-28">Invoice</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-muted-foreground">
                {invoice.status}
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {invoice.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right tabular-nums">$3,140.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
