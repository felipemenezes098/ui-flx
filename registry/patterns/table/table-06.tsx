import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const logs = [
  {
    time: '12:04:22',
    level: 'INFO',
    service: 'api',
    message: 'Request handled',
  },
  {
    time: '12:04:23',
    level: 'WARN',
    service: 'auth',
    message: 'Token near expiry',
  },
  { time: '12:04:25', level: 'INFO', service: 'worker', message: 'Job queued' },
  {
    time: '12:04:27',
    level: 'ERROR',
    service: 'db',
    message: 'Connection reset',
  },
  { time: '12:04:28', level: 'INFO', service: 'api', message: 'Cache warmed' },
  { time: '12:04:30', level: 'INFO', service: 'worker', message: 'Job done' },
]

export function Table06() {
  return (
    <div className="w-full max-w-xl">
      <Table className="text-xs [&_td]:py-1 [&_th]:h-7">
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Time</TableHead>
            <TableHead className="w-16">Level</TableHead>
            <TableHead className="w-20">Service</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log, index) => (
            <TableRow key={index}>
              <TableCell className="text-muted-foreground font-mono tabular-nums">
                {log.time}
              </TableCell>
              <TableCell className="font-mono font-medium">
                {log.level}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {log.service}
              </TableCell>
              <TableCell>{log.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
