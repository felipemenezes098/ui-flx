'use client'

import { useState } from 'react'
import { TriangleAlert } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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

const CONFIRM_WORD = 'DELETE'

export function DeleteAccount1() {
  const [value, setValue] = useState('')
  const confirmed = value.trim() === CONFIRM_WORD

  return (
    <Card className="border-destructive/40">
      <CardHeader>
        <CardTitle className="text-destructive">Delete account</CardTitle>
        <CardDescription>
          Permanently remove your account and all of its data. This cannot be
          undone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog onOpenChange={() => setValue('')}>
          <DialogTrigger
            render={
              <Button variant="destructive" className="w-full">
                Delete account
              </Button>
            }
          />
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <div className="bg-destructive/10 text-destructive mb-2 flex size-10 items-center justify-center rounded-full">
                <TriangleAlert className="size-5" />
              </div>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This deletes your workspace, files, and billing history. To
                confirm, type {CONFIRM_WORD} below.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2 py-2">
              <Label htmlFor="confirm-delete" className="text-xs">
                Type {CONFIRM_WORD} to confirm
              </Label>
              <Input
                id="confirm-delete"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={CONFIRM_WORD}
                autoComplete="off"
              />
            </div>

            <DialogFooter>
              <Button
                variant="destructive"
                className="w-full"
                disabled={!confirmed}
              >
                Delete this account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
