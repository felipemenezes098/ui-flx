import { CircleAlertIcon } from 'lucide-react'

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

export function Dialog01() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Publish changes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="bg-muted flex size-10 items-center justify-center rounded-full">
              <CircleAlertIcon />
            </div>
            <div className="flex flex-col gap-2">
              <DialogTitle>Publish changes?</DialogTitle>
              <DialogDescription>
                Your draft will go live for all workspace members. You can
                revert within 30 days from version history.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Publish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
