import { LockKeyholeIcon } from 'lucide-react'

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

export function ResetPassword3() {
  return (
    <Card size="sm">
      <CardHeader>
        <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
          <LockKeyholeIcon className="text-primary size-5" />
        </div>
        <CardTitle>Verify it&apos;s you</CardTitle>
        <p className="text-muted-foreground text-xs">
          Answer your security questions to recover access without email.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="sq-1" className="text-xs">
            What city were you born in?
          </Label>
          <Input id="sq-1" type="text" autoComplete="off" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="sq-2" className="text-xs">
            What was your first pet&apos;s name?
          </Label>
          <Input id="sq-2" type="text" autoComplete="off" />
        </div>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-5">
        <Button className="w-full">Verify answers</Button>
        <p className="text-muted-foreground/80 text-center text-[11px]">
          Can&apos;t remember? Contact support to recover your account.
        </p>
      </CardFooter>
    </Card>
  )
}
