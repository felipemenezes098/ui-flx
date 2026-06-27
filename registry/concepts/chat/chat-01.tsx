import { Phone, Plus, Search, Send, Video } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const conversations = [
  { name: 'Sofia Davis', last: 'Sounds great, ship it 🚀', time: '2m', active: true, unread: 0, initials: 'SD' },
  { name: 'Design team', last: 'Maya: new mockups are up', time: '18m', active: false, unread: 3, initials: 'DT' },
  { name: 'Liam Chen', last: 'Thanks for the review!', time: '1h', active: false, unread: 0, initials: 'LC' },
  { name: 'Ava Patel', last: 'Can we move standup?', time: '3h', active: false, unread: 0, initials: 'AP' },
]

const messages = [
  { from: 'them', text: 'Hey! Did you get a chance to look at the new hero?' },
  { from: 'me', text: 'Yes — much cleaner now. Love the minimal direction.' },
  { from: 'them', text: 'Right? Dropped the gray background and the clutter.' },
  { from: 'me', text: 'Sounds great, ship it 🚀' },
]

export function Chat01() {
  return (
    <Card className="flex h-[28rem] w-full flex-row gap-0 py-0">
      <aside className="hidden w-64 shrink-0 flex-col border-r sm:flex">
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
          <span className="text-sm font-semibold tracking-tight">Messages</span>
          <Button variant="ghost" size="icon-sm">
            <Plus />
          </Button>
        </div>
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-3.5 -translate-y-1/2" />
            <Input placeholder="Search…" className="h-8 pl-8 text-xs" />
          </div>
        </div>
        <ScrollArea className="min-h-0 flex-1">
          <div className="px-2 pb-2">
            {conversations.map((c) => (
              <Item
                key={c.name}
                size="sm"
                className={cn('cursor-pointer', c.active && 'bg-muted/60')}
              >
                <ItemMedia>
                  <Avatar className="size-9">
                    <AvatarFallback className="text-xs">
                      {c.initials}
                    </AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{c.name}</ItemTitle>
                  <ItemDescription>{c.last}</ItemDescription>
                </ItemContent>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-muted-foreground text-[11px]">
                    {c.time}
                  </span>
                  {c.unread > 0 && (
                    <Badge className="size-4 justify-center rounded-full p-0 text-[10px]">
                      {c.unread}
                    </Badge>
                  )}
                </div>
              </Item>
            ))}
          </div>
        </ScrollArea>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b px-4 py-3">
          <Avatar className="size-8">
            <AvatarFallback className="text-xs">SD</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium">Sofia Davis</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-500">
              Online
            </div>
          </div>
          <Button variant="ghost" size="icon-sm">
            <Phone />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <Video />
          </Button>
        </header>

        <ScrollArea className="min-h-0 flex-1">
          <div className="flex flex-col gap-2.5 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  'flex',
                  m.from === 'me' ? 'justify-end' : 'justify-start',
                )}
              >
                <div
                  className={cn(
                    'max-w-[78%] rounded-2xl px-3.5 py-2 text-sm',
                    m.from === 'me'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-muted rounded-bl-sm',
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex items-center gap-2 border-t p-3">
          <Input placeholder="Type a message…" className="rounded-full" />
          <Button size="icon" className="shrink-0 rounded-full">
            <Send />
          </Button>
        </div>
      </section>
    </Card>
  )
}
