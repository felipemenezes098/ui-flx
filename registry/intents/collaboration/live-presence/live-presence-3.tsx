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

type Status = 'editing' | 'viewing' | 'idle'

type Member = {
  id: string
  name: string
  avatar: string
  status: Status
  location: string
}

const STATUS_DOT: Record<Status, string> = {
  editing: 'bg-green-500',
  viewing: 'bg-blue-500',
  idle: 'bg-muted-foreground/40',
}

const STATUS_LABEL: Record<Status, string> = {
  editing: 'Editing',
  viewing: 'Viewing',
  idle: 'Idle',
}

const MEMBERS: Member[] = [
  {
    id: 'ada',
    name: 'Ada Lovelace',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces',
    status: 'editing',
    location: 'Pricing section',
  },
  {
    id: 'grace',
    name: 'Grace Hopper',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces',
    status: 'viewing',
    location: 'Executive summary',
  },
  {
    id: 'alan',
    name: 'Alan Turing',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces',
    status: 'idle',
    location: 'Away for 5m',
  },
]

export function LivePresence3() {
  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle>Who is here</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {MEMBERS.map((member) => (
          <div key={member.id} className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="size-9">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-muted text-xs">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <span
                className={`ring-background absolute -right-0.5 -bottom-0.5 size-3 rounded-full ring-2 ${STATUS_DOT[member.status]}`}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">{member.name}</span>
              <span className="text-muted-foreground text-xs">
                {member.location}
              </span>
            </div>
            <span className="text-muted-foreground text-xs">
              {STATUS_LABEL[member.status]}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
