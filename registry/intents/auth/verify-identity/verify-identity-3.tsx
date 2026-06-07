import { Loader2, Smartphone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function VerifyIdentity3() {
  return (
    <Card size="sm" className="w-full max-w-xs min-w-xs">
      <CardHeader className="justify-items-center text-center">
        <div className="border-primary/20 relative mb-2 flex size-16 items-center justify-center rounded-2xl border">
          <Smartphone className="text-primary size-7" />
          <span className="border-background bg-primary absolute -right-1 -bottom-1 flex size-5 items-center justify-center rounded-full border-2">
            <Loader2 className="text-primary-foreground size-3 animate-spin" />
          </span>
        </div>
        <CardTitle>Check your phone</CardTitle>
        <p className="text-muted-foreground text-xs text-balance">
          We sent an approval request to{' '}
          <span className="text-foreground">iPhone 15 Pro</span>. Tap{' '}
          <span className="text-foreground">Approve</span> to continue.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div className="bg-muted/50 flex items-center justify-center gap-2 rounded-lg border p-3">
          <span className="bg-primary size-1.5 animate-pulse rounded-full" />
          <span className="text-muted-foreground text-xs">
            Waiting for approval…
          </span>
        </div>
        <Button variant="outline" className="w-full">
          Resend request
        </Button>
      </CardContent>

      <CardFooter className="justify-center">
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground text-[11px]"
        >
          Verify another way
        </a>
      </CardFooter>
    </Card>
  )
}
