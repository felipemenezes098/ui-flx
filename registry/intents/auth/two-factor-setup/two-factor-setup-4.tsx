import { CopyIcon, DownloadIcon, KeyRoundIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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

export function TwoFactorSetup4() {
  return (
    <Card size="sm">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <KeyRoundIcon className="text-primary size-5" />
        </div>
        <CardTitle>Save backup codes</CardTitle>
        <p className="text-muted-foreground text-xs">
          Use one of these if you lose your device. Each code works once. Store
          them somewhere safe.
        </p>
      </CardHeader>

      <CardContent>
        <div className="bg-muted/50 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-lg border p-3 font-mono text-xs">
          {CODES.map((code) => (
            <span key={code} className="text-foreground/80">
              {code}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          <CopyIcon />
          Copy
        </Button>
        <Button variant="outline" className="flex-1">
          <DownloadIcon />
          Download
        </Button>
      </CardFooter>
    </Card>
  )
}
