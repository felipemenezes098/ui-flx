import { ShieldAlert } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function VerifyIdentity1() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <ShieldAlert className="text-primary size-5" />
        </div>
        <CardTitle>Confirm it&apos;s you</CardTitle>
        <p className="text-muted-foreground text-xs">
          Re-enter your password to change billing details.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="bg-muted/50 flex items-center gap-2 rounded-lg border p-2.5">
          <div className="bg-primary/15 text-primary flex size-7 items-center justify-center rounded-full text-[11px] font-medium">
            AL
          </div>
          <span className="text-muted-foreground text-xs">ada@acme.com</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="vi-reauth-password" className="text-xs">
            Password
          </Label>
          <Input
            id="vi-reauth-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>

        <Button className="w-full">Confirm</Button>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground text-center text-[11px]"
        >
          Forgot your password?
        </a>
      </CardContent>
    </Card>
  )
}
