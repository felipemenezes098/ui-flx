import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const files = [
  { name: 'report-q3.pdf', size: '2.4 MB', modified: '2 hours ago' },
  { name: 'design-system.fig', size: '18.1 MB', modified: 'Yesterday' },
  { name: 'budget.xlsx', size: '640 KB', modified: '3 days ago' },
  { name: 'roadmap.md', size: '12 KB', modified: 'Last week' },
]

export function Table03() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow className="border-0 hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="text-right">Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr]:border-0">
          {files.map((file) => (
            <TableRow key={file.name}>
              <TableCell className="font-medium">{file.name}</TableCell>
              <TableCell className="text-muted-foreground tabular-nums">
                {file.size}
              </TableCell>
              <TableCell className="text-muted-foreground text-right">
                {file.modified}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
