'use client'

import { TriangleAlertIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const WORKSPACE = 'acme'

function TypeToConfirmDialog() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const confirmed = value === WORKSPACE

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) setValue('')
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm" className="w-full">
          Delete workspace
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="bg-destructive/10 mb-1 flex size-10 items-center justify-center rounded-full">
            <TriangleAlertIcon className="text-destructive size-5" />
          </div>
          <DialogTitle>Delete workspace?</DialogTitle>
          <DialogDescription>
            All projects, members, and billing data under{' '}
            <strong className="text-foreground font-medium">{WORKSPACE}</strong>{' '}
            will be permanently erased.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1.5">
          <Label className="text-muted-foreground text-xs">
            Type{' '}
            <strong className="text-foreground font-medium">{WORKSPACE}</strong>{' '}
            to confirm
          </Label>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={WORKSPACE}
            autoComplete="off"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            disabled={!confirmed}
            onClick={() => handleOpenChange(false)}
          >
            Delete workspace
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function TypeToConfirmDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">acme</span>
        <span className="text-muted-foreground text-xs">
          Workspace · Pro plan
        </span>
      </div>
      <div className="mt-4">
        <TypeToConfirmDialog />
      </div>
    </div>
  )
}
