import { FileSpreadsheetIcon, UploadCloudIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const parsed = [
  { email: 'sofia@acme.com', role: 'Admin' },
  { email: 'liam@acme.com', role: 'Member' },
  { email: 'ana@acme.com', role: 'Member' },
]

export function BulkCsvDecision() {
  return (
    <div className="bg-card flex w-full max-w-sm flex-col gap-4 rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Bulk import</span>
        <span className="text-muted-foreground text-xs">
          Upload a CSV to invite your whole team at once.
        </span>
      </div>
      <div className="border-input bg-muted/30 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-4 py-6 text-center">
        <UploadCloudIcon className="text-muted-foreground size-6" />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">Drop your CSV here</span>
          <span className="text-muted-foreground text-xs">or click to browse</span>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-md border px-3 py-2">
        <FileSpreadsheetIcon className="text-muted-foreground size-4" />
        <span className="flex-1 truncate text-sm">team-roster.csv</span>
        <Badge variant="secondary">15 rows</Badge>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        {parsed.map((row) => (
          <div key={row.email} className="flex items-center gap-2 text-sm">
            <span className="flex-1 truncate">{row.email}</span>
            <span className="text-muted-foreground text-xs">{row.role}</span>
          </div>
        ))}
        <span className="text-muted-foreground text-xs">+12 more</span>
      </div>
      <Button className="w-full">Import 15 people</Button>
    </div>
  )
}
