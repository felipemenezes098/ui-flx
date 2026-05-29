import {
  BellIcon,
  GitMergeIcon,
  MessageSquareIcon,
  UserPlusIcon,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

const notifications = [
  {
    icon: MessageSquareIcon,
    title: 'Maya left a comment',
    time: '2m',
    unread: true,
  },
  {
    icon: GitMergeIcon,
    title: 'PR #482 merged',
    time: '1h',
    unread: true,
  },
  {
    icon: UserPlusIcon,
    title: 'Alex joined the team',
    time: '1d',
    unread: false,
  },
] as const

export function Popover10() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Notifications"
        >
          <BellIcon />
          <Badge
            variant="destructive"
            className="pointer-events-none absolute -top-1 -right-1 size-4 rounded-full p-0 text-[10px]"
          >
            2
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 gap-0 p-0">
        <div className="flex items-center justify-between px-3 py-2">
          <p className="text-sm font-medium">Notifications</p>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            Mark all read
          </Button>
        </div>
        <Separator />
        <ul className="flex flex-col py-1">
          {notifications.map((n, i) => (
            <li
              key={i}
              className="hover:bg-muted/60 flex items-center gap-3 px-3 py-2 transition-colors"
            >
              <span className="bg-muted text-muted-foreground flex size-7 shrink-0 items-center justify-center rounded-full">
                <n.icon className="size-3.5" />
              </span>
              <span className="flex-1 truncate text-sm">{n.title}</span>
              <span className="text-muted-foreground text-xs">{n.time}</span>
              {n.unread && (
                <span className="bg-primary size-1.5 shrink-0 rounded-full" />
              )}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
