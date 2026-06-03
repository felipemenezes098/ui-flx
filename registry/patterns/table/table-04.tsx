import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const orders = [
  {
    id: '#3210',
    customer: 'Liam Johnson',
    date: 'Jun 23, 2026',
    total: '$250.00',
  },
  {
    id: '#3209',
    customer: 'Olivia Smith',
    date: 'Jun 22, 2026',
    total: '$150.00',
  },
  {
    id: '#3208',
    customer: 'Noah Williams',
    date: 'Jun 21, 2026',
    total: '$350.00',
  },
  {
    id: '#3207',
    customer: 'Emma Brown',
    date: 'Jun 20, 2026',
    total: '$450.00',
  },
  {
    id: '#3206',
    customer: 'James Davis',
    date: 'Jun 19, 2026',
    total: '$120.00',
  },
]

export function Table04() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:nth-child(even)]:bg-muted/50 [&_tr]:border-0">
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell className="text-muted-foreground">
                {order.date}
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {order.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
