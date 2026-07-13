import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  BellIcon,
  GitPullRequestIcon,
  MessageSquareIcon,
  UserPlusIcon,
} from 'lucide-react'

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
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            className="relative"
            aria-label="Notifications"
          >
            <BellIcon />
            {unread > 0 && (
              <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-[10px] font-medium">
                {unread}
              </span>
            )}
          </Button>
        }
      />
      <DropdownMenuContent align="center" className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-foreground flex items-center justify-between">
            Notifications
            <Badge variant="secondary" className="rounded-sm px-1.5">
              {unread} new
            </Badge>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {notifications.map((item) => (
          <DropdownMenuItem
            key={item.title}
            className="items-start gap-2.5 py-2"
          >
            <item.icon className="text-muted-foreground mt-0.5" />
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm leading-snug">{item.title}</span>
              <span className="text-muted-foreground text-xs">{item.time}</span>
            </div>
            {item.unread && (
              <span className="bg-primary mt-1.5 size-2 rounded-full" />
            )}
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
