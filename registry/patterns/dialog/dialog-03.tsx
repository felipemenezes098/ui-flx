import { Trash2Icon } from 'lucide-react'

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

export function Dialog03() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="bg-destructive/10 text-destructive flex size-10 items-center justify-center rounded-full">
              <Trash2Icon className="size-5" />
            </div>
            <div className="flex flex-col gap-2">
              <DialogTitle>Delete account</DialogTitle>
              <DialogDescription>
                This permanently removes your profile, projects, and billing
                history.{' '}
                <span className="text-foreground font-medium">
                  This cannot be undone.
                </span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
