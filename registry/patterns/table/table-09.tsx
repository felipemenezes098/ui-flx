import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table'

const details = [
  { label: 'Full name', value: 'Olivia Martin' },
  { label: 'Email', value: 'olivia@example.com' },
  { label: 'Role', value: 'Owner' },
  { label: 'Team', value: 'Platform' },
  { label: 'Joined', value: 'Jan 12, 2025' },
]

export function Table09() {
  return (
    <div className="w-full max-w-sm">
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableBody>
            {details.map((detail) => (
              <TableRow key={detail.label}>
                <TableHead
                  scope="row"
                  className="bg-muted/50 text-muted-foreground w-32 pt-2 align-top font-medium"
                >
                  {detail.label}
                </TableHead>
                <TableCell className="font-medium">{detail.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
