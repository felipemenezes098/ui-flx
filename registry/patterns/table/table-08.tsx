import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const transactions = [
  {
    id: 'TX-9921',
    customer: 'Acme Inc.',
    status: 'Completed',
    amount: '$1,200.00',
  },
  {
    id: 'TX-9920',
    customer: 'Globex',
    status: 'Processing',
    amount: '$640.00',
  },
  {
    id: 'TX-9919',
    customer: 'Soylent',
    status: 'Completed',
    amount: '$320.00',
  },
  { id: 'TX-9918', customer: 'Initech', status: 'Failed', amount: '$980.00' },
]

const statusVariant: Record<
  string,
  'default' | 'secondary' | 'outline' | 'destructive'
> = {
  Completed: 'secondary',
  Processing: 'outline',
  Failed: 'destructive',
}

export function Table08() {
  return (
    <Card className="w-full max-w-xl pb-0">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Your most recent payments.</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="[&_th]:px-6">
              <TableHead>Reference</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="[&_td]:px-6">
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[transaction.status]}>
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
