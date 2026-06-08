'use client'

import { useState } from 'react'
import { Check, Inbox, X } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Empty,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Request = {
  id: string
  name: string
  email: string
  avatar: string
  note: string
}

const INITIAL: Request[] = [
  {
    id: 'katherine',
    name: 'Katherine Johnson',
    email: 'katherine@acme.com',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=128&h=128&fit=crop&crop=faces',
    note: 'Need edit access to update the launch numbers.',
  },
  {
    id: 'linus',
    name: 'Linus Carlsson',
    email: 'linus@partner.io',
    avatar:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?w=128&h=128&fit=crop&crop=faces',
    note: 'External partner, view only is fine.',
  },
]

export function ShareAccess3() {
  const [requests, setRequests] = useState<Request[]>(INITIAL)
  const [grantRole, setGrantRole] = useState<Record<string, string>>({})

  const resolve = (id: string) =>
    setRequests((prev) => prev.filter((r) => r.id !== id))

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Access requests</CardTitle>
          {requests.length > 0 && (
            <Badge variant="secondary">{requests.length} pending</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {requests.length === 0 ? (
          <Empty className="py-8">
            <EmptyMedia variant="icon">
              <Inbox className="size-5" />
            </EmptyMedia>
            <EmptyTitle>All caught up</EmptyTitle>
            <EmptyDescription>No pending access requests.</EmptyDescription>
          </Empty>
        ) : (
          requests.map((req) => (
            <div
              key={req.id}
              className="flex flex-col gap-3 rounded-lg border p-3"
            >
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarImage src={req.avatar} alt={req.name} />
                  <AvatarFallback className="bg-muted text-xs">
                    {req.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm font-medium">
                    {req.name}
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    {req.email}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">{req.note}</p>
              <div className="flex flex-wrap items-center gap-2">
                <Select
                  value={grantRole[req.id] ?? 'viewer'}
                  onValueChange={(v) =>
                    setGrantRole((prev) => ({ ...prev, [req.id]: v }))
                  }
                >
                  <SelectTrigger size="sm" className="w-28">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="flex min-w-[8rem] flex-1 justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => resolve(req.id)}
                  >
                    <X className="size-4" />
                    Deny
                  </Button>
                  <Button size="sm" onClick={() => resolve(req.id)}>
                    <Check className="size-4" />
                    Grant
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
