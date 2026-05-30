import { PlusIcon } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const members = [
  {
    name: 'Sofia Rodrigues',
    initials: 'SR',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Liam Carter',
    initials: 'LC',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Ana Moreira',
    initials: 'AM',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Marcus Lee',
    initials: 'ML',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
]

export function AvatarGroupDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold">Project Atlas</span>
          <span className="text-muted-foreground text-xs">5 members</span>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          <PlusIcon className="size-3.5" />
          Invite
        </Button>
      </div>
      <Separator className="my-4" />
      <AvatarGroup>
        {members.map((member) => (
          <Tooltip key={member.name}>
            <TooltipTrigger asChild>
              <Avatar>
                <AvatarImage src={member.src} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>{member.name}</TooltipContent>
          </Tooltip>
        ))}
        <AvatarGroupCount>+1</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
