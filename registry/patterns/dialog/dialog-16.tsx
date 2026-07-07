import { UsersIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function Dialog16() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Invite team</Button>} />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-full">
              <UsersIcon className="size-5" />
            </div>
            <div className="flex flex-col gap-2">
              <DialogTitle>Invite your team</DialogTitle>
              <DialogDescription>
                Add colleagues by email. They will join as editors on this
                workspace.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <Field>
          <FieldLabel htmlFor="dialog-16-email">Email address</FieldLabel>
          <Input
            id="dialog-16-email"
            type="email"
            placeholder="colleague@company.com"
          />
          <FieldDescription>
            Separate multiple addresses with commas.
          </FieldDescription>
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Send invites</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
