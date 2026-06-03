import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BellIcon, GitPullRequestIcon, MessageSquareIcon, UserPlusIcon } from 'lucide-react'

const notifications = [
  {
    icon: MessageSquareIcon,
    title: 'Ava commented on your PR',
    time: '2m ago',
    unread: true,
  },
  {
    icon: GitPullRequestIcon,
    title: 'Ben requested a review',
    time: '1h ago',
    unread: true,
  },
  {
    icon: UserPlusIcon,
    title: 'Cara joined the team',
    time: 'Yesterday',
    unread: false,
  },
]

export function Dropdown16() {
  const unread = notifications.filter((item) => item.unread).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          className="relative"
          aria-label="Notifications"
        >
          <BellIcon />
          {unread > 0 && (
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              {unread}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="flex items-center justify-between text-foreground">
          Notifications
          <Badge variant="secondary" className="rounded-sm px-1.5">
            {unread} new
          </Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((item) => (
          <DropdownMenuItem key={item.title} className="items-start gap-2.5 py-2">
            <item.icon className="mt-0.5 text-muted-foreground" />
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm leading-snug">{item.title}</span>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
            {item.unread && <span className="mt-1.5 size-2 rounded-full bg-primary" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-sm">
          View all
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
