'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Viewer = { id: string; name: string; avatar: string }

const VIEWERS: Viewer[] = [
  {
    id: 'ada',
    name: 'Ada Lovelace',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces',
  },
  {
    id: 'grace',
    name: 'Grace Hopper',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces',
  },
  {
    id: 'alan',
    name: 'Alan Turing',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces',
  },
  {
    id: 'katherine',
    name: 'Katherine Johnson',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=128&h=128&fit=crop&crop=faces',
  },
]

const OVERFLOW = 3

export function LivePresence1() {
  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle>On this page now</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {VIEWERS.map((viewer) => (
            <Tooltip key={viewer.id}>
              <TooltipTrigger asChild>
                <Avatar className="ring-background size-9 ring-2">
                  <AvatarImage src={viewer.avatar} alt={viewer.name} />
                  <AvatarFallback className="bg-muted text-xs">
                    {viewer.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>{viewer.name}</TooltipContent>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="bg-muted text-muted-foreground ring-background flex size-9 items-center justify-center rounded-full text-xs font-medium ring-2">
                +{OVERFLOW}
              </div>
            </TooltipTrigger>
            <TooltipContent>3 more viewing</TooltipContent>
          </Tooltip>
        </div>
        <span className="text-muted-foreground text-sm">
          {VIEWERS.length + OVERFLOW} people viewing
        </span>
      </CardContent>
    </Card>
  )
}
