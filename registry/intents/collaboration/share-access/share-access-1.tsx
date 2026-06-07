'use client'

import { useState } from 'react'
import { Check, Copy, Globe, Link2, Lock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const LINK = 'https://app.acme.com/d/q7x2-prd-roadmap'

export function ShareAccess1() {
  const [open, setOpen] = useState(true)
  const [role, setRole] = useState('viewer')
  const [expiry, setExpiry] = useState('never')
  const [copied, setCopied] = useState(false)

  const copy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle>Share link</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <div className="text-muted-foreground flex size-9 shrink-0 items-center justify-center rounded-full border">
            {open ? <Globe className="size-4" /> : <Lock className="size-4" />}
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium">
              {open ? 'Anyone with the link' : 'Restricted'}
            </span>
            <span className="text-muted-foreground text-xs">
              {open
                ? 'No sign-in required to open'
                : 'Only invited people can open'}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Restrict' : 'Enable link'}
          </Button>
        </div>

        {open && (
          <>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Link2 className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <Input readOnly value={LINK} className="pl-9 text-xs" />
              </div>
              <Button
                variant="secondary"
                size="icon"
                onClick={copy}
                aria-label="Copy link"
              >
                {copied ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
            </div>

            <Separator />

            <div className="flex gap-3">
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs">Permission</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="viewer">Can view</SelectItem>
                      <SelectItem value="commenter">Can comment</SelectItem>
                      <SelectItem value="editor">Can edit</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs">Expires</Label>
                <Select value={expiry} onValueChange={setExpiry}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="never">Never</SelectItem>
                      <SelectItem value="7d">In 7 days</SelectItem>
                      <SelectItem value="30d">In 30 days</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={copy}>
          {copied ? 'Link copied' : 'Copy link'}
        </Button>
      </CardFooter>
    </Card>
  )
}
