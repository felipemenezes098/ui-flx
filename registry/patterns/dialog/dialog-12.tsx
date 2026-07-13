import { CircleCheckIcon } from 'lucide-react'

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

export function Dialog12() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">Complete setup</Button>}
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="items-center text-center">
          <div className="bg-primary/10 text-primary mb-1 flex size-14 items-center justify-center rounded-full">
            <CircleCheckIcon />
          </div>
          <DialogTitle>Workspace ready</DialogTitle>
          <DialogDescription>
            Your team, billing, and integrations are configured. You can start
            inviting collaborators now.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <DialogClose
            render={<Button className="w-full sm:w-auto">Continue</Button>}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
