import { InboxIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function Empty05() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open inbox</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Inbox</DialogTitle>
        </DialogHeader>
        <Empty className="border-none p-6">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>You’re all caught up</EmptyTitle>
            <EmptyDescription>
              New messages will appear here as they arrive.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button>
            <PlusIcon data-icon="inline-start" />
            New message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
