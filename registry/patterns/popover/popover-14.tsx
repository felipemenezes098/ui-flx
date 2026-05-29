import { UsersIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const members = [
  { name: 'Sofia Rodrigues', role: 'Design lead', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop' },
  { name: 'Marcus Chen', role: 'Engineering', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop' },
  { name: 'Aisha Patel', role: 'Product', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&auto=format&fit=crop' },
  { name: 'Lucas Silva', role: 'Engineering', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop' },
  { name: 'Emma Walker', role: 'Marketing', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop' },
  { name: 'Noah Becker', role: 'Engineering', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop' },
  { name: 'Yuki Tanaka', role: 'Design', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=120&auto=format&fit=crop' },
  { name: 'Olivia Brown', role: 'Operations', src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=120&auto=format&fit=crop' },
  { name: 'Ravi Kumar', role: 'Engineering', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=120&auto=format&fit=crop' },
  { name: 'Hannah Lee', role: 'Support', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop' },
] as const

export function Popover14() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <UsersIcon data-icon="inline-start" />
          Members
          <span className="text-muted-foreground ml-1 text-xs">
            {members.length}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 gap-0 p-0">
        <div className="px-3 py-2">
          <p className="text-sm font-medium">Team members</p>
          <p className="text-muted-foreground text-xs">
            Scroll to see everyone.
          </p>
        </div>
        <Separator />
        <ScrollArea className="h-64">
          <ul className="flex flex-col py-1">
            {members.map((m) => (
              <li
                key={m.name}
                className="hover:bg-muted/60 flex items-center gap-3 px-3 py-2"
              >
                <Avatar className="size-8">
                  <AvatarImage src={m.src} alt={m.name} />
                  <AvatarFallback>
                    {m.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm font-medium">{m.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {m.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
