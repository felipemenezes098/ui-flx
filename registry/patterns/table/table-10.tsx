import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const rows = Array.from({ length: 16 }, (_, index) => ({
  id: `EMP-${(index + 1).toString().padStart(3, '0')}`,
  name: [
    'Olivia Martin',
    'Jackson Lee',
    'Isabella Nguyen',
    'William Kim',
    'Sofia Davis',
    'Liam Johnson',
    'Emma Brown',
    'Noah Williams',
  ][index % 8],
  department: ['Design', 'Engineering', 'Sales', 'Support'][index % 4],
  salary: `$${(80 + index * 3).toString()},000`,
}))

export function Table10() {
  return (
    <div className="w-full max-w-xl">
      <div className="overflow-hidden rounded-lg border **:data-[slot=table-container]:max-h-72">
        <Table>
          <TableHeader className="bg-background sticky top-0 z-10 [&_tr]:border-b [&_tr:hover]:bg-transparent">
            <TableRow>
              <TableHead className="w-24">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="text-right">Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {row.department}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {row.salary}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
