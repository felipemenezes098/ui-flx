'use client'

import { useState } from 'react'

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

const CONFIRM_TEXT = 'delete'

export function Dialog13() {
  const [value, setValue] = useState('')
  const canDelete = value === CONFIRM_TEXT

  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="destructive">Delete project</Button>}
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete project</DialogTitle>
          <DialogDescription>
            This removes all files, comments, and history. Type{' '}
            <span className="text-foreground font-mono font-medium">
              {CONFIRM_TEXT}
            </span>{' '}
            to confirm.
          </DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel htmlFor="dialog-13-confirm">Confirmation</FieldLabel>
          <Input
            id="dialog-13-confirm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={CONFIRM_TEXT}
            autoComplete="off"
          />
          <FieldDescription>
            The destructive action stays disabled until the text matches.
          </FieldDescription>
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button variant="destructive" disabled={!canDelete}>
            Delete project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
