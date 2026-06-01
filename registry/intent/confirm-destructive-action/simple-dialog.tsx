'use client'

import { TriangleAlertIcon } from 'lucide-react'

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

export function SimpleDialogDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Project Atlas</span>
        <span className="text-muted-foreground text-xs">
          12 members · Created Jan 2024
        </span>
      </div>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" size="sm" className="w-full">
              Delete project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className="bg-destructive/10 mb-1 flex size-10 items-center justify-center rounded-full">
                <TriangleAlertIcon className="text-destructive size-5" />
              </div>
              <DialogTitle>Delete project?</DialogTitle>
              <DialogDescription>
                Project Atlas and all its data will be permanently deleted. This
                action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Delete project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
