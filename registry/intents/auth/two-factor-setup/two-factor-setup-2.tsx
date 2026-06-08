import { SmartphoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function TwoFactorSetup2() {
  return (
    <Card size="sm">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <SmartphoneIcon className="text-primary size-5" />
        </div>
        <CardTitle>Verify by SMS</CardTitle>
        <p className="text-muted-foreground text-xs">
          We&apos;ll text a code to your phone each time you sign in. Add the
          number to protect.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-1.5">
        <Label htmlFor="tf-phone" className="text-xs">
          Phone number
        </Label>
        <Input
          id="tf-phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          autoComplete="tel"
        />
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-4">
        <Button className="w-full">Send code</Button>
        <p className="text-muted-foreground/80 text-center text-[11px]">
          Carrier rates may apply. SMS is less secure than an app.
        </p>
      </CardFooter>
    </Card>
  )
}
