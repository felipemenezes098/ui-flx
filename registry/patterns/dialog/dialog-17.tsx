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
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Dialog17() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Create event</Button>} />
      <DialogContent className="flex flex-col gap-0 overflow-hidden p-0 sm:max-w-md">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Create event</DialogTitle>
          <DialogDescription>
            Header scrolls away; footer stays pinned while you fill the form.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[min(50vh,16rem)] overflow-y-auto px-6 pb-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="dialog-17-title">Title</FieldLabel>
              <Input id="dialog-17-title" placeholder="Team sync" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-17-date">Date</FieldLabel>
              <Input id="dialog-17-date" type="date" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-17-start">Start time</FieldLabel>
              <Input id="dialog-17-start" type="time" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-17-end">End time</FieldLabel>
              <Input id="dialog-17-end" type="time" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-17-location">Location</FieldLabel>
              <Input id="dialog-17-location" placeholder="Conference room A" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-17-desc">Description</FieldLabel>
              <Textarea
                id="dialog-17-desc"
                placeholder="Agenda, prep materials, or links..."
                rows={3}
              />
            </Field>
          </FieldGroup>
        </div>
        <DialogFooter className="bg-muted/30 border-t px-6 py-4">
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Create event</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
