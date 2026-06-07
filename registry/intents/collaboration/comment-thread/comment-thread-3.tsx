'use client'

import { useState } from 'react'
import { GitCommitVertical, MessageSquare, Share2, UserPlus } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

type CommentEntry = {
  kind: 'comment'
  id: string
  name: string
  avatar: string
  time: string
  text: string
}

type EventEntry = {
  kind: 'event'
  id: string
  icon: typeof Share2
  time: string
  text: string
}

type Entry = CommentEntry | EventEntry

const INITIAL: Entry[] = [
  {
    kind: 'event',
    id: 'e1',
    icon: UserPlus,
    time: '3h',
    text: 'Grace Hopper was added as an editor',
  },
  {
    kind: 'comment',
    id: 'c1',
    name: 'Ada Lovelace',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces',
    time: '2h',
    text: 'First draft is ready for review.',
  },
  {
    kind: 'event',
    id: 'e2',
    icon: GitCommitVertical,
    time: '2h',
    text: 'Alan Turing edited the pricing section',
  },
  {
    kind: 'comment',
    id: 'c2',
    name: 'Grace Hopper',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces',
    time: '1h',
    text: 'Looks great. Shipping it.',
  },
  {
    kind: 'event',
    id: 'e3',
    icon: Share2,
    time: '40m',
    text: 'Document shared with the design team',
  },
]

export function CommentThread3() {
  const [entries, setEntries] = useState<Entry[]>(INITIAL)
  const [draft, setDraft] = useState('')

  const send = () => {
    const text = draft.trim()
    if (!text) return
    setEntries((prev) => [
      ...prev,
      {
        kind: 'comment',
        id: `me-${prev.length}`,
        name: 'You',
        avatar: '',
        time: 'now',
        text,
      },
    ])
    setDraft('')
  }

  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="size-4" />
          Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {entries.map((entry) =>
          entry.kind === 'comment' ? (
            <div key={entry.id} className="flex gap-3">
              <Avatar className="size-7">
                <AvatarImage src={entry.avatar} alt={entry.name} />
                <AvatarFallback className="bg-muted text-xs">
                  {entry.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium">{entry.name}</span>
                  <span className="text-muted-foreground text-xs">
                    {entry.time}
                  </span>
                </div>
                <p className="text-sm">{entry.text}</p>
              </div>
            </div>
          ) : (
            <div
              key={entry.id}
              className="text-muted-foreground flex items-center gap-3 text-xs"
            >
              <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-full">
                <entry.icon className="size-3.5" />
              </div>
              <span className="flex-1">{entry.text}</span>
              <span>{entry.time}</span>
            </div>
          ),
        )}
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-2">
          <Input
            placeholder="Write a comment..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
          <Button onClick={send} disabled={!draft.trim()}>
            Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
