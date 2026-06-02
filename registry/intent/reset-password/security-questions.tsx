import { LockKeyholeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SecurityQuestionsDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="bg-primary/10 mb-1 flex size-10 items-center justify-center rounded-full">
        <LockKeyholeIcon className="text-primary size-5" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-base font-semibold">Verify it&apos;s you</span>
        <span className="text-muted-foreground text-xs">
          Answer your security questions to recover access without email.
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-4">
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

        <Button className="w-full">Verify answers</Button>
      </div>

      <p className="text-muted-foreground/80 mt-5 text-center text-[11px]">
        Can&apos;t remember? Contact support to recover your account.
      </p>
    </div>
  )
}
