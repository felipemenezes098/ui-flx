'use client'

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

export function Dialog21() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">Nested dialog</Button>}
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Open a nested dialog for a related action without closing this one.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="dialog-21-name">Display name</FieldLabel>
            <Input id="dialog-21-name" defaultValue="Felipe Menezes" />
          </Field>
        </FieldGroup>
        <DialogFooter className="sm:justify-between">
          <Dialog>
            <DialogTrigger
              render={
                <Button type="button" variant="outline">
                  Change avatar
                </Button>
              }
            />
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Change avatar</DialogTitle>
                <DialogDescription>
                  Nested dialog stacks above the parent. Upload a new image or
                  remove the current one.
                </DialogDescription>
              </DialogHeader>
              <div className="bg-muted flex h-24 items-center justify-center rounded-lg border border-dashed">
                <span className="text-muted-foreground text-sm">
                  Drop image here
                </span>
              </div>
              <DialogFooter>
                <DialogClose
                  render={
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  }
                />
                <Button type="button">Save avatar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="flex gap-2">
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Close
                </Button>
              }
            />
            <Button type="button">Save profile</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
