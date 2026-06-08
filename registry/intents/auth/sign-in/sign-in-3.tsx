import { MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function SignIn3() {
  return (
    <Card>
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <MailIcon className="text-primary size-5" />
        </div>
        <CardTitle>Sign in with email</CardTitle>
        <CardDescription>
          We&apos;ll email you a secure link, no password to remember.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1.5">
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
      </CardContent>
    </Card>
  )
}
