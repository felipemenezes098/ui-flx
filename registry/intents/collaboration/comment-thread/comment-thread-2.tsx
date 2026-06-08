'use client'

import { useState } from 'react'
import { Check, MessageSquare } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Empty,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

type Thread = {
  id: string
  name: string
  avatar: string
  anchor: string
  text: string
  count: number
}

const THREADS: Thread[] = [
  {
    id: 't1',
    name: 'Ada Lovelace',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces',
    anchor: 'Executive summary',
    text: 'Can we lead with the revenue number instead?',
    count: 3,
  },
  {
    id: 't2',
    name: 'Alan Turing',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces',
    anchor: 'Roadmap, Q3',
    text: 'This milestone slipped, should we move it?',
    count: 1,
  },
  {
    id: 't3',
    name: 'Grace Hopper',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces',
    anchor: 'Pricing table',
    text: 'Typo in the enterprise tier.',
    count: 2,
  },
]

export function CommentThread2() {
  const [filter, setFilter] = useState('open')
  const [open, setOpen] = useState<Thread[]>(THREADS)
  const [resolved, setResolved] = useState<Thread[]>([])

  const resolve = (id: string) => {
    const item = open.find((t) => t.id === id)
    if (!item) return
    setOpen((prev) => prev.filter((t) => t.id !== id))
    setResolved((prev) => [...prev, item])
  }

  const list = filter === 'open' ? open : resolved

  return (
    <Card>
      <CardHeader className="gap-3">
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="size-4" />
          Comments
        </CardTitle>
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(v) => v && setFilter(v)}
          variant="outline"
          size="sm"
          className="w-full"
        >
          <ToggleGroupItem value="open" className="flex-1">
            Open ({open.length})
          </ToggleGroupItem>
          <ToggleGroupItem value="resolved" className="flex-1">
            Resolved ({resolved.length})
          </ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {list.length === 0 ? (
          <Empty className="py-8">
            <EmptyMedia variant="icon">
              <Check className="size-5" />
            </EmptyMedia>
            <EmptyTitle>Nothing here</EmptyTitle>
            <EmptyDescription>
              {filter === 'open'
                ? 'Every thread is resolved.'
                : 'No resolved threads yet.'}
            </EmptyDescription>
          </Empty>
        ) : (
          list.map((thread) => (
            <div
              key={thread.id}
              className="hover:bg-muted/50 flex flex-col gap-2 rounded-lg border p-3"
            >
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src={thread.avatar} alt={thread.name} />
                  <AvatarFallback className="bg-muted text-[10px]">
                    {thread.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{thread.name}</span>
                <span className="text-muted-foreground ml-auto text-xs">
                  {thread.count} replies
                </span>
              </div>
              <span className="text-muted-foreground text-xs">
                on {thread.anchor}
              </span>
              <p className="text-sm">{thread.text}</p>
              {filter === 'open' && (
                <Button
                  variant="outline"
                  size="sm"
                  className="self-end"
                  onClick={() => resolve(thread.id)}
                >
                  Mark as resolved
                </Button>
              )}
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
