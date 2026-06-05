import { CopyIcon, DownloadIcon, KeyRoundIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const CODES = [
  '4f2a-9c1d',
  '7b3e-0a8f',
  '1d6c-5e2b',
  '9a4f-3c7d',
  '2e8b-6f1a',
  '5c0d-8b3e',
  '3f7a-1d9c',
  '8b2e-4a6f',
]

export function BackupCodesDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <KeyRoundIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Save backup codes</span>
        <span className="text-muted-foreground text-xs">
          Use one of these if you lose your device. Each code works once. Store
          them somewhere safe.
        </span>
      </div>

      <div className="bg-muted/50 mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-lg border p-3 font-mono text-xs">
        {CODES.map((code) => (
          <span key={code} className="text-foreground/80">
            {code}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant="outline" className="flex-1">
          <CopyIcon />
          Copy
        </Button>
        <Button variant="outline" className="flex-1">
          <DownloadIcon />
          Download
        </Button>
      </div>
    </div>
  )
}
