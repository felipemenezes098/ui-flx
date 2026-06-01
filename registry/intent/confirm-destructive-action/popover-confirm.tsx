'use client'

import { FileTextIcon, Trash2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const files = [
  { name: 'Q4 Report.pdf', size: '2.4 MB' },
  { name: 'Budget 2025.xlsx', size: '840 KB' },
  { name: 'Design Assets.zip', size: '18.1 MB' },
]

export function PopoverConfirmDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border shadow-sm">
      <div className="border-b px-4 py-3">
        <span className="text-sm font-semibold">Attachments</span>
      </div>
      <div className="flex flex-col divide-y">
        {files.map((file) => (
          <div key={file.name} className="flex items-center gap-3 px-4 py-2.5">
            <FileTextIcon className="text-muted-foreground size-4 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm">{file.name}</p>
              <p className="text-muted-foreground text-xs">{file.size}</p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-muted-foreground hover:text-destructive shrink-0"
                >
                  <Trash2Icon className="size-3.5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56" side="left">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium">Remove file?</p>
                    <p className="text-muted-foreground mt-0.5 text-xs">
                      {file.name} will be detached from this record.
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                    <Button variant="destructive" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  )
}
