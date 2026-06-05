import { MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function MagicLinkDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <MailIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Sign in with email</span>
        <span className="text-muted-foreground text-xs">
          We&apos;ll email you a secure link, no password to remember.
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <Label htmlFor="ml-email" className="text-xs">
          Email
        </Label>
        <Input
          id="ml-email"
          type="email"
          placeholder="you@acme.com"
          autoComplete="email"
        />
      </div>

      <Button className="mt-4 w-full">Send magic link</Button>

      <p className="text-muted-foreground/80 mt-4 text-center text-[11px]">
        The link expires in 10 minutes.
      </p>
    </div>
  )
}
